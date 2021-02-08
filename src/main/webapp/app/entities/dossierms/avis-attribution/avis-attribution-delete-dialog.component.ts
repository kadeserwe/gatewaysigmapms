import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';
import { AvisAttributionService } from './avis-attribution.service';

@Component({
  templateUrl: './avis-attribution-delete-dialog.component.html',
})
export class AvisAttributionDeleteDialogComponent {
  avisAttribution?: IAvisAttribution;

  constructor(
    protected avisAttributionService: AvisAttributionService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.avisAttributionService.delete(id).subscribe(() => {
      this.eventManager.broadcast('avisAttributionListModification');
      this.activeModal.close();
    });
  }
}
