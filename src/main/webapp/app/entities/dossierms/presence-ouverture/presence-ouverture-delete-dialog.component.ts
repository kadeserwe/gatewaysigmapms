import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';
import { PresenceOuvertureService } from './presence-ouverture.service';

@Component({
  templateUrl: './presence-ouverture-delete-dialog.component.html',
})
export class PresenceOuvertureDeleteDialogComponent {
  presenceOuverture?: IPresenceOuverture;

  constructor(
    protected presenceOuvertureService: PresenceOuvertureService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.presenceOuvertureService.delete(id).subscribe(() => {
      this.eventManager.broadcast('presenceOuvertureListModification');
      this.activeModal.close();
    });
  }
}
