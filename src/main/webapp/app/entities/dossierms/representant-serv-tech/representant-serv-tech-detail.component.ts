import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';

@Component({
  selector: 'jhi-representant-serv-tech-detail',
  templateUrl: './representant-serv-tech-detail.component.html',
})
export class RepresentantServTechDetailComponent implements OnInit {
  representantServTech: IRepresentantServTech | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ representantServTech }) => (this.representantServTech = representantServTech));
  }

  previousState(): void {
    window.history.back();
  }
}
