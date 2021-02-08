import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPresenceOuverture, PresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';
import { PresenceOuvertureService } from './presence-ouverture.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IAppelOffre } from 'app/shared/model/dossierms/appel-offre.model';
import { AppelOffreService } from 'app/entities/dossierms/appel-offre/appel-offre.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';

type SelectableEntity = IDossierAppelOffre | IAppelOffre | IPlisOuverture;

@Component({
  selector: 'jhi-presence-ouverture-update',
  templateUrl: './presence-ouverture-update.component.html',
})
export class PresenceOuvertureUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  appeloffres: IAppelOffre[] = [];
  plisouvertures: IPlisOuverture[] = [];

  editForm = this.fb.group({
    id: [],
    supplementaire: [],
    email: [],
    telephone: [],
    nomRepresentant: [],
    prenomRepresentant: [],
    nomStructure: [],
    qualite: [],
    etapePI: [],
    dossierAppelOffreId: [],
    appelOffreId: [],
    plisOuvertureId: [],
  });

  constructor(
    protected presenceOuvertureService: PresenceOuvertureService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected appelOffreService: AppelOffreService,
    protected plisOuvertureService: PlisOuvertureService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ presenceOuverture }) => {
      this.updateForm(presenceOuverture);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.appelOffreService.query().subscribe((res: HttpResponse<IAppelOffre[]>) => (this.appeloffres = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));
    });
  }

  updateForm(presenceOuverture: IPresenceOuverture): void {
    this.editForm.patchValue({
      id: presenceOuverture.id,
      supplementaire: presenceOuverture.supplementaire,
      email: presenceOuverture.email,
      telephone: presenceOuverture.telephone,
      nomRepresentant: presenceOuverture.nomRepresentant,
      prenomRepresentant: presenceOuverture.prenomRepresentant,
      nomStructure: presenceOuverture.nomStructure,
      qualite: presenceOuverture.qualite,
      etapePI: presenceOuverture.etapePI,
      dossierAppelOffreId: presenceOuverture.dossierAppelOffreId,
      appelOffreId: presenceOuverture.appelOffreId,
      plisOuvertureId: presenceOuverture.plisOuvertureId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const presenceOuverture = this.createFromForm();
    if (presenceOuverture.id !== undefined) {
      this.subscribeToSaveResponse(this.presenceOuvertureService.update(presenceOuverture));
    } else {
      this.subscribeToSaveResponse(this.presenceOuvertureService.create(presenceOuverture));
    }
  }

  private createFromForm(): IPresenceOuverture {
    return {
      ...new PresenceOuverture(),
      id: this.editForm.get(['id'])!.value,
      supplementaire: this.editForm.get(['supplementaire'])!.value,
      email: this.editForm.get(['email'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      nomRepresentant: this.editForm.get(['nomRepresentant'])!.value,
      prenomRepresentant: this.editForm.get(['prenomRepresentant'])!.value,
      nomStructure: this.editForm.get(['nomStructure'])!.value,
      qualite: this.editForm.get(['qualite'])!.value,
      etapePI: this.editForm.get(['etapePI'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      appelOffreId: this.editForm.get(['appelOffreId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPresenceOuverture>>): void {
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
