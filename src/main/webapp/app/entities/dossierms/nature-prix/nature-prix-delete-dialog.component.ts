import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { INaturePrix } from 'app/shared/model/dossierms/nature-prix.model';
import { NaturePrixService } from './nature-prix.service';

@Component({
  templateUrl: './nature-prix-delete-dialog.component.html',
})
export class NaturePrixDeleteDialogComponent {
  naturePrix?: INaturePrix;

  constructor(
    protected naturePrixService: NaturePrixService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.naturePrixService.delete(id).subscribe(() => {
      this.eventManager.broadcast('naturePrixListModification');
      this.activeModal.close();
    });
  }
}
