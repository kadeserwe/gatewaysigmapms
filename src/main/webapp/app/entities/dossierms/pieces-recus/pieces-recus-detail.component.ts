import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';

@Component({
  selector: 'jhi-pieces-recus-detail',
  templateUrl: './pieces-recus-detail.component.html',
})
export class PiecesRecusDetailComponent implements OnInit {
  piecesRecus: IPiecesRecus | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ piecesRecus }) => (this.piecesRecus = piecesRecus));
  }

  previousState(): void {
    window.history.back();
  }
}
