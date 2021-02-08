import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';
import { ObservateursIndependantService } from './observateurs-independant.service';

@Component({
  templateUrl: './observateurs-independant-delete-dialog.component.html',
})
export class ObservateursIndependantDeleteDialogComponent {
  observateursIndependant?: IObservateursIndependant;

  constructor(
    protected observateursIndependantService: ObservateursIndependantService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.observateursIndependantService.delete(id).subscribe(() => {
      this.eventManager.broadcast('observateursIndependantListModification');
      this.activeModal.close();
    });
  }
}
