import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IMembresCommissionsMarche, MembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';
import { MembresCommissionsMarcheService } from './membres-commissions-marche.service';
import { MembresCommissionsMarcheComponent } from './membres-commissions-marche.component';
import { MembresCommissionsMarcheDetailComponent } from './membres-commissions-marche-detail.component';
import { MembresCommissionsMarcheUpdateComponent } from './membres-commissions-marche-update.component';

@Injectable({ providedIn: 'root' })
export class MembresCommissionsMarcheResolve implements Resolve<IMembresCommissionsMarche> {
  constructor(private service: MembresCommissionsMarcheService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMembresCommissionsMarche> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((membresCommissionsMarche: HttpResponse<MembresCommissionsMarche>) => {
          if (membresCommissionsMarche.body) {
            return of(membresCommissionsMarche.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new MembresCommissionsMarche());
  }
}

export const membresCommissionsMarcheRoute: Routes = [
  {
    path: '',
    component: MembresCommissionsMarcheComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsMembresCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: MembresCommissionsMarcheDetailComponent,
    resolve: {
      membresCommissionsMarche: MembresCommissionsMarcheResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsMembresCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: MembresCommissionsMarcheUpdateComponent,
    resolve: {
      membresCommissionsMarche: MembresCommissionsMarcheResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsMembresCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: MembresCommissionsMarcheUpdateComponent,
    resolve: {
      membresCommissionsMarche: MembresCommissionsMarcheResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsMembresCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
