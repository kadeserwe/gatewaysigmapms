import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CritereQualifiSoumComponent } from './critere-qualifi-soum.component';
import { CritereQualifiSoumDetailComponent } from './critere-qualifi-soum-detail.component';
import { CritereQualifiSoumUpdateComponent } from './critere-qualifi-soum-update.component';
import { CritereQualifiSoumDeleteDialogComponent } from './critere-qualifi-soum-delete-dialog.component';
import { critereQualifiSoumRoute } from './critere-qualifi-soum.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(critereQualifiSoumRoute)],
  declarations: [
    CritereQualifiSoumComponent,
    CritereQualifiSoumDetailComponent,
    CritereQualifiSoumUpdateComponent,
    CritereQualifiSoumDeleteDialogComponent,
  ],
  entryComponents: [CritereQualifiSoumDeleteDialogComponent],
})
export class DossiermsCritereQualifiSoumModule {}
