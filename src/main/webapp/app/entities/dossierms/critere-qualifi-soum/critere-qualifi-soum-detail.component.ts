import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';

@Component({
  selector: 'jhi-critere-qualifi-soum-detail',
  templateUrl: './critere-qualifi-soum-detail.component.html',
})
export class CritereQualifiSoumDetailComponent implements OnInit {
  critereQualifiSoum: ICritereQualifiSoum | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ critereQualifiSoum }) => (this.critereQualifiSoum = critereQualifiSoum));
  }

  previousState(): void {
    window.history.back();
  }
}
