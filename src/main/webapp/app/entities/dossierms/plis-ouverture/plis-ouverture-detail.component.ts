import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';

@Component({
  selector: 'jhi-plis-ouverture-detail',
  templateUrl: './plis-ouverture-detail.component.html',
})
export class PlisOuvertureDetailComponent implements OnInit {
  plisOuverture: IPlisOuverture | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ plisOuverture }) => (this.plisOuverture = plisOuverture));
  }

  previousState(): void {
    window.history.back();
  }
}
