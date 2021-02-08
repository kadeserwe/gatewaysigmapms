import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';

@Component({
  selector: 'jhi-observateurs-independant-detail',
  templateUrl: './observateurs-independant-detail.component.html',
})
export class ObservateursIndependantDetailComponent implements OnInit {
  observateursIndependant: IObservateursIndependant | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ observateursIndependant }) => (this.observateursIndependant = observateursIndependant));
  }

  previousState(): void {
    window.history.back();
  }
}
