import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IHistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';

@Component({
  selector: 'jhi-historique-appel-offres-ac-detail',
  templateUrl: './historique-appel-offres-ac-detail.component.html',
})
export class HistoriqueAppelOffresACDetailComponent implements OnInit {
  historiqueAppelOffresAC: IHistoriqueAppelOffresAC | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ historiqueAppelOffresAC }) => (this.historiqueAppelOffresAC = historiqueAppelOffresAC));
  }

  previousState(): void {
    window.history.back();
  }
}
