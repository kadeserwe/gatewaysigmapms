import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';

@Component({
  selector: 'jhi-cat-fournisseur-detail',
  templateUrl: './cat-fournisseur-detail.component.html',
})
export class CatFournisseurDetailComponent implements OnInit {
  catFournisseur: ICatFournisseur | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ catFournisseur }) => (this.catFournisseur = catFournisseur));
  }

  previousState(): void {
    window.history.back();
  }
}
