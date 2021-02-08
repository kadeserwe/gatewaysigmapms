import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';
import { DossiersPieceService } from './dossiers-piece.service';

@Component({
  templateUrl: './dossiers-piece-delete-dialog.component.html',
})
export class DossiersPieceDeleteDialogComponent {
  dossiersPiece?: IDossiersPiece;

  constructor(
    protected dossiersPieceService: DossiersPieceService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dossiersPieceService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dossiersPieceListModification');
      this.activeModal.close();
    });
  }
}
