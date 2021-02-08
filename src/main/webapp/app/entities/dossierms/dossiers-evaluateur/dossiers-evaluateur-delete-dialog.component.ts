import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';
import { DossiersEvaluateurService } from './dossiers-evaluateur.service';

@Component({
  templateUrl: './dossiers-evaluateur-delete-dialog.component.html',
})
export class DossiersEvaluateurDeleteDialogComponent {
  dossiersEvaluateur?: IDossiersEvaluateur;

  constructor(
    protected dossiersEvaluateurService: DossiersEvaluateurService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dossiersEvaluateurService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dossiersEvaluateurListModification');
      this.activeModal.close();
    });
  }
}
