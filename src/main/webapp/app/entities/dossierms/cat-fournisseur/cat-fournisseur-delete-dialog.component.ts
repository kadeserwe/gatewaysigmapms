import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';
import { CatFournisseurService } from './cat-fournisseur.service';

@Component({
  templateUrl: './cat-fournisseur-delete-dialog.component.html',
})
export class CatFournisseurDeleteDialogComponent {
  catFournisseur?: ICatFournisseur;

  constructor(
    protected catFournisseurService: CatFournisseurService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.catFournisseurService.delete(id).subscribe(() => {
      this.eventManager.broadcast('catFournisseurListModification');
      this.activeModal.close();
    });
  }
}
