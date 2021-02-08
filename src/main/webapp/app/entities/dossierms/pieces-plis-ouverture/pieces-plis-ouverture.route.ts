import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPiecesPlisOuverture, PiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';
import { PiecesPlisOuvertureService } from './pieces-plis-ouverture.service';
import { PiecesPlisOuvertureComponent } from './pieces-plis-ouverture.component';
import { PiecesPlisOuvertureDetailComponent } from './pieces-plis-ouverture-detail.component';
import { PiecesPlisOuvertureUpdateComponent } from './pieces-plis-ouverture-update.component';

@Injectable({ providedIn: 'root' })
export class PiecesPlisOuvertureResolve implements Resolve<IPiecesPlisOuverture> {
  constructor(private service: PiecesPlisOuvertureService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPiecesPlisOuverture> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((piecesPlisOuverture: HttpResponse<PiecesPlisOuverture>) => {
          if (piecesPlisOuverture.body) {
            return of(piecesPlisOuverture.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PiecesPlisOuverture());
  }
}

export const piecesPlisOuvertureRoute: Routes = [
  {
    path: '',
    component: PiecesPlisOuvertureComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PiecesPlisOuvertureDetailComponent,
    resolve: {
      piecesPlisOuverture: PiecesPlisOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PiecesPlisOuvertureUpdateComponent,
    resolve: {
      piecesPlisOuverture: PiecesPlisOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PiecesPlisOuvertureUpdateComponent,
    resolve: {
      piecesPlisOuverture: PiecesPlisOuvertureResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesPlisOuverture.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
