import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICritere } from 'app/shared/model/dossierms/critere.model';

@Component({
  selector: 'jhi-critere-detail',
  templateUrl: './critere-detail.component.html',
})
export class CritereDetailComponent implements OnInit {
  critere: ICritere | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ critere }) => (this.critere = critere));
  }

  previousState(): void {
    window.history.back();
  }
}
