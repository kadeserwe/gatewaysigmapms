import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAppelOffre } from 'app/shared/model/dossierms/appel-offre.model';
import { AppelOffreService } from './appel-offre.service';

@Component({
  templateUrl: './appel-offre-delete-dialog.component.html',
})
export class AppelOffreDeleteDialogComponent {
  appelOffre?: IAppelOffre;

  constructor(
    protected appelOffreService: AppelOffreService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.appelOffreService.delete(id).subscribe(() => {
      this.eventManager.broadcast('appelOffreListModification');
      this.activeModal.close();
    });
  }
}
