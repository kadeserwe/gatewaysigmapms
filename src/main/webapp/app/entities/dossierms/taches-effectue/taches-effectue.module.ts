import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { TachesEffectueComponent } from './taches-effectue.component';
import { TachesEffectueDetailComponent } from './taches-effectue-detail.component';
import { TachesEffectueUpdateComponent } from './taches-effectue-update.component';
import { TachesEffectueDeleteDialogComponent } from './taches-effectue-delete-dialog.component';
import { tachesEffectueRoute } from './taches-effectue.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(tachesEffectueRoute)],
  declarations: [
    TachesEffectueComponent,
    TachesEffectueDetailComponent,
    TachesEffectueUpdateComponent,
    TachesEffectueDeleteDialogComponent,
  ],
  entryComponents: [TachesEffectueDeleteDialogComponent],
})
export class DossiermsTachesEffectueModule {}
