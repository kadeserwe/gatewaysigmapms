import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';

@Component({
  selector: 'jhi-lots-soumissionnaire-detail',
  templateUrl: './lots-soumissionnaire-detail.component.html',
})
export class LotsSoumissionnaireDetailComponent implements OnInit {
  lotsSoumissionnaire: ILotsSoumissionnaire | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ lotsSoumissionnaire }) => (this.lotsSoumissionnaire = lotsSoumissionnaire));
  }

  previousState(): void {
    window.history.back();
  }
}
