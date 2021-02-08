import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDossiersSouscritere, DossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';
import { DossiersSouscritereService } from './dossiers-souscritere.service';
import { DossiersSouscritereComponent } from './dossiers-souscritere.component';
import { DossiersSouscritereDetailComponent } from './dossiers-souscritere-detail.component';
import { DossiersSouscritereUpdateComponent } from './dossiers-souscritere-update.component';

@Injectable({ providedIn: 'root' })
export class DossiersSouscritereResolve implements Resolve<IDossiersSouscritere> {
  constructor(private service: DossiersSouscritereService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDossiersSouscritere> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dossiersSouscritere: HttpResponse<DossiersSouscritere>) => {
          if (dossiersSouscritere.body) {
            return of(dossiersSouscritere.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DossiersSouscritere());
  }
}

export const dossiersSouscritereRoute: Routes = [
  {
    path: '',
    component: DossiersSouscritereComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersSouscritere.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DossiersSouscritereDetailComponent,
    resolve: {
      dossiersSouscritere: DossiersSouscritereResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersSouscritere.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DossiersSouscritereUpdateComponent,
    resolve: {
      dossiersSouscritere: DossiersSouscritereResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersSouscritere.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DossiersSouscritereUpdateComponent,
    resolve: {
      dossiersSouscritere: DossiersSouscritereResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersSouscritere.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
