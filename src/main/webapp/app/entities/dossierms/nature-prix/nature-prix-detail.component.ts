import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INaturePrix } from 'app/shared/model/dossierms/nature-prix.model';

@Component({
  selector: 'jhi-nature-prix-detail',
  templateUrl: './nature-prix-detail.component.html',
})
export class NaturePrixDetailComponent implements OnInit {
  naturePrix: INaturePrix | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ naturePrix }) => (this.naturePrix = naturePrix));
  }

  previousState(): void {
    window.history.back();
  }
}
