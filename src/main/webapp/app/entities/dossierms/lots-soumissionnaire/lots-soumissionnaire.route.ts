import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ILotsSoumissionnaire, LotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';
import { LotsSoumissionnaireService } from './lots-soumissionnaire.service';
import { LotsSoumissionnaireComponent } from './lots-soumissionnaire.component';
import { LotsSoumissionnaireDetailComponent } from './lots-soumissionnaire-detail.component';
import { LotsSoumissionnaireUpdateComponent } from './lots-soumissionnaire-update.component';

@Injectable({ providedIn: 'root' })
export class LotsSoumissionnaireResolve implements Resolve<ILotsSoumissionnaire> {
  constructor(private service: LotsSoumissionnaireService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ILotsSoumissionnaire> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((lotsSoumissionnaire: HttpResponse<LotsSoumissionnaire>) => {
          if (lotsSoumissionnaire.body) {
            return of(lotsSoumissionnaire.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new LotsSoumissionnaire());
  }
}

export const lotsSoumissionnaireRoute: Routes = [
  {
    path: '',
    component: LotsSoumissionnaireComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsLotsSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: LotsSoumissionnaireDetailComponent,
    resolve: {
      lotsSoumissionnaire: LotsSoumissionnaireResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsLotsSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: LotsSoumissionnaireUpdateComponent,
    resolve: {
      lotsSoumissionnaire: LotsSoumissionnaireResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsLotsSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: LotsSoumissionnaireUpdateComponent,
    resolve: {
      lotsSoumissionnaire: LotsSoumissionnaireResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsLotsSoumissionnaire.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
