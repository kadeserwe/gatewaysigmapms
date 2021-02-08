import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IAvisAttribution, AvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';
import { AvisAttributionService } from './avis-attribution.service';
import { AvisAttributionComponent } from './avis-attribution.component';
import { AvisAttributionDetailComponent } from './avis-attribution-detail.component';
import { AvisAttributionUpdateComponent } from './avis-attribution-update.component';

@Injectable({ providedIn: 'root' })
export class AvisAttributionResolve implements Resolve<IAvisAttribution> {
  constructor(private service: AvisAttributionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IAvisAttribution> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((avisAttribution: HttpResponse<AvisAttribution>) => {
          if (avisAttribution.body) {
            return of(avisAttribution.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new AvisAttribution());
  }
}

export const avisAttributionRoute: Routes = [
  {
    path: '',
    component: AvisAttributionComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsAvisAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: AvisAttributionDetailComponent,
    resolve: {
      avisAttribution: AvisAttributionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAvisAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: AvisAttributionUpdateComponent,
    resolve: {
      avisAttribution: AvisAttributionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAvisAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: AvisAttributionUpdateComponent,
    resolve: {
      avisAttribution: AvisAttributionResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsAvisAttribution.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
