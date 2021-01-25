import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PlanPassationComponent } from './plan-passation.component';
import { PlanPassationDetailComponent } from './plan-passation-detail.component';
import { PlanPassationUpdateComponent } from './plan-passation-update.component';
import { PlanPassationDeleteDialogComponent } from './plan-passation-delete-dialog.component';
import { planPassationRoute } from './plan-passation.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(planPassationRoute)],
  declarations: [PlanPassationComponent, PlanPassationDetailComponent, PlanPassationUpdateComponent, PlanPassationDeleteDialogComponent],
  entryComponents: [PlanPassationDeleteDialogComponent],
})
export class PlanpassationmsPlanPassationModule {}
