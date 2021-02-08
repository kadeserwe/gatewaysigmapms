import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICritereQualifiSoum, CritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';
import { CritereQualifiSoumService } from './critere-qualifi-soum.service';
import { CritereQualifiSoumComponent } from './critere-qualifi-soum.component';
import { CritereQualifiSoumDetailComponent } from './critere-qualifi-soum-detail.component';
import { CritereQualifiSoumUpdateComponent } from './critere-qualifi-soum-update.component';

@Injectable({ providedIn: 'root' })
export class CritereQualifiSoumResolve implements Resolve<ICritereQualifiSoum> {
  constructor(private service: CritereQualifiSoumService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICritereQualifiSoum> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((critereQualifiSoum: HttpResponse<CritereQualifiSoum>) => {
          if (critereQualifiSoum.body) {
            return of(critereQualifiSoum.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CritereQualifiSoum());
  }
}

export const critereQualifiSoumRoute: Routes = [
  {
    path: '',
    component: CritereQualifiSoumComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsCritereQualifiSoum.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CritereQualifiSoumDetailComponent,
    resolve: {
      critereQualifiSoum: CritereQualifiSoumResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCritereQualifiSoum.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CritereQualifiSoumUpdateComponent,
    resolve: {
      critereQualifiSoum: CritereQualifiSoumResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCritereQualifiSoum.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CritereQualifiSoumUpdateComponent,
    resolve: {
      critereQualifiSoum: CritereQualifiSoumResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCritereQualifiSoum.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
