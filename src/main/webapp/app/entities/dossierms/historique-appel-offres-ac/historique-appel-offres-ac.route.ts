import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IHistoriqueAppelOffresAC, HistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';
import { HistoriqueAppelOffresACService } from './historique-appel-offres-ac.service';
import { HistoriqueAppelOffresACComponent } from './historique-appel-offres-ac.component';
import { HistoriqueAppelOffresACDetailComponent } from './historique-appel-offres-ac-detail.component';
import { HistoriqueAppelOffresACUpdateComponent } from './historique-appel-offres-ac-update.component';

@Injectable({ providedIn: 'root' })
export class HistoriqueAppelOffresACResolve implements Resolve<IHistoriqueAppelOffresAC> {
  constructor(private service: HistoriqueAppelOffresACService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IHistoriqueAppelOffresAC> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((historiqueAppelOffresAC: HttpResponse<HistoriqueAppelOffresAC>) => {
          if (historiqueAppelOffresAC.body) {
            return of(historiqueAppelOffresAC.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new HistoriqueAppelOffresAC());
  }
}

export const historiqueAppelOffresACRoute: Routes = [
  {
    path: '',
    component: HistoriqueAppelOffresACComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsHistoriqueAppelOffresAc.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: HistoriqueAppelOffresACDetailComponent,
    resolve: {
      historiqueAppelOffresAC: HistoriqueAppelOffresACResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsHistoriqueAppelOffresAc.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: HistoriqueAppelOffresACUpdateComponent,
    resolve: {
      historiqueAppelOffresAC: HistoriqueAppelOffresACResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsHistoriqueAppelOffresAc.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: HistoriqueAppelOffresACUpdateComponent,
    resolve: {
      historiqueAppelOffresAC: HistoriqueAppelOffresACResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsHistoriqueAppelOffresAc.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
