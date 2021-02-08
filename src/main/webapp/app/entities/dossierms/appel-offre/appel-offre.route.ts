import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IAppelOffre, AppelOffre } from 'app/shared/model/dossierms/appel-offre.model';
import { AppelOffreService } from './appel-offre.service';
import { AppelOffreComponent } from './appel-offre.component';
import { AppelOffreDetailComponent } from './appel-offre-detail.component';
import { AppelOffreUpdateComponent } from './appel-offre-update.component';

@Injectable({ providedIn: 'root' })
export class AppelOffreResolve implements Resolve<IAppelOffre> {
  constructor(private service: AppelOffreService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IAppelOffre> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((appelOffre: HttpResponse<AppelOffre>) => {
          if (appelOffre.body) {
            return of(appelOffre.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new AppelOffre());
  }
}

export const appelOffreRoute: Routes = [
  {
    path: '',
    component: AppelOffreComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: AppelOffreDetailComponent,
    resolve: {
      appelOffre: AppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: AppelOffreUpdateComponent,
    resolve: {
      appelOffre: AppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: AppelOffreUpdateComponent,
    resolve: {
      appelOffre: AppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
