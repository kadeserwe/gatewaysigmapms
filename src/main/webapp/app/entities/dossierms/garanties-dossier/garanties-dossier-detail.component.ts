import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';

@Component({
  selector: 'jhi-garanties-dossier-detail',
  templateUrl: './garanties-dossier-detail.component.html',
})
export class GarantiesDossierDetailComponent implements OnInit {
  garantiesDossier: IGarantiesDossier | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ garantiesDossier }) => (this.garantiesDossier = garantiesDossier));
  }

  previousState(): void {
    window.history.back();
  }
}
