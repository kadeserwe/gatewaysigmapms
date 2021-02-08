import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IMonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';
import { MonnaieOffreService } from './monnaie-offre.service';

@Component({
  templateUrl: './monnaie-offre-delete-dialog.component.html',
})
export class MonnaieOffreDeleteDialogComponent {
  monnaieOffre?: IMonnaieOffre;

  constructor(
    protected monnaieOffreService: MonnaieOffreService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.monnaieOffreService.delete(id).subscribe(() => {
      this.eventManager.broadcast('monnaieOffreListModification');
      this.activeModal.close();
    });
  }
}
