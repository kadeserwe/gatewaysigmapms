import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';

@Component({
  selector: 'jhi-dossiers-souscritere-detail',
  templateUrl: './dossiers-souscritere-detail.component.html',
})
export class DossiersSouscritereDetailComponent implements OnInit {
  dossiersSouscritere: IDossiersSouscritere | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersSouscritere }) => (this.dossiersSouscritere = dossiersSouscritere));
  }

  previousState(): void {
    window.history.back();
  }
}
