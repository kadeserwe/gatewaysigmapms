import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';
import { DossiersSouscritereService } from './dossiers-souscritere.service';

@Component({
  templateUrl: './dossiers-souscritere-delete-dialog.component.html',
})
export class DossiersSouscritereDeleteDialogComponent {
  dossiersSouscritere?: IDossiersSouscritere;

  constructor(
    protected dossiersSouscritereService: DossiersSouscritereService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dossiersSouscritereService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dossiersSouscritereListModification');
      this.activeModal.close();
    });
  }
}
