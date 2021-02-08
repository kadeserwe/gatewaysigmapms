import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IRepresentantServTech, RepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';
import { RepresentantServTechService } from './representant-serv-tech.service';
import { RepresentantServTechComponent } from './representant-serv-tech.component';
import { RepresentantServTechDetailComponent } from './representant-serv-tech-detail.component';
import { RepresentantServTechUpdateComponent } from './representant-serv-tech-update.component';

@Injectable({ providedIn: 'root' })
export class RepresentantServTechResolve implements Resolve<IRepresentantServTech> {
  constructor(private service: RepresentantServTechService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IRepresentantServTech> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((representantServTech: HttpResponse<RepresentantServTech>) => {
          if (representantServTech.body) {
            return of(representantServTech.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new RepresentantServTech());
  }
}

export const representantServTechRoute: Routes = [
  {
    path: '',
    component: RepresentantServTechComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsRepresentantServTech.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: RepresentantServTechDetailComponent,
    resolve: {
      representantServTech: RepresentantServTechResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsRepresentantServTech.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: RepresentantServTechUpdateComponent,
    resolve: {
      representantServTech: RepresentantServTechResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsRepresentantServTech.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: RepresentantServTechUpdateComponent,
    resolve: {
      representantServTech: RepresentantServTechResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsRepresentantServTech.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
