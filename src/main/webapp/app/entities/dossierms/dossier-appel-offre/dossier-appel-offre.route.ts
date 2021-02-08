import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDossierAppelOffre, DossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from './dossier-appel-offre.service';
import { DossierAppelOffreComponent } from './dossier-appel-offre.component';
import { DossierAppelOffreDetailComponent } from './dossier-appel-offre-detail.component';
import { DossierAppelOffreUpdateComponent } from './dossier-appel-offre-update.component';

@Injectable({ providedIn: 'root' })
export class DossierAppelOffreResolve implements Resolve<IDossierAppelOffre> {
  constructor(private service: DossierAppelOffreService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDossierAppelOffre> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dossierAppelOffre: HttpResponse<DossierAppelOffre>) => {
          if (dossierAppelOffre.body) {
            return of(dossierAppelOffre.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DossierAppelOffre());
  }
}

export const dossierAppelOffreRoute: Routes = [
  {
    path: '',
    component: DossierAppelOffreComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsDossierAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DossierAppelOffreDetailComponent,
    resolve: {
      dossierAppelOffre: DossierAppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossierAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DossierAppelOffreUpdateComponent,
    resolve: {
      dossierAppelOffre: DossierAppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossierAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DossierAppelOffreUpdateComponent,
    resolve: {
      dossierAppelOffre: DossierAppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossierAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
