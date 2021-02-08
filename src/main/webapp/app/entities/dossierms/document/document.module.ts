import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DocumentComponent } from './document.component';
import { DocumentDetailComponent } from './document-detail.component';
import { DocumentUpdateComponent } from './document-update.component';
import { DocumentDeleteDialogComponent } from './document-delete-dialog.component';
import { documentRoute } from './document.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(documentRoute)],
  declarations: [DocumentComponent, DocumentDetailComponent, DocumentUpdateComponent, DocumentDeleteDialogComponent],
  entryComponents: [DocumentDeleteDialogComponent],
})
export class DossiermsDocumentModule {}
