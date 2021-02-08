import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { INaturePrix, NaturePrix } from 'app/shared/model/dossierms/nature-prix.model';
import { NaturePrixService } from './nature-prix.service';
import { NaturePrixComponent } from './nature-prix.component';
import { NaturePrixDetailComponent } from './nature-prix-detail.component';
import { NaturePrixUpdateComponent } from './nature-prix-update.component';

@Injectable({ providedIn: 'root' })
export class NaturePrixResolve implements Resolve<INaturePrix> {
  constructor(private service: NaturePrixService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<INaturePrix> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((naturePrix: HttpResponse<NaturePrix>) => {
          if (naturePrix.body) {
            return of(naturePrix.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new NaturePrix());
  }
}

export const naturePrixRoute: Routes = [
  {
    path: '',
    component: NaturePrixComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsNaturePrix.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: NaturePrixDetailComponent,
    resolve: {
      naturePrix: NaturePrixResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsNaturePrix.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: NaturePrixUpdateComponent,
    resolve: {
      naturePrix: NaturePrixResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsNaturePrix.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: NaturePrixUpdateComponent,
    resolve: {
      naturePrix: NaturePrixResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsNaturePrix.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
