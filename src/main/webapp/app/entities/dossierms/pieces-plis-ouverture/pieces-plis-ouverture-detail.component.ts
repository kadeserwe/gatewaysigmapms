import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';

@Component({
  selector: 'jhi-pieces-plis-ouverture-detail',
  templateUrl: './pieces-plis-ouverture-detail.component.html',
})
export class PiecesPlisOuvertureDetailComponent implements OnInit {
  piecesPlisOuverture: IPiecesPlisOuverture | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ piecesPlisOuverture }) => (this.piecesPlisOuverture = piecesPlisOuverture));
  }

  previousState(): void {
    window.history.back();
  }
}
