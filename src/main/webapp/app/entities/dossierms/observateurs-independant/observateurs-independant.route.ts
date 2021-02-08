import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IObservateursIndependant, ObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';
import { ObservateursIndependantService } from './observateurs-independant.service';
import { ObservateursIndependantComponent } from './observateurs-independant.component';
import { ObservateursIndependantDetailComponent } from './observateurs-independant-detail.component';
import { ObservateursIndependantUpdateComponent } from './observateurs-independant-update.component';

@Injectable({ providedIn: 'root' })
export class ObservateursIndependantResolve implements Resolve<IObservateursIndependant> {
  constructor(private service: ObservateursIndependantService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IObservateursIndependant> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((observateursIndependant: HttpResponse<ObservateursIndependant>) => {
          if (observateursIndependant.body) {
            return of(observateursIndependant.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ObservateursIndependant());
  }
}

export const observateursIndependantRoute: Routes = [
  {
    path: '',
    component: ObservateursIndependantComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsObservateursIndependant.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ObservateursIndependantDetailComponent,
    resolve: {
      observateursIndependant: ObservateursIndependantResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsObservateursIndependant.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ObservateursIndependantUpdateComponent,
    resolve: {
      observateursIndependant: ObservateursIndependantResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsObservateursIndependant.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ObservateursIndependantUpdateComponent,
    resolve: {
      observateursIndependant: ObservateursIndependantResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsObservateursIndependant.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
