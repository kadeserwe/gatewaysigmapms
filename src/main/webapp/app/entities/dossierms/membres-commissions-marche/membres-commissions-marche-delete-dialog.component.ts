import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IMembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';
import { MembresCommissionsMarcheService } from './membres-commissions-marche.service';

@Component({
  templateUrl: './membres-commissions-marche-delete-dialog.component.html',
})
export class MembresCommissionsMarcheDeleteDialogComponent {
  membresCommissionsMarche?: IMembresCommissionsMarche;

  constructor(
    protected membresCommissionsMarcheService: MembresCommissionsMarcheService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.membresCommissionsMarcheService.delete(id).subscribe(() => {
      this.eventManager.broadcast('membresCommissionsMarcheListModification');
      this.activeModal.close();
    });
  }
}
