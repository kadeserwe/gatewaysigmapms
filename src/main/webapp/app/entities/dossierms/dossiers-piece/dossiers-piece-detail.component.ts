import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';

@Component({
  selector: 'jhi-dossiers-piece-detail',
  templateUrl: './dossiers-piece-detail.component.html',
})
export class DossiersPieceDetailComponent implements OnInit {
  dossiersPiece: IDossiersPiece | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersPiece }) => (this.dossiersPiece = dossiersPiece));
  }

  previousState(): void {
    window.history.back();
  }
}
