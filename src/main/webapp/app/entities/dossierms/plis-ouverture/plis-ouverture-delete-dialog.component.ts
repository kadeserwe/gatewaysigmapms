import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from './plis-ouverture.service';

@Component({
  templateUrl: './plis-ouverture-delete-dialog.component.html',
})
export class PlisOuvertureDeleteDialogComponent {
  plisOuverture?: IPlisOuverture;

  constructor(
    protected plisOuvertureService: PlisOuvertureService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.plisOuvertureService.delete(id).subscribe(() => {
      this.eventManager.broadcast('plisOuvertureListModification');
      this.activeModal.close();
    });
  }
}
