import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IGarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';
import { GarantiesDossierService } from './garanties-dossier.service';

@Component({
  templateUrl: './garanties-dossier-delete-dialog.component.html',
})
export class GarantiesDossierDeleteDialogComponent {
  garantiesDossier?: IGarantiesDossier;

  constructor(
    protected garantiesDossierService: GarantiesDossierService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.garantiesDossierService.delete(id).subscribe(() => {
      this.eventManager.broadcast('garantiesDossierListModification');
      this.activeModal.close();
    });
  }
}
