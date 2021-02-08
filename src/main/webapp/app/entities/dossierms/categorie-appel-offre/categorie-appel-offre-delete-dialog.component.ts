import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';
import { CategorieAppelOffreService } from './categorie-appel-offre.service';

@Component({
  templateUrl: './categorie-appel-offre-delete-dialog.component.html',
})
export class CategorieAppelOffreDeleteDialogComponent {
  categorieAppelOffre?: ICategorieAppelOffre;

  constructor(
    protected categorieAppelOffreService: CategorieAppelOffreService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.categorieAppelOffreService.delete(id).subscribe(() => {
      this.eventManager.broadcast('categorieAppelOffreListModification');
      this.activeModal.close();
    });
  }
}
