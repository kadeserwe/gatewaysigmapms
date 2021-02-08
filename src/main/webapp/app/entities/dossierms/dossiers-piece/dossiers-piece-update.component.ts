import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDossiersPiece, DossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';
import { DossiersPieceService } from './dossiers-piece.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IPiece } from 'app/shared/model/dossierms/piece.model';
import { PieceService } from 'app/entities/dossierms/piece/piece.service';

type SelectableEntity = IDossierAppelOffre | IPiece;

@Component({
  selector: 'jhi-dossiers-piece-update',
  templateUrl: './dossiers-piece-update.component.html',
})
export class DossiersPieceUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  pieces: IPiece[] = [];

  editForm = this.fb.group({
    id: [],
    dossierAppelOffreId: [],
    pieceId: [],
  });

  constructor(
    protected dossiersPieceService: DossiersPieceService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected pieceService: PieceService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersPiece }) => {
      this.updateForm(dossiersPiece);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.pieceService.query().subscribe((res: HttpResponse<IPiece[]>) => (this.pieces = res.body || []));
    });
  }

  updateForm(dossiersPiece: IDossiersPiece): void {
    this.editForm.patchValue({
      id: dossiersPiece.id,
      dossierAppelOffreId: dossiersPiece.dossierAppelOffreId,
      pieceId: dossiersPiece.pieceId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dossiersPiece = this.createFromForm();
    if (dossiersPiece.id !== undefined) {
      this.subscribeToSaveResponse(this.dossiersPieceService.update(dossiersPiece));
    } else {
      this.subscribeToSaveResponse(this.dossiersPieceService.create(dossiersPiece));
    }
  }

  private createFromForm(): IDossiersPiece {
    return {
      ...new DossiersPiece(),
      id: this.editForm.get(['id'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      pieceId: this.editForm.get(['pieceId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDossiersPiece>>): void {
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
