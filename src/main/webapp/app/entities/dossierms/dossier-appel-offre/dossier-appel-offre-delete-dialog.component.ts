import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from './dossier-appel-offre.service';

@Component({
  templateUrl: './dossier-appel-offre-delete-dialog.component.html',
})
export class DossierAppelOffreDeleteDialogComponent {
  dossierAppelOffre?: IDossierAppelOffre;

  constructor(
    protected dossierAppelOffreService: DossierAppelOffreService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dossierAppelOffreService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dossierAppelOffreListModification');
      this.activeModal.close();
    });
  }
}
