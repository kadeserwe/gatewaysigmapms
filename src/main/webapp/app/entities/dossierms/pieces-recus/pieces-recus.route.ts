import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPiecesRecus, PiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';
import { PiecesRecusService } from './pieces-recus.service';
import { PiecesRecusComponent } from './pieces-recus.component';
import { PiecesRecusDetailComponent } from './pieces-recus-detail.component';
import { PiecesRecusUpdateComponent } from './pieces-recus-update.component';

@Injectable({ providedIn: 'root' })
export class PiecesRecusResolve implements Resolve<IPiecesRecus> {
  constructor(private service: PiecesRecusService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPiecesRecus> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((piecesRecus: HttpResponse<PiecesRecus>) => {
          if (piecesRecus.body) {
            return of(piecesRecus.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PiecesRecus());
  }
}

export const piecesRecusRoute: Routes = [
  {
    path: '',
    component: PiecesRecusComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesRecus.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PiecesRecusDetailComponent,
    resolve: {
      piecesRecus: PiecesRecusResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesRecus.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PiecesRecusUpdateComponent,
    resolve: {
      piecesRecus: PiecesRecusResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesRecus.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PiecesRecusUpdateComponent,
    resolve: {
      piecesRecus: PiecesRecusResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsPiecesRecus.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
