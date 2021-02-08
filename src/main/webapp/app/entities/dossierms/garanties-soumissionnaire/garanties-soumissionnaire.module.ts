import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { GarantiesSoumissionnaireComponent } from './garanties-soumissionnaire.component';
import { GarantiesSoumissionnaireDetailComponent } from './garanties-soumissionnaire-detail.component';
import { GarantiesSoumissionnaireUpdateComponent } from './garanties-soumissionnaire-update.component';
import { GarantiesSoumissionnaireDeleteDialogComponent } from './garanties-soumissionnaire-delete-dialog.component';
import { garantiesSoumissionnaireRoute } from './garanties-soumissionnaire.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(garantiesSoumissionnaireRoute)],
  declarations: [
    GarantiesSoumissionnaireComponent,
    GarantiesSoumissionnaireDetailComponent,
    GarantiesSoumissionnaireUpdateComponent,
    GarantiesSoumissionnaireDeleteDialogComponent,
  ],
  entryComponents: [GarantiesSoumissionnaireDeleteDialogComponent],
})
export class DossiermsGarantiesSoumissionnaireModule {}
