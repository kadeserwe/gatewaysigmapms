import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DossiersSouscritereComponent } from './dossiers-souscritere.component';
import { DossiersSouscritereDetailComponent } from './dossiers-souscritere-detail.component';
import { DossiersSouscritereUpdateComponent } from './dossiers-souscritere-update.component';
import { DossiersSouscritereDeleteDialogComponent } from './dossiers-souscritere-delete-dialog.component';
import { dossiersSouscritereRoute } from './dossiers-souscritere.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(dossiersSouscritereRoute)],
  declarations: [
    DossiersSouscritereComponent,
    DossiersSouscritereDetailComponent,
    DossiersSouscritereUpdateComponent,
    DossiersSouscritereDeleteDialogComponent,
  ],
  entryComponents: [DossiersSouscritereDeleteDialogComponent],
})
export class DossiermsDossiersSouscritereModule {}
