import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDossiersPiece, DossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';
import { DossiersPieceService } from './dossiers-piece.service';
import { DossiersPieceComponent } from './dossiers-piece.component';
import { DossiersPieceDetailComponent } from './dossiers-piece-detail.component';
import { DossiersPieceUpdateComponent } from './dossiers-piece-update.component';

@Injectable({ providedIn: 'root' })
export class DossiersPieceResolve implements Resolve<IDossiersPiece> {
  constructor(private service: DossiersPieceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDossiersPiece> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dossiersPiece: HttpResponse<DossiersPiece>) => {
          if (dossiersPiece.body) {
            return of(dossiersPiece.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DossiersPiece());
  }
}

export const dossiersPieceRoute: Routes = [
  {
    path: '',
    component: DossiersPieceComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersPiece.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DossiersPieceDetailComponent,
    resolve: {
      dossiersPiece: DossiersPieceResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersPiece.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DossiersPieceUpdateComponent,
    resolve: {
      dossiersPiece: DossiersPieceResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersPiece.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DossiersPieceUpdateComponent,
    resolve: {
      dossiersPiece: DossiersPieceResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersPiece.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
