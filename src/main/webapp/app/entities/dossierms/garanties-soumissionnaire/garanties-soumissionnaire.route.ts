import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IGarantiesSoumissionnaire, GarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';
import { GarantiesSoumissionnaireService } from './garanties-soumissionnaire.service';
import { GarantiesSoumissionnaireComponent } from './garanties-soumissionnaire.component';
import { GarantiesSoumissionnaireDetailComponent } from './garanties-soumissionnaire-detail.component';
import { GarantiesSoumissionnaireUpdateComponent } from './garanties-soumissionnaire-update.component';

@Injectable({ providedIn: 'root' })
export class GarantiesSoumissionnaireResolve implements Resolve<IGarantiesSoumissionnaire> {
  constructor(private service: GarantiesSoumissionnaireService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IGarantiesSoumissionnaire> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((garantiesSoumissionnaire: HttpResponse<GarantiesSoumissionnaire>) => {
          if (garantiesSoumissionnaire.body) {
            return of(garantiesSoumissionnaire.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new GarantiesSoumissionnaire());
  }
}

export const garantiesSoumissionnaireRoute: Routes = [
  {
    path: '',
    component: GarantiesSoumissionnaireComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsGarantiesSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: GarantiesSoumissionnaireDetailComponent,
    resolve: {
      garantiesSoumissionnaire: GarantiesSoumissionnaireResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsGarantiesSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: GarantiesSoumissionnaireUpdateComponent,
    resolve: {
      garantiesSoumissionnaire: GarantiesSoumissionnaireResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsGarantiesSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: GarantiesSoumissionnaireUpdateComponent,
    resolve: {
      garantiesSoumissionnaire: GarantiesSoumissionnaireResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsGarantiesSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
