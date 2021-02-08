import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ITachesEffectue, TachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';
import { TachesEffectueService } from './taches-effectue.service';
import { TachesEffectueComponent } from './taches-effectue.component';
import { TachesEffectueDetailComponent } from './taches-effectue-detail.component';
import { TachesEffectueUpdateComponent } from './taches-effectue-update.component';

@Injectable({ providedIn: 'root' })
export class TachesEffectueResolve implements Resolve<ITachesEffectue> {
  constructor(private service: TachesEffectueService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITachesEffectue> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((tachesEffectue: HttpResponse<TachesEffectue>) => {
          if (tachesEffectue.body) {
            return of(tachesEffectue.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new TachesEffectue());
  }
}

export const tachesEffectueRoute: Routes = [
  {
    path: '',
    component: TachesEffectueComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsTachesEffectue.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TachesEffectueDetailComponent,
    resolve: {
      tachesEffectue: TachesEffectueResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsTachesEffectue.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TachesEffectueUpdateComponent,
    resolve: {
      tachesEffectue: TachesEffectueResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsTachesEffectue.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TachesEffectueUpdateComponent,
    resolve: {
      tachesEffectue: TachesEffectueResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsTachesEffectue.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
