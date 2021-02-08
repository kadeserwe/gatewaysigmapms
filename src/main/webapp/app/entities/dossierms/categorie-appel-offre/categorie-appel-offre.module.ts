import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CategorieAppelOffreComponent } from './categorie-appel-offre.component';
import { CategorieAppelOffreDetailComponent } from './categorie-appel-offre-detail.component';
import { CategorieAppelOffreUpdateComponent } from './categorie-appel-offre-update.component';
import { CategorieAppelOffreDeleteDialogComponent } from './categorie-appel-offre-delete-dialog.component';
import { categorieAppelOffreRoute } from './categorie-appel-offre.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(categorieAppelOffreRoute)],
  declarations: [
    CategorieAppelOffreComponent,
    CategorieAppelOffreDetailComponent,
    CategorieAppelOffreUpdateComponent,
    CategorieAppelOffreDeleteDialogComponent,
  ],
  entryComponents: [CategorieAppelOffreDeleteDialogComponent],
})
export class DossiermsCategorieAppelOffreModule {}
