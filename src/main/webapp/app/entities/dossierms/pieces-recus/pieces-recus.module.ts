import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PiecesRecusComponent } from './pieces-recus.component';
import { PiecesRecusDetailComponent } from './pieces-recus-detail.component';
import { PiecesRecusUpdateComponent } from './pieces-recus-update.component';
import { PiecesRecusDeleteDialogComponent } from './pieces-recus-delete-dialog.component';
import { piecesRecusRoute } from './pieces-recus.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(piecesRecusRoute)],
  declarations: [PiecesRecusComponent, PiecesRecusDetailComponent, PiecesRecusUpdateComponent, PiecesRecusDeleteDialogComponent],
  entryComponents: [PiecesRecusDeleteDialogComponent],
})
export class DossiermsPiecesRecusModule {}
