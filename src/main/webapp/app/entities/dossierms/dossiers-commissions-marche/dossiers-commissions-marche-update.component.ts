import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDossiersCommissionsMarche, DossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';
import { DossiersCommissionsMarcheService } from './dossiers-commissions-marche.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IMembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';
import { MembresCommissionsMarcheService } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche.service';

type SelectableEntity = IDossierAppelOffre | IMembresCommissionsMarche;

@Component({
  selector: 'jhi-dossiers-commissions-marche-update',
  templateUrl: './dossiers-commissions-marche-update.component.html',
})
export class DossiersCommissionsMarcheUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  membrescommissionsmarches: IMembresCommissionsMarche[] = [];

  editForm = this.fb.group({
    id: [],
    flagPresenceEvaluation: [],
    etapePI: [],
    dossierAppelOffreId: [],
    membresCommissionsMarcheId: [],
  });

  constructor(
    protected dossiersCommissionsMarcheService: DossiersCommissionsMarcheService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected membresCommissionsMarcheService: MembresCommissionsMarcheService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersCommissionsMarche }) => {
      this.updateForm(dossiersCommissionsMarche);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.membresCommissionsMarcheService
        .query()
        .subscribe((res: HttpResponse<IMembresCommissionsMarche[]>) => (this.membrescommissionsmarches = res.body || []));
    });
  }

  updateForm(dossiersCommissionsMarche: IDossiersCommissionsMarche): void {
    this.editForm.patchValue({
      id: dossiersCommissionsMarche.id,
      flagPresenceEvaluation: dossiersCommissionsMarche.flagPresenceEvaluation,
      etapePI: dossiersCommissionsMarche.etapePI,
      dossierAppelOffreId: dossiersCommissionsMarche.dossierAppelOffreId,
      membresCommissionsMarcheId: dossiersCommissionsMarche.membresCommissionsMarcheId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dossiersCommissionsMarche = this.createFromForm();
    if (dossiersCommissionsMarche.id !== undefined) {
      this.subscribeToSaveResponse(this.dossiersCommissionsMarcheService.update(dossiersCommissionsMarche));
    } else {
      this.subscribeToSaveResponse(this.dossiersCommissionsMarcheService.create(dossiersCommissionsMarche));
    }
  }

  private createFromForm(): IDossiersCommissionsMarche {
    return {
      ...new DossiersCommissionsMarche(),
      id: this.editForm.get(['id'])!.value,
      flagPresenceEvaluation: this.editForm.get(['flagPresenceEvaluation'])!.value,
      etapePI: this.editForm.get(['etapePI'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      membresCommissionsMarcheId: this.editForm.get(['membresCommissionsMarcheId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDossiersCommissionsMarche>>): void {
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
