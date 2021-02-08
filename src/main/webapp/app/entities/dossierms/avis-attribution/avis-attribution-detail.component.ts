import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';

@Component({
  selector: 'jhi-avis-attribution-detail',
  templateUrl: './avis-attribution-detail.component.html',
})
export class AvisAttributionDetailComponent implements OnInit {
  avisAttribution: IAvisAttribution | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ avisAttribution }) => (this.avisAttribution = avisAttribution));
  }

  previousState(): void {
    window.history.back();
  }
}
