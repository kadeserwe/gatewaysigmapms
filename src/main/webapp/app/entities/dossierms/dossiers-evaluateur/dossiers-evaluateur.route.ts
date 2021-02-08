import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDossiersEvaluateur, DossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';
import { DossiersEvaluateurService } from './dossiers-evaluateur.service';
import { DossiersEvaluateurComponent } from './dossiers-evaluateur.component';
import { DossiersEvaluateurDetailComponent } from './dossiers-evaluateur-detail.component';
import { DossiersEvaluateurUpdateComponent } from './dossiers-evaluateur-update.component';

@Injectable({ providedIn: 'root' })
export class DossiersEvaluateurResolve implements Resolve<IDossiersEvaluateur> {
  constructor(private service: DossiersEvaluateurService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDossiersEvaluateur> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dossiersEvaluateur: HttpResponse<DossiersEvaluateur>) => {
          if (dossiersEvaluateur.body) {
            return of(dossiersEvaluateur.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DossiersEvaluateur());
  }
}

export const dossiersEvaluateurRoute: Routes = [
  {
    path: '',
    component: DossiersEvaluateurComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersEvaluateur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DossiersEvaluateurDetailComponent,
    resolve: {
      dossiersEvaluateur: DossiersEvaluateurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersEvaluateur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DossiersEvaluateurUpdateComponent,
    resolve: {
      dossiersEvaluateur: DossiersEvaluateurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersEvaluateur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DossiersEvaluateurUpdateComponent,
    resolve: {
      dossiersEvaluateur: DossiersEvaluateurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersEvaluateur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
