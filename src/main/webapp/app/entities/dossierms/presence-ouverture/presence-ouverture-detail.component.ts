import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';

@Component({
  selector: 'jhi-presence-ouverture-detail',
  templateUrl: './presence-ouverture-detail.component.html',
})
export class PresenceOuvertureDetailComponent implements OnInit {
  presenceOuverture: IPresenceOuverture | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ presenceOuverture }) => (this.presenceOuverture = presenceOuverture));
  }

  previousState(): void {
    window.history.back();
  }
}
