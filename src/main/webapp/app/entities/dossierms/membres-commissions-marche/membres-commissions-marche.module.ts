import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { MembresCommissionsMarcheComponent } from './membres-commissions-marche.component';
import { MembresCommissionsMarcheDetailComponent } from './membres-commissions-marche-detail.component';
import { MembresCommissionsMarcheUpdateComponent } from './membres-commissions-marche-update.component';
import { MembresCommissionsMarcheDeleteDialogComponent } from './membres-commissions-marche-delete-dialog.component';
import { membresCommissionsMarcheRoute } from './membres-commissions-marche.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(membresCommissionsMarcheRoute)],
  declarations: [
    MembresCommissionsMarcheComponent,
    MembresCommissionsMarcheDetailComponent,
    MembresCommissionsMarcheUpdateComponent,
    MembresCommissionsMarcheDeleteDialogComponent,
  ],
  entryComponents: [MembresCommissionsMarcheDeleteDialogComponent],
})
export class DossiermsMembresCommissionsMarcheModule {}
