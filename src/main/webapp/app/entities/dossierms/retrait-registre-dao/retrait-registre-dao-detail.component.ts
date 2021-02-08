import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';

@Component({
  selector: 'jhi-retrait-registre-dao-detail',
  templateUrl: './retrait-registre-dao-detail.component.html',
})
export class RetraitRegistreDAODetailComponent implements OnInit {
  retraitRegistreDAO: IRetraitRegistreDAO | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ retraitRegistreDAO }) => (this.retraitRegistreDAO = retraitRegistreDAO));
  }

  previousState(): void {
    window.history.back();
  }
}
