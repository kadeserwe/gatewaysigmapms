import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IObservateursIndependant, ObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';
import { ObservateursIndependantService } from './observateurs-independant.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';

@Component({
  selector: 'jhi-observateurs-independant-update',
  templateUrl: './observateurs-independant-update.component.html',
})
export class ObservateursIndependantUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  dateConvocationDp: any;

  editForm = this.fb.group({
    id: [],
    representant: [],
    qualite: [],
    presence: [],
    dateConvocation: [],
    etape: [],
    dossierAppelOffreId: [],
  });

  constructor(
    protected observateursIndependantService: ObservateursIndependantService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ observateursIndependant }) => {
      this.updateForm(observateursIndependant);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));
    });
  }

  updateForm(observateursIndependant: IObservateursIndependant): void {
    this.editForm.patchValue({
      id: observateursIndependant.id,
      representant: observateursIndependant.representant,
      qualite: observateursIndependant.qualite,
      presence: observateursIndependant.presence,
      dateConvocation: observateursIndependant.dateConvocation,
      etape: observateursIndependant.etape,
      dossierAppelOffreId: observateursIndependant.dossierAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const observateursIndependant = this.createFromForm();
    if (observateursIndependant.id !== undefined) {
      this.subscribeToSaveResponse(this.observateursIndependantService.update(observateursIndependant));
    } else {
      this.subscribeToSaveResponse(this.observateursIndependantService.create(observateursIndependant));
    }
  }

  private createFromForm(): IObservateursIndependant {
    return {
      ...new ObservateursIndependant(),
      id: this.editForm.get(['id'])!.value,
      representant: this.editForm.get(['representant'])!.value,
      qualite: this.editForm.get(['qualite'])!.value,
      presence: this.editForm.get(['presence'])!.value,
      dateConvocation: this.editForm.get(['dateConvocation'])!.value,
      etape: this.editForm.get(['etape'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IObservateursIndependant>>): void {
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
