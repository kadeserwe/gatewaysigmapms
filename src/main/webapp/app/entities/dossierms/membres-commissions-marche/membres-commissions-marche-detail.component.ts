import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IMembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';

@Component({
  selector: 'jhi-membres-commissions-marche-detail',
  templateUrl: './membres-commissions-marche-detail.component.html',
})
export class MembresCommissionsMarcheDetailComponent implements OnInit {
  membresCommissionsMarche: IMembresCommissionsMarche | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ membresCommissionsMarche }) => (this.membresCommissionsMarche = membresCommissionsMarche));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  previousState(): void {
    window.history.back();
  }
}
