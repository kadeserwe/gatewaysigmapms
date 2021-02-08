import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';
import { DossiersCommissionsMarcheService } from './dossiers-commissions-marche.service';

@Component({
  templateUrl: './dossiers-commissions-marche-delete-dialog.component.html',
})
export class DossiersCommissionsMarcheDeleteDialogComponent {
  dossiersCommissionsMarche?: IDossiersCommissionsMarche;

  constructor(
    protected dossiersCommissionsMarcheService: DossiersCommissionsMarcheService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dossiersCommissionsMarcheService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dossiersCommissionsMarcheListModification');
      this.activeModal.close();
    });
  }
}
