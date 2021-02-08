import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';

@Component({
  selector: 'jhi-taches-effectue-detail',
  templateUrl: './taches-effectue-detail.component.html',
})
export class TachesEffectueDetailComponent implements OnInit {
  tachesEffectue: ITachesEffectue | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ tachesEffectue }) => (this.tachesEffectue = tachesEffectue));
  }

  previousState(): void {
    window.history.back();
  }
}
