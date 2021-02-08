import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IMonnaieOffre, MonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';
import { MonnaieOffreService } from './monnaie-offre.service';
import { MonnaieOffreComponent } from './monnaie-offre.component';
import { MonnaieOffreDetailComponent } from './monnaie-offre-detail.component';
import { MonnaieOffreUpdateComponent } from './monnaie-offre-update.component';

@Injectable({ providedIn: 'root' })
export class MonnaieOffreResolve implements Resolve<IMonnaieOffre> {
  constructor(private service: MonnaieOffreService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMonnaieOffre> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((monnaieOffre: HttpResponse<MonnaieOffre>) => {
          if (monnaieOffre.body) {
            return of(monnaieOffre.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new MonnaieOffre());
  }
}

export const monnaieOffreRoute: Routes = [
  {
    path: '',
    component: MonnaieOffreComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsMonnaieOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: MonnaieOffreDetailComponent,
    resolve: {
      monnaieOffre: MonnaieOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsMonnaieOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: MonnaieOffreUpdateComponent,
    resolve: {
      monnaieOffre: MonnaieOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsMonnaieOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: MonnaieOffreUpdateComponent,
    resolve: {
      monnaieOffre: MonnaieOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsMonnaieOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
