import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { AvisAttributionComponent } from './avis-attribution.component';
import { AvisAttributionDetailComponent } from './avis-attribution-detail.component';
import { AvisAttributionUpdateComponent } from './avis-attribution-update.component';
import { AvisAttributionDeleteDialogComponent } from './avis-attribution-delete-dialog.component';
import { avisAttributionRoute } from './avis-attribution.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(avisAttributionRoute)],
  declarations: [
    AvisAttributionComponent,
    AvisAttributionDetailComponent,
    AvisAttributionUpdateComponent,
    AvisAttributionDeleteDialogComponent,
  ],
  entryComponents: [AvisAttributionDeleteDialogComponent],
})
export class DossiermsAvisAttributionModule {}
