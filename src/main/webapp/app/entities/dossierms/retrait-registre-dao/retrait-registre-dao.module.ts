import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { RetraitRegistreDAOComponent } from './retrait-registre-dao.component';
import { RetraitRegistreDAODetailComponent } from './retrait-registre-dao-detail.component';
import { RetraitRegistreDAOUpdateComponent } from './retrait-registre-dao-update.component';
import { RetraitRegistreDAODeleteDialogComponent } from './retrait-registre-dao-delete-dialog.component';
import { retraitRegistreDAORoute } from './retrait-registre-dao.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(retraitRegistreDAORoute)],
  declarations: [
    RetraitRegistreDAOComponent,
    RetraitRegistreDAODetailComponent,
    RetraitRegistreDAOUpdateComponent,
    RetraitRegistreDAODeleteDialogComponent,
  ],
  entryComponents: [RetraitRegistreDAODeleteDialogComponent],
})
export class DossiermsRetraitRegistreDAOModule {}
