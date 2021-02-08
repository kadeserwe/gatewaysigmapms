import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { AppelOffreComponent } from './appel-offre.component';
import { AppelOffreDetailComponent } from './appel-offre-detail.component';
import { AppelOffreUpdateComponent } from './appel-offre-update.component';
import { AppelOffreDeleteDialogComponent } from './appel-offre-delete-dialog.component';
import { appelOffreRoute } from './appel-offre.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(appelOffreRoute)],
  declarations: [AppelOffreComponent, AppelOffreDetailComponent, AppelOffreUpdateComponent, AppelOffreDeleteDialogComponent],
  entryComponents: [AppelOffreDeleteDialogComponent],
})
export class DossiermsAppelOffreModule {}
