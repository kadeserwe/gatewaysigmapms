import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PresenceOuvertureComponent } from './presence-ouverture.component';
import { PresenceOuvertureDetailComponent } from './presence-ouverture-detail.component';
import { PresenceOuvertureUpdateComponent } from './presence-ouverture-update.component';
import { PresenceOuvertureDeleteDialogComponent } from './presence-ouverture-delete-dialog.component';
import { presenceOuvertureRoute } from './presence-ouverture.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(presenceOuvertureRoute)],
  declarations: [
    PresenceOuvertureComponent,
    PresenceOuvertureDetailComponent,
    PresenceOuvertureUpdateComponent,
    PresenceOuvertureDeleteDialogComponent,
  ],
  entryComponents: [PresenceOuvertureDeleteDialogComponent],
})
export class DossiermsPresenceOuvertureModule {}
