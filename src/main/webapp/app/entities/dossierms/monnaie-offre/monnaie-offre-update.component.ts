import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IMonnaieOffre, MonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';
import { MonnaieOffreService } from './monnaie-offre.service';

@Component({
  selector: 'jhi-monnaie-offre-update',
  templateUrl: './monnaie-offre-update.component.html',
})
export class MonnaieOffreUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    monCode: [],
    monLibelle: [],
  });

  constructor(protected monnaieOffreService: MonnaieOffreService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ monnaieOffre }) => {
      this.updateForm(monnaieOffre);
    });
  }

  updateForm(monnaieOffre: IMonnaieOffre): void {
    this.editForm.patchValue({
      id: monnaieOffre.id,
      monCode: monnaieOffre.monCode,
      monLibelle: monnaieOffre.monLibelle,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const monnaieOffre = this.createFromForm();
    if (monnaieOffre.id !== undefined) {
      this.subscribeToSaveResponse(this.monnaieOffreService.update(monnaieOffre));
    } else {
      this.subscribeToSaveResponse(this.monnaieOffreService.create(monnaieOffre));
    }
  }

  private createFromForm(): IMonnaieOffre {
    return {
      ...new MonnaieOffre(),
      id: this.editForm.get(['id'])!.value,
      monCode: this.editForm.get(['monCode'])!.value,
      monLibelle: this.editForm.get(['monLibelle'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMonnaieOffre>>): void {
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
}
