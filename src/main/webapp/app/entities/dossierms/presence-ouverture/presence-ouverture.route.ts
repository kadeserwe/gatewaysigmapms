import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPresenceOuverture, PresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';
import { PresenceOuvertureService } from './presence-ouverture.service';
import { PresenceOuvertureComponent } from './presence-ouverture.component';
import { PresenceOuvertureDetailComponent } from './presence-ouverture-detail.component';
import { PresenceOuvertureUpdateComponent } from './presence-ouverture-update.component';

@Injectable({ providedIn: 'root' })
export class PresenceOuvertureResolve implements Resolve<IPresenceOuverture> {
  constructor(private service: PresenceOuvertureService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPresenceOuverture> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((presenceOuverture: HttpResponse<PresenceOuverture>) => {
          if (presenceOuverture.body) {
            return of(presenceOuverture.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PresenceOuverture());
  }
}

export const presenceOuvertureRoute: Routes = [
  {
    path: '',
    component: PresenceOuvertureComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsPresenceOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PresenceOuvertureDetailComponent,
    resolve: {
      presenceOuverture: PresenceOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPresenceOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PresenceOuvertureUpdateComponent,
    resolve: {
      presenceOuverture: PresenceOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPresenceOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PresenceOuvertureUpdateComponent,
    resolve: {
      presenceOuverture: PresenceOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPresenceOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
