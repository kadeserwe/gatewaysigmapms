import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PiecesPlisOuvertureComponent } from './pieces-plis-ouverture.component';
import { PiecesPlisOuvertureDetailComponent } from './pieces-plis-ouverture-detail.component';
import { PiecesPlisOuvertureUpdateComponent } from './pieces-plis-ouverture-update.component';
import { PiecesPlisOuvertureDeleteDialogComponent } from './pieces-plis-ouverture-delete-dialog.component';
import { piecesPlisOuvertureRoute } from './pieces-plis-ouverture.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(piecesPlisOuvertureRoute)],
  declarations: [
    PiecesPlisOuvertureComponent,
    PiecesPlisOuvertureDetailComponent,
    PiecesPlisOuvertureUpdateComponent,
    PiecesPlisOuvertureDeleteDialogComponent,
  ],
  entryComponents: [PiecesPlisOuvertureDeleteDialogComponent],
})
export class DossiermsPiecesPlisOuvertureModule {}
