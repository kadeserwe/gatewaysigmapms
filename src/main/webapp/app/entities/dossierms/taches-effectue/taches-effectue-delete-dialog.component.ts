import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';
import { TachesEffectueService } from './taches-effectue.service';

@Component({
  templateUrl: './taches-effectue-delete-dialog.component.html',
})
export class TachesEffectueDeleteDialogComponent {
  tachesEffectue?: ITachesEffectue;

  constructor(
    protected tachesEffectueService: TachesEffectueService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.tachesEffectueService.delete(id).subscribe(() => {
      this.eventManager.broadcast('tachesEffectueListModification');
      this.activeModal.close();
    });
  }
}
