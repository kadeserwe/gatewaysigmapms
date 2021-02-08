import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';

@Component({
  selector: 'jhi-categorie-appel-offre-detail',
  templateUrl: './categorie-appel-offre-detail.component.html',
})
export class CategorieAppelOffreDetailComponent implements OnInit {
  categorieAppelOffre: ICategorieAppelOffre | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categorieAppelOffre }) => (this.categorieAppelOffre = categorieAppelOffre));
  }

  previousState(): void {
    window.history.back();
  }
}
