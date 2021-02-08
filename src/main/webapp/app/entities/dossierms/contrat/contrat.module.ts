import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ContratComponent } from './contrat.component';
import { ContratDetailComponent } from './contrat-detail.component';
import { ContratUpdateComponent } from './contrat-update.component';
import { ContratDeleteDialogComponent } from './contrat-delete-dialog.component';
import { contratRoute } from './contrat.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(contratRoute)],
  declarations: [ContratComponent, ContratDetailComponent, ContratUpdateComponent, ContratDeleteDialogComponent],
  entryComponents: [ContratDeleteDialogComponent],
})
export class DossiermsContratModule {}
