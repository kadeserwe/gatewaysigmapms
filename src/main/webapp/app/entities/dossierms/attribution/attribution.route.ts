import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IAttribution, Attribution } from 'app/shared/model/dossierms/attribution.model';
import { AttributionService } from './attribution.service';
import { AttributionComponent } from './attribution.component';
import { AttributionDetailComponent } from './attribution-detail.component';
import { AttributionUpdateComponent } from './attribution-update.component';

@Injectable({ providedIn: 'root' })
export class AttributionResolve implements Resolve<IAttribution> {
  constructor(private service: AttributionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IAttribution> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((attribution: HttpResponse<Attribution>) => {
          if (attribution.body) {
            return of(attribution.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Attribution());
  }
}

export const attributionRoute: Routes = [
  {
    path: '',
    component: AttributionComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: AttributionDetailComponent,
    resolve: {
      attribution: AttributionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: AttributionUpdateComponent,
    resolve: {
      attribution: AttributionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: AttributionUpdateComponent,
    resolve: {
      attribution: AttributionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
