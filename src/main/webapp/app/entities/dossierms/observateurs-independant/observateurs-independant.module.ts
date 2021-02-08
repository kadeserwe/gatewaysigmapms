import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ObservateursIndependantComponent } from './observateurs-independant.component';
import { ObservateursIndependantDetailComponent } from './observateurs-independant-detail.component';
import { ObservateursIndependantUpdateComponent } from './observateurs-independant-update.component';
import { ObservateursIndependantDeleteDialogComponent } from './observateurs-independant-delete-dialog.component';
import { observateursIndependantRoute } from './observateurs-independant.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(observateursIndependantRoute)],
  declarations: [
    ObservateursIndependantComponent,
    ObservateursIndependantDetailComponent,
    ObservateursIndependantUpdateComponent,
    ObservateursIndependantDeleteDialogComponent,
  ],
  entryComponents: [ObservateursIndependantDeleteDialogComponent],
})
export class DossiermsObservateursIndependantModule {}
