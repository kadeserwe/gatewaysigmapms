import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ILotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';
import { LotsSoumissionnaireService } from './lots-soumissionnaire.service';

@Component({
  templateUrl: './lots-soumissionnaire-delete-dialog.component.html',
})
export class LotsSoumissionnaireDeleteDialogComponent {
  lotsSoumissionnaire?: ILotsSoumissionnaire;

  constructor(
    protected lotsSoumissionnaireService: LotsSoumissionnaireService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.lotsSoumissionnaireService.delete(id).subscribe(() => {
      this.eventManager.broadcast('lotsSoumissionnaireListModification');
      this.activeModal.close();
    });
  }
}
