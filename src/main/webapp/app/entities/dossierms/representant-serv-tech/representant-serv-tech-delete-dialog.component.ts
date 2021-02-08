import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IRepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';
import { RepresentantServTechService } from './representant-serv-tech.service';

@Component({
  templateUrl: './representant-serv-tech-delete-dialog.component.html',
})
export class RepresentantServTechDeleteDialogComponent {
  representantServTech?: IRepresentantServTech;

  constructor(
    protected representantServTechService: RepresentantServTechService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.representantServTechService.delete(id).subscribe(() => {
      this.eventManager.broadcast('representantServTechListModification');
      this.activeModal.close();
    });
  }
}
