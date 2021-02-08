import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CatFournisseurComponent } from './cat-fournisseur.component';
import { CatFournisseurDetailComponent } from './cat-fournisseur-detail.component';
import { CatFournisseurUpdateComponent } from './cat-fournisseur-update.component';
import { CatFournisseurDeleteDialogComponent } from './cat-fournisseur-delete-dialog.component';
import { catFournisseurRoute } from './cat-fournisseur.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(catFournisseurRoute)],
  declarations: [
    CatFournisseurComponent,
    CatFournisseurDetailComponent,
    CatFournisseurUpdateComponent,
    CatFournisseurDeleteDialogComponent,
  ],
  entryComponents: [CatFournisseurDeleteDialogComponent],
})
export class DossiermsCatFournisseurModule {}
