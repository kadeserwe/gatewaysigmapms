import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';

@Component({
  selector: 'jhi-dossier-appel-offre-detail',
  templateUrl: './dossier-appel-offre-detail.component.html',
})
export class DossierAppelOffreDetailComponent implements OnInit {
  dossierAppelOffre: IDossierAppelOffre | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossierAppelOffre }) => (this.dossierAppelOffre = dossierAppelOffre));
  }

  previousState(): void {
    window.history.back();
  }
}
