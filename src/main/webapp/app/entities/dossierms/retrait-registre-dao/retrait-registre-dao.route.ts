import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IRetraitRegistreDAO, RetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';
import { RetraitRegistreDAOService } from './retrait-registre-dao.service';
import { RetraitRegistreDAOComponent } from './retrait-registre-dao.component';
import { RetraitRegistreDAODetailComponent } from './retrait-registre-dao-detail.component';
import { RetraitRegistreDAOUpdateComponent } from './retrait-registre-dao-update.component';

@Injectable({ providedIn: 'root' })
export class RetraitRegistreDAOResolve implements Resolve<IRetraitRegistreDAO> {
  constructor(private service: RetraitRegistreDAOService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IRetraitRegistreDAO> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((retraitRegistreDAO: HttpResponse<RetraitRegistreDAO>) => {
          if (retraitRegistreDAO.body) {
            return of(retraitRegistreDAO.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new RetraitRegistreDAO());
  }
}

export const retraitRegistreDAORoute: Routes = [
  {
    path: '',
    component: RetraitRegistreDAOComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsRetraitRegistreDao.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: RetraitRegistreDAODetailComponent,
    resolve: {
      retraitRegistreDAO: RetraitRegistreDAOResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsRetraitRegistreDao.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: RetraitRegistreDAOUpdateComponent,
    resolve: {
      retraitRegistreDAO: RetraitRegistreDAOResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsRetraitRegistreDao.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: RetraitRegistreDAOUpdateComponent,
    resolve: {
      retraitRegistreDAO: RetraitRegistreDAOResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsRetraitRegistreDao.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
