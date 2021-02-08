import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';
import { CritereQualifiSoumService } from './critere-qualifi-soum.service';

@Component({
  templateUrl: './critere-qualifi-soum-delete-dialog.component.html',
})
export class CritereQualifiSoumDeleteDialogComponent {
  critereQualifiSoum?: ICritereQualifiSoum;

  constructor(
    protected critereQualifiSoumService: CritereQualifiSoumService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.critereQualifiSoumService.delete(id).subscribe(() => {
      this.eventManager.broadcast('critereQualifiSoumListModification');
      this.activeModal.close();
    });
  }
}
