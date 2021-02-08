import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPiecesPlisOuverture, PiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';
import { PiecesPlisOuvertureService } from './pieces-plis-ouverture.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { IPiece } from 'app/shared/model/dossierms/piece.model';
import { PieceService } from 'app/entities/dossierms/piece/piece.service';

type SelectableEntity = IDossierAppelOffre | IPlisOuverture | IPiece;

@Component({
  selector: 'jhi-pieces-plis-ouverture-update',
  templateUrl: './pieces-plis-ouverture-update.component.html',
})
export class PiecesPlisOuvertureUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  plisouvertures: IPlisOuverture[] = [];
  pieces: IPiece[] = [];

  editForm = this.fb.group({
    id: [],
    etat: [],
    libelle: [],
    etatConforme: [],
    dossierAppelOffreId: [],
    plisOuvertureId: [],
    pieceId: [],
  });

  constructor(
    protected piecesPlisOuvertureService: PiecesPlisOuvertureService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected plisOuvertureService: PlisOuvertureService,
    protected pieceService: PieceService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ piecesPlisOuverture }) => {
      this.updateForm(piecesPlisOuverture);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));

      this.pieceService.query().subscribe((res: HttpResponse<IPiece[]>) => (this.pieces = res.body || []));
    });
  }

  updateForm(piecesPlisOuverture: IPiecesPlisOuverture): void {
    this.editForm.patchValue({
      id: piecesPlisOuverture.id,
      etat: piecesPlisOuverture.etat,
      libelle: piecesPlisOuverture.libelle,
      etatConforme: piecesPlisOuverture.etatConforme,
      dossierAppelOffreId: piecesPlisOuverture.dossierAppelOffreId,
      plisOuvertureId: piecesPlisOuverture.plisOuvertureId,
      pieceId: piecesPlisOuverture.pieceId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const piecesPlisOuverture = this.createFromForm();
    if (piecesPlisOuverture.id !== undefined) {
      this.subscribeToSaveResponse(this.piecesPlisOuvertureService.update(piecesPlisOuverture));
    } else {
      this.subscribeToSaveResponse(this.piecesPlisOuvertureService.create(piecesPlisOuverture));
    }
  }

  private createFromForm(): IPiecesPlisOuverture {
    return {
      ...new PiecesPlisOuverture(),
      id: this.editForm.get(['id'])!.value,
      etat: this.editForm.get(['etat'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      etatConforme: this.editForm.get(['etatConforme'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
      pieceId: this.editForm.get(['pieceId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPiecesPlisOuverture>>): void {
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
