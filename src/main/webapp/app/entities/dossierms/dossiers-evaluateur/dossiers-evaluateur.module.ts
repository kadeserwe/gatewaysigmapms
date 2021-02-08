import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DossiersEvaluateurComponent } from './dossiers-evaluateur.component';
import { DossiersEvaluateurDetailComponent } from './dossiers-evaluateur-detail.component';
import { DossiersEvaluateurUpdateComponent } from './dossiers-evaluateur-update.component';
import { DossiersEvaluateurDeleteDialogComponent } from './dossiers-evaluateur-delete-dialog.component';
import { dossiersEvaluateurRoute } from './dossiers-evaluateur.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(dossiersEvaluateurRoute)],
  declarations: [
    DossiersEvaluateurComponent,
    DossiersEvaluateurDetailComponent,
    DossiersEvaluateurUpdateComponent,
    DossiersEvaluateurDeleteDialogComponent,
  ],
  entryComponents: [DossiersEvaluateurDeleteDialogComponent],
})
export class DossiermsDossiersEvaluateurModule {}
