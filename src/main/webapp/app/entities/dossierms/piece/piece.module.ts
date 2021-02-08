import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { PieceComponent } from './piece.component';
import { PieceDetailComponent } from './piece-detail.component';
import { PieceUpdateComponent } from './piece-update.component';
import { PieceDeleteDialogComponent } from './piece-delete-dialog.component';
import { pieceRoute } from './piece.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(pieceRoute)],
  declarations: [PieceComponent, PieceDetailComponent, PieceUpdateComponent, PieceDeleteDialogComponent],
  entryComponents: [PieceDeleteDialogComponent],
})
export class DossiermsPieceModule {}
