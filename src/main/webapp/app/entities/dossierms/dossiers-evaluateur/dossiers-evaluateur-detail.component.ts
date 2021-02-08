import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';

@Component({
  selector: 'jhi-dossiers-evaluateur-detail',
  templateUrl: './dossiers-evaluateur-detail.component.html',
})
export class DossiersEvaluateurDetailComponent implements OnInit {
  dossiersEvaluateur: IDossiersEvaluateur | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersEvaluateur }) => (this.dossiersEvaluateur = dossiersEvaluateur));
  }

  previousState(): void {
    window.history.back();
  }
}
