import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';
import { PiecesPlisOuvertureService } from './pieces-plis-ouverture.service';

@Component({
  templateUrl: './pieces-plis-ouverture-delete-dialog.component.html',
})
export class PiecesPlisOuvertureDeleteDialogComponent {
  piecesPlisOuverture?: IPiecesPlisOuverture;

  constructor(
    protected piecesPlisOuvertureService: PiecesPlisOuvertureService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.piecesPlisOuvertureService.delete(id).subscribe(() => {
      this.eventManager.broadcast('piecesPlisOuvertureListModification');
      this.activeModal.close();
    });
  }
}
