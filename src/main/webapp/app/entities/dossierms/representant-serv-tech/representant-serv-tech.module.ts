import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { RepresentantServTechComponent } from './representant-serv-tech.component';
import { RepresentantServTechDetailComponent } from './representant-serv-tech-detail.component';
import { RepresentantServTechUpdateComponent } from './representant-serv-tech-update.component';
import { RepresentantServTechDeleteDialogComponent } from './representant-serv-tech-delete-dialog.component';
import { representantServTechRoute } from './representant-serv-tech.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(representantServTechRoute)],
  declarations: [
    RepresentantServTechComponent,
    RepresentantServTechDetailComponent,
    RepresentantServTechUpdateComponent,
    RepresentantServTechDeleteDialogComponent,
  ],
  entryComponents: [RepresentantServTechDeleteDialogComponent],
})
export class DossiermsRepresentantServTechModule {}
