import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';

@Component({
  selector: 'jhi-monnaie-offre-detail',
  templateUrl: './monnaie-offre-detail.component.html',
})
export class MonnaieOffreDetailComponent implements OnInit {
  monnaieOffre: IMonnaieOffre | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ monnaieOffre }) => (this.monnaieOffre = monnaieOffre));
  }

  previousState(): void {
    window.history.back();
  }
}
