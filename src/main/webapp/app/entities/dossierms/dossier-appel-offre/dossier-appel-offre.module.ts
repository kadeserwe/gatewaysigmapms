import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DossierAppelOffreComponent } from './dossier-appel-offre.component';
import { DossierAppelOffreDetailComponent } from './dossier-appel-offre-detail.component';
import { DossierAppelOffreUpdateComponent } from './dossier-appel-offre-update.component';
import { DossierAppelOffreDeleteDialogComponent } from './dossier-appel-offre-delete-dialog.component';
import { dossierAppelOffreRoute } from './dossier-appel-offre.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(dossierAppelOffreRoute)],
  declarations: [
    DossierAppelOffreComponent,
    DossierAppelOffreDetailComponent,
    DossierAppelOffreUpdateComponent,
    DossierAppelOffreDeleteDialogComponent,
  ],
  entryComponents: [DossierAppelOffreDeleteDialogComponent],
})
export class DossiermsDossierAppelOffreModule {}
