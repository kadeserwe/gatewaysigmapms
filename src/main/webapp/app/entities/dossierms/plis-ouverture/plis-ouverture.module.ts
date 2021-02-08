import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PlisOuvertureComponent } from './plis-ouverture.component';
import { PlisOuvertureDetailComponent } from './plis-ouverture-detail.component';
import { PlisOuvertureUpdateComponent } from './plis-ouverture-update.component';
import { PlisOuvertureDeleteDialogComponent } from './plis-ouverture-delete-dialog.component';
import { plisOuvertureRoute } from './plis-ouverture.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(plisOuvertureRoute)],
  declarations: [PlisOuvertureComponent, PlisOuvertureDetailComponent, PlisOuvertureUpdateComponent, PlisOuvertureDeleteDialogComponent],
  entryComponents: [PlisOuvertureDeleteDialogComponent],
})
export class DossiermsPlisOuvertureModule {}
