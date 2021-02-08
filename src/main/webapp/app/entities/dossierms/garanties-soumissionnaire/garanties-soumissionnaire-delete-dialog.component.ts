import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IGarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';
import { GarantiesSoumissionnaireService } from './garanties-soumissionnaire.service';

@Component({
  templateUrl: './garanties-soumissionnaire-delete-dialog.component.html',
})
export class GarantiesSoumissionnaireDeleteDialogComponent {
  garantiesSoumissionnaire?: IGarantiesSoumissionnaire;

  constructor(
    protected garantiesSoumissionnaireService: GarantiesSoumissionnaireService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.garantiesSoumissionnaireService.delete(id).subscribe(() => {
      this.eventManager.broadcast('garantiesSoumissionnaireListModification');
      this.activeModal.close();
    });
  }
}
