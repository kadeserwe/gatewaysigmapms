import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { INaturePrix, NaturePrix } from 'app/shared/model/dossierms/nature-prix.model';
import { NaturePrixService } from './nature-prix.service';

@Component({
  selector: 'jhi-nature-prix-update',
  templateUrl: './nature-prix-update.component.html',
})
export class NaturePrixUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    natCode: [],
    natLibelle: [],
  });

  constructor(protected naturePrixService: NaturePrixService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ naturePrix }) => {
      this.updateForm(naturePrix);
    });
  }

  updateForm(naturePrix: INaturePrix): void {
    this.editForm.patchValue({
      id: naturePrix.id,
      natCode: naturePrix.natCode,
      natLibelle: naturePrix.natLibelle,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const naturePrix = this.createFromForm();
    if (naturePrix.id !== undefined) {
      this.subscribeToSaveResponse(this.naturePrixService.update(naturePrix));
    } else {
      this.subscribeToSaveResponse(this.naturePrixService.create(naturePrix));
    }
  }

  private createFromForm(): INaturePrix {
    return {
      ...new NaturePrix(),
      id: this.editForm.get(['id'])!.value,
      natCode: this.editForm.get(['natCode'])!.value,
      natLibelle: this.editForm.get(['natLibelle'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<INaturePrix>>): void {
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
