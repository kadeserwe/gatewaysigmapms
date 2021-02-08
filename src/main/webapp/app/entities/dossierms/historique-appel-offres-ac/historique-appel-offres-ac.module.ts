import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { HistoriqueAppelOffresACComponent } from './historique-appel-offres-ac.component';
import { HistoriqueAppelOffresACDetailComponent } from './historique-appel-offres-ac-detail.component';
import { HistoriqueAppelOffresACUpdateComponent } from './historique-appel-offres-ac-update.component';
import { HistoriqueAppelOffresACDeleteDialogComponent } from './historique-appel-offres-ac-delete-dialog.component';
import { historiqueAppelOffresACRoute } from './historique-appel-offres-ac.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(historiqueAppelOffresACRoute)],
  declarations: [
    HistoriqueAppelOffresACComponent,
    HistoriqueAppelOffresACDetailComponent,
    HistoriqueAppelOffresACUpdateComponent,
    HistoriqueAppelOffresACDeleteDialogComponent,
  ],
  entryComponents: [HistoriqueAppelOffresACDeleteDialogComponent],
})
export class DossiermsHistoriqueAppelOffresACModule {}
