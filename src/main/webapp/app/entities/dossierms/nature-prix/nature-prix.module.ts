import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { NaturePrixComponent } from './nature-prix.component';
import { NaturePrixDetailComponent } from './nature-prix-detail.component';
import { NaturePrixUpdateComponent } from './nature-prix-update.component';
import { NaturePrixDeleteDialogComponent } from './nature-prix-delete-dialog.component';
import { naturePrixRoute } from './nature-prix.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(naturePrixRoute)],
  declarations: [NaturePrixComponent, NaturePrixDetailComponent, NaturePrixUpdateComponent, NaturePrixDeleteDialogComponent],
  entryComponents: [NaturePrixDeleteDialogComponent],
})
export class DossiermsNaturePrixModule {}
