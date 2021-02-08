import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { GarantiesDossierComponent } from './garanties-dossier.component';
import { GarantiesDossierDetailComponent } from './garanties-dossier-detail.component';
import { GarantiesDossierUpdateComponent } from './garanties-dossier-update.component';
import { GarantiesDossierDeleteDialogComponent } from './garanties-dossier-delete-dialog.component';
import { garantiesDossierRoute } from './garanties-dossier.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(garantiesDossierRoute)],
  declarations: [
    GarantiesDossierComponent,
    GarantiesDossierDetailComponent,
    GarantiesDossierUpdateComponent,
    GarantiesDossierDeleteDialogComponent,
  ],
  entryComponents: [GarantiesDossierDeleteDialogComponent],
})
export class DossiermsGarantiesDossierModule {}
