import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAttribution } from 'app/shared/model/dossierms/attribution.model';
import { AttributionService } from './attribution.service';

@Component({
  templateUrl: './attribution-delete-dialog.component.html',
})
export class AttributionDeleteDialogComponent {
  attribution?: IAttribution;

  constructor(
    protected attributionService: AttributionService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.attributionService.delete(id).subscribe(() => {
      this.eventManager.broadcast('attributionListModification');
      this.activeModal.close();
    });
  }
}
