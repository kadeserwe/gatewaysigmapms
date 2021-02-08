import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDossiersCommissionsMarche, DossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';
import { DossiersCommissionsMarcheService } from './dossiers-commissions-marche.service';
import { DossiersCommissionsMarcheComponent } from './dossiers-commissions-marche.component';
import { DossiersCommissionsMarcheDetailComponent } from './dossiers-commissions-marche-detail.component';
import { DossiersCommissionsMarcheUpdateComponent } from './dossiers-commissions-marche-update.component';

@Injectable({ providedIn: 'root' })
export class DossiersCommissionsMarcheResolve implements Resolve<IDossiersCommissionsMarche> {
  constructor(private service: DossiersCommissionsMarcheService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDossiersCommissionsMarche> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dossiersCommissionsMarche: HttpResponse<DossiersCommissionsMarche>) => {
          if (dossiersCommissionsMarche.body) {
            return of(dossiersCommissionsMarche.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DossiersCommissionsMarche());
  }
}

export const dossiersCommissionsMarcheRoute: Routes = [
  {
    path: '',
    component: DossiersCommissionsMarcheComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DossiersCommissionsMarcheDetailComponent,
    resolve: {
      dossiersCommissionsMarche: DossiersCommissionsMarcheResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DossiersCommissionsMarcheUpdateComponent,
    resolve: {
      dossiersCommissionsMarche: DossiersCommissionsMarcheResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DossiersCommissionsMarcheUpdateComponent,
    resolve: {
      dossiersCommissionsMarche: DossiersCommissionsMarcheResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsDossiersCommissionsMarche.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
