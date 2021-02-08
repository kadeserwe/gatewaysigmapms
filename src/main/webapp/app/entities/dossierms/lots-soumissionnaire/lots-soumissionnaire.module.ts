import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { LotsSoumissionnaireComponent } from './lots-soumissionnaire.component';
import { LotsSoumissionnaireDetailComponent } from './lots-soumissionnaire-detail.component';
import { LotsSoumissionnaireUpdateComponent } from './lots-soumissionnaire-update.component';
import { LotsSoumissionnaireDeleteDialogComponent } from './lots-soumissionnaire-delete-dialog.component';
import { lotsSoumissionnaireRoute } from './lots-soumissionnaire.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(lotsSoumissionnaireRoute)],
  declarations: [
    LotsSoumissionnaireComponent,
    LotsSoumissionnaireDetailComponent,
    LotsSoumissionnaireUpdateComponent,
    LotsSoumissionnaireDeleteDialogComponent,
  ],
  entryComponents: [LotsSoumissionnaireDeleteDialogComponent],
})
export class DossiermsLotsSoumissionnaireModule {}
