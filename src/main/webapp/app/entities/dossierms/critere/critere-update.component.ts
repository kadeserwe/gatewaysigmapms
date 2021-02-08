import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICritere, Critere } from 'app/shared/model/dossierms/critere.model';
import { CritereService } from './critere.service';

@Component({
  selector: 'jhi-critere-update',
  templateUrl: './critere-update.component.html',
})
export class CritereUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [],
    autoriteId: [],
  });

  constructor(protected critereService: CritereService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ critere }) => {
      this.updateForm(critere);
    });
  }

  updateForm(critere: ICritere): void {
    this.editForm.patchValue({
      id: critere.id,
      libelle: critere.libelle,
      autoriteId: critere.autoriteId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const critere = this.createFromForm();
    if (critere.id !== undefined) {
      this.subscribeToSaveResponse(this.critereService.update(critere));
    } else {
      this.subscribeToSaveResponse(this.critereService.create(critere));
    }
  }

  private createFromForm(): ICritere {
    return {
      ...new Critere(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      autoriteId: this.editForm.get(['autoriteId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICritere>>): void {
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
