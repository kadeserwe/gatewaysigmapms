import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDevise, Devise } from 'app/shared/model/dossierms/devise.model';
import { DeviseService } from './devise.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IMonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';
import { MonnaieOffreService } from 'app/entities/dossierms/monnaie-offre/monnaie-offre.service';

type SelectableEntity = IDossierAppelOffre | IMonnaieOffre;

@Component({
  selector: 'jhi-devise-update',
  templateUrl: './devise-update.component.html',
})
export class DeviseUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  monnaieoffres: IMonnaieOffre[] = [];

  editForm = this.fb.group({
    id: [],
    devTauxConversion: [],
    dossierAppelOffreId: [],
    monnaieOffreId: [],
  });

  constructor(
    protected deviseService: DeviseService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected monnaieOffreService: MonnaieOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ devise }) => {
      this.updateForm(devise);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.monnaieOffreService.query().subscribe((res: HttpResponse<IMonnaieOffre[]>) => (this.monnaieoffres = res.body || []));
    });
  }

  updateForm(devise: IDevise): void {
    this.editForm.patchValue({
      id: devise.id,
      devTauxConversion: devise.devTauxConversion,
      dossierAppelOffreId: devise.dossierAppelOffreId,
      monnaieOffreId: devise.monnaieOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const devise = this.createFromForm();
    if (devise.id !== undefined) {
      this.subscribeToSaveResponse(this.deviseService.update(devise));
    } else {
      this.subscribeToSaveResponse(this.deviseService.create(devise));
    }
  }

  private createFromForm(): IDevise {
    return {
      ...new Devise(),
      id: this.editForm.get(['id'])!.value,
      devTauxConversion: this.editForm.get(['devTauxConversion'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      monnaieOffreId: this.editForm.get(['monnaieOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDevise>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
