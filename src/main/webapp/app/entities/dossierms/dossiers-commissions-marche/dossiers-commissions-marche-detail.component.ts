import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';

@Component({
  selector: 'jhi-dossiers-commissions-marche-detail',
  templateUrl: './dossiers-commissions-marche-detail.component.html',
})
export class DossiersCommissionsMarcheDetailComponent implements OnInit {
  dossiersCommissionsMarche: IDossiersCommissionsMarche | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersCommissionsMarche }) => (this.dossiersCommissionsMarche = dossiersCommissionsMarche));
  }

  previousState(): void {
    window.history.back();
  }
}
