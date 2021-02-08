import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPiece, Piece } from 'app/shared/model/dossierms/piece.model';
import { PieceService } from './piece.service';

@Component({
  selector: 'jhi-piece-update',
  templateUrl: './piece-update.component.html',
})
export class PieceUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [],
    description: [],
    codepiece: [],
    localisation: [],
    type: [],
    autoriteId: [],
  });

  constructor(protected pieceService: PieceService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ piece }) => {
      this.updateForm(piece);
    });
  }

  updateForm(piece: IPiece): void {
    this.editForm.patchValue({
      id: piece.id,
      libelle: piece.libelle,
      description: piece.description,
      codepiece: piece.codepiece,
      localisation: piece.localisation,
      type: piece.type,
      autoriteId: piece.autoriteId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const piece = this.createFromForm();
    if (piece.id !== undefined) {
      this.subscribeToSaveResponse(this.pieceService.update(piece));
    } else {
      this.subscribeToSaveResponse(this.pieceService.create(piece));
    }
  }

  private createFromForm(): IPiece {
    return {
      ...new Piece(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
      codepiece: this.editForm.get(['codepiece'])!.value,
      localisation: this.editForm.get(['localisation'])!.value,
      type: this.editForm.get(['type'])!.value,
      autoriteId: this.editForm.get(['autoriteId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPiece>>): void {
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
