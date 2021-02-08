import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IRetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';
import { RetraitRegistreDAOService } from './retrait-registre-dao.service';

@Component({
  templateUrl: './retrait-registre-dao-delete-dialog.component.html',
})
export class RetraitRegistreDAODeleteDialogComponent {
  retraitRegistreDAO?: IRetraitRegistreDAO;

  constructor(
    protected retraitRegistreDAOService: RetraitRegistreDAOService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.retraitRegistreDAOService.delete(id).subscribe(() => {
      this.eventManager.broadcast('retraitRegistreDAOListModification');
      this.activeModal.close();
    });
  }
}
