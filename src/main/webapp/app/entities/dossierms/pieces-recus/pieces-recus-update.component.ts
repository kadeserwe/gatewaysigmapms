import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPiecesRecus, PiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';
import { PiecesRecusService } from './pieces-recus.service';

@Component({
  selector: 'jhi-pieces-recus-update',
  templateUrl: './pieces-recus-update.component.html',
})
export class PiecesRecusUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [],
    description: [],
    garantie: [],
  });

  constructor(protected piecesRecusService: PiecesRecusService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ piecesRecus }) => {
      this.updateForm(piecesRecus);
    });
  }

  updateForm(piecesRecus: IPiecesRecus): void {
    this.editForm.patchValue({
      id: piecesRecus.id,
      libelle: piecesRecus.libelle,
      description: piecesRecus.description,
      garantie: piecesRecus.garantie,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const piecesRecus = this.createFromForm();
    if (piecesRecus.id !== undefined) {
      this.subscribeToSaveResponse(this.piecesRecusService.update(piecesRecus));
    } else {
      this.subscribeToSaveResponse(this.piecesRecusService.create(piecesRecus));
    }
  }

  private createFromForm(): IPiecesRecus {
    return {
      ...new PiecesRecus(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
      garantie: this.editForm.get(['garantie'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPiecesRecus>>): void {
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
