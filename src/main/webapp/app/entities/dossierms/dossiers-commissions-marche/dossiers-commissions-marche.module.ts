import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DossiersCommissionsMarcheComponent } from './dossiers-commissions-marche.component';
import { DossiersCommissionsMarcheDetailComponent } from './dossiers-commissions-marche-detail.component';
import { DossiersCommissionsMarcheUpdateComponent } from './dossiers-commissions-marche-update.component';
import { DossiersCommissionsMarcheDeleteDialogComponent } from './dossiers-commissions-marche-delete-dialog.component';
import { dossiersCommissionsMarcheRoute } from './dossiers-commissions-marche.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(dossiersCommissionsMarcheRoute)],
  declarations: [
    DossiersCommissionsMarcheComponent,
    DossiersCommissionsMarcheDetailComponent,
    DossiersCommissionsMarcheUpdateComponent,
    DossiersCommissionsMarcheDeleteDialogComponent,
  ],
  entryComponents: [DossiersCommissionsMarcheDeleteDialogComponent],
})
export class DossiermsDossiersCommissionsMarcheModule {}
