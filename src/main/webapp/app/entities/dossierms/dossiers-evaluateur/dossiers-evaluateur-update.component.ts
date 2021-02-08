import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDossiersEvaluateur, DossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';
import { DossiersEvaluateurService } from './dossiers-evaluateur.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';

@Component({
  selector: 'jhi-dossiers-evaluateur-update',
  templateUrl: './dossiers-evaluateur-update.component.html',
})
export class DossiersEvaluateurUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  dateRemiseDp: any;
  dateLimiteDp: any;

  editForm = this.fb.group({
    id: [],
    commission: [],
    nom: [],
    prenom: [],
    telephone: [],
    email: [],
    fonction: [],
    dateRemise: [],
    dateLimite: [],
    dossierAppelOffreId: [],
  });

  constructor(
    protected dossiersEvaluateurService: DossiersEvaluateurService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersEvaluateur }) => {
      this.updateForm(dossiersEvaluateur);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));
    });
  }

  updateForm(dossiersEvaluateur: IDossiersEvaluateur): void {
    this.editForm.patchValue({
      id: dossiersEvaluateur.id,
      commission: dossiersEvaluateur.commission,
      nom: dossiersEvaluateur.nom,
      prenom: dossiersEvaluateur.prenom,
      telephone: dossiersEvaluateur.telephone,
      email: dossiersEvaluateur.email,
      fonction: dossiersEvaluateur.fonction,
      dateRemise: dossiersEvaluateur.dateRemise,
      dateLimite: dossiersEvaluateur.dateLimite,
      dossierAppelOffreId: dossiersEvaluateur.dossierAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dossiersEvaluateur = this.createFromForm();
    if (dossiersEvaluateur.id !== undefined) {
      this.subscribeToSaveResponse(this.dossiersEvaluateurService.update(dossiersEvaluateur));
    } else {
      this.subscribeToSaveResponse(this.dossiersEvaluateurService.create(dossiersEvaluateur));
    }
  }

  private createFromForm(): IDossiersEvaluateur {
    return {
      ...new DossiersEvaluateur(),
      id: this.editForm.get(['id'])!.value,
      commission: this.editForm.get(['commission'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      email: this.editForm.get(['email'])!.value,
      fonction: this.editForm.get(['fonction'])!.value,
      dateRemise: this.editForm.get(['dateRemise'])!.value,
      dateLimite: this.editForm.get(['dateLimite'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDossiersEvaluateur>>): void {
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

  trackById(index: number, item: IDossierAppelOffre): any {
    return item.id;
  }
}
