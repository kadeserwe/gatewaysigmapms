import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { MonnaieOffreComponent } from './monnaie-offre.component';
import { MonnaieOffreDetailComponent } from './monnaie-offre-detail.component';
import { MonnaieOffreUpdateComponent } from './monnaie-offre-update.component';
import { MonnaieOffreDeleteDialogComponent } from './monnaie-offre-delete-dialog.component';
import { monnaieOffreRoute } from './monnaie-offre.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(monnaieOffreRoute)],
  declarations: [MonnaieOffreComponent, MonnaieOffreDetailComponent, MonnaieOffreUpdateComponent, MonnaieOffreDeleteDialogComponent],
  entryComponents: [MonnaieOffreDeleteDialogComponent],
})
export class DossiermsMonnaieOffreModule {}
