import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';
import { PiecesRecusService } from './pieces-recus.service';

@Component({
  templateUrl: './pieces-recus-delete-dialog.component.html',
})
export class PiecesRecusDeleteDialogComponent {
  piecesRecus?: IPiecesRecus;

  constructor(
    protected piecesRecusService: PiecesRecusService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.piecesRecusService.delete(id).subscribe(() => {
      this.eventManager.broadcast('piecesRecusListModification');
      this.activeModal.close();
    });
  }
}
