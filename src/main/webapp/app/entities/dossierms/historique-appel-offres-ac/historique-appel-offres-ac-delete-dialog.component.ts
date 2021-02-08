import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IHistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';
import { HistoriqueAppelOffresACService } from './historique-appel-offres-ac.service';

@Component({
  templateUrl: './historique-appel-offres-ac-delete-dialog.component.html',
})
export class HistoriqueAppelOffresACDeleteDialogComponent {
  historiqueAppelOffresAC?: IHistoriqueAppelOffresAC;

  constructor(
    protected historiqueAppelOffresACService: HistoriqueAppelOffresACService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.historiqueAppelOffresACService.delete(id).subscribe(() => {
      this.eventManager.broadcast('historiqueAppelOffresACListModification');
      this.activeModal.close();
    });
  }
}
