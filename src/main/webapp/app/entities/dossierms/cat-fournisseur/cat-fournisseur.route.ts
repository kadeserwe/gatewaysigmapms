import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICatFournisseur, CatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';
import { CatFournisseurService } from './cat-fournisseur.service';
import { CatFournisseurComponent } from './cat-fournisseur.component';
import { CatFournisseurDetailComponent } from './cat-fournisseur-detail.component';
import { CatFournisseurUpdateComponent } from './cat-fournisseur-update.component';

@Injectable({ providedIn: 'root' })
export class CatFournisseurResolve implements Resolve<ICatFournisseur> {
  constructor(private service: CatFournisseurService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICatFournisseur> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((catFournisseur: HttpResponse<CatFournisseur>) => {
          if (catFournisseur.body) {
            return of(catFournisseur.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CatFournisseur());
  }
}

export const catFournisseurRoute: Routes = [
  {
    path: '',
    component: CatFournisseurComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsCatFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CatFournisseurDetailComponent,
    resolve: {
      catFournisseur: CatFournisseurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCatFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CatFournisseurUpdateComponent,
    resolve: {
      catFournisseur: CatFournisseurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCatFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CatFournisseurUpdateComponent,
    resolve: {
      catFournisseur: CatFournisseurResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCatFournisseur.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
