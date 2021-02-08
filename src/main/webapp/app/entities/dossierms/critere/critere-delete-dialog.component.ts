import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICritere } from 'app/shared/model/dossierms/critere.model';
import { CritereService } from './critere.service';

@Component({
  templateUrl: './critere-delete-dialog.component.html',
})
export class CritereDeleteDialogComponent {
  critere?: ICritere;

  constructor(protected critereService: CritereService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.critereService.delete(id).subscribe(() => {
      this.eventManager.broadcast('critereListModification');
      this.activeModal.close();
    });
  }
}
