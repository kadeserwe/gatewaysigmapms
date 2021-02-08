import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DossiersPieceComponent } from './dossiers-piece.component';
import { DossiersPieceDetailComponent } from './dossiers-piece-detail.component';
import { DossiersPieceUpdateComponent } from './dossiers-piece-update.component';
import { DossiersPieceDeleteDialogComponent } from './dossiers-piece-delete-dialog.component';
import { dossiersPieceRoute } from './dossiers-piece.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(dossiersPieceRoute)],
  declarations: [DossiersPieceComponent, DossiersPieceDetailComponent, DossiersPieceUpdateComponent, DossiersPieceDeleteDialogComponent],
  entryComponents: [DossiersPieceDeleteDialogComponent],
})
export class DossiermsDossiersPieceModule {}
