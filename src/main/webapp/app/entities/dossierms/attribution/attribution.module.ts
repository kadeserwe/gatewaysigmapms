import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { AttributionComponent } from './attribution.component';
import { AttributionDetailComponent } from './attribution-detail.component';
import { AttributionUpdateComponent } from './attribution-update.component';
import { AttributionDeleteDialogComponent } from './attribution-delete-dialog.component';
import { attributionRoute } from './attribution.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(attributionRoute)],
  declarations: [AttributionComponent, AttributionDetailComponent, AttributionUpdateComponent, AttributionDeleteDialogComponent],
  entryComponents: [AttributionDeleteDialogComponent],
})
export class DossiermsAttributionModule {}
