import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPlisOuverture, PlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from './plis-ouverture.service';
import { PlisOuvertureComponent } from './plis-ouverture.component';
import { PlisOuvertureDetailComponent } from './plis-ouverture-detail.component';
import { PlisOuvertureUpdateComponent } from './plis-ouverture-update.component';

@Injectable({ providedIn: 'root' })
export class PlisOuvertureResolve implements Resolve<IPlisOuverture> {
  constructor(private service: PlisOuvertureService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPlisOuverture> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((plisOuverture: HttpResponse<PlisOuverture>) => {
          if (plisOuverture.body) {
            return of(plisOuverture.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PlisOuverture());
  }
}

export const plisOuvertureRoute: Routes = [
  {
    path: '',
    component: PlisOuvertureComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PlisOuvertureDetailComponent,
    resolve: {
      plisOuverture: PlisOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PlisOuvertureUpdateComponent,
    resolve: {
      plisOuverture: PlisOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PlisOuvertureUpdateComponent,
    resolve: {
      plisOuverture: PlisOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
