import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';

@Component({
  selector: 'jhi-garanties-soumissionnaire-detail',
  templateUrl: './garanties-soumissionnaire-detail.component.html',
})
export class GarantiesSoumissionnaireDetailComponent implements OnInit {
  garantiesSoumissionnaire: IGarantiesSoumissionnaire | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ garantiesSoumissionnaire }) => (this.garantiesSoumissionnaire = garantiesSoumissionnaire));
  }

  previousState(): void {
    window.history.back();
  }
}
