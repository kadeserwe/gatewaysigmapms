import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CritereComponent } from './critere.component';
import { CritereDetailComponent } from './critere-detail.component';
import { CritereUpdateComponent } from './critere-update.component';
import { CritereDeleteDialogComponent } from './critere-delete-dialog.component';
import { critereRoute } from './critere.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(critereRoute)],
  declarations: [CritereComponent, CritereDetailComponent, CritereUpdateComponent, CritereDeleteDialogComponent],
  entryComponents: [CritereDeleteDialogComponent],
})
export class DossiermsCritereModule {}
