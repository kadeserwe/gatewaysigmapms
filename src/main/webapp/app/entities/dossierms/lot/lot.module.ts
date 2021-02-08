import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { LotComponent } from './lot.component';
import { LotDetailComponent } from './lot-detail.component';
import { LotUpdateComponent } from './lot-update.component';
import { LotDeleteDialogComponent } from './lot-delete-dialog.component';
import { lotRoute } from './lot.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(lotRoute)],
  declarations: [LotComponent, LotDetailComponent, LotUpdateComponent, LotDeleteDialogComponent],
  entryComponents: [LotDeleteDialogComponent],
})
export class DossiermsLotModule {}
