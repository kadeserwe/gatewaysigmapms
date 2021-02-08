import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICategorieAppelOffre, CategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';
import { CategorieAppelOffreService } from './categorie-appel-offre.service';
import { CategorieAppelOffreComponent } from './categorie-appel-offre.component';
import { CategorieAppelOffreDetailComponent } from './categorie-appel-offre-detail.component';
import { CategorieAppelOffreUpdateComponent } from './categorie-appel-offre-update.component';

@Injectable({ providedIn: 'root' })
export class CategorieAppelOffreResolve implements Resolve<ICategorieAppelOffre> {
  constructor(private service: CategorieAppelOffreService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICategorieAppelOffre> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((categorieAppelOffre: HttpResponse<CategorieAppelOffre>) => {
          if (categorieAppelOffre.body) {
            return of(categorieAppelOffre.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CategorieAppelOffre());
  }
}

export const categorieAppelOffreRoute: Routes = [
  {
    path: '',
    component: CategorieAppelOffreComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'gatewaysigmapApp.dossiermsCategorieAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CategorieAppelOffreDetailComponent,
    resolve: {
      categorieAppelOffre: CategorieAppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCategorieAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CategorieAppelOffreUpdateComponent,
    resolve: {
      categorieAppelOffre: CategorieAppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCategorieAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CategorieAppelOffreUpdateComponent,
    resolve: {
      categorieAppelOffre: CategorieAppelOffreResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'gatewaysigmapApp.dossiermsCategorieAppelOffre.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
