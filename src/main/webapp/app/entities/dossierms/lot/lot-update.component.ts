import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ILot, Lot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from './lot.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';

@Component({
  selector: 'jhi-lot-update',
  templateUrl: './lot-update.component.html',
})
export class LotUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];

  editForm = this.fb.group({
    id: [],
    libelle: [],
    numero: [],
    commentaire: [],
    montant: [],
    montantdao: [],
    dossierAppelOffreId: [],
  });

  constructor(
    protected lotService: LotService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ lot }) => {
      this.updateForm(lot);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));
    });
  }

  updateForm(lot: ILot): void {
    this.editForm.patchValue({
      id: lot.id,
      libelle: lot.libelle,
      numero: lot.numero,
      commentaire: lot.commentaire,
      montant: lot.montant,
      montantdao: lot.montantdao,
      dossierAppelOffreId: lot.dossierAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const lot = this.createFromForm();
    if (lot.id !== undefined) {
      this.subscribeToSaveResponse(this.lotService.update(lot));
    } else {
      this.subscribeToSaveResponse(this.lotService.create(lot));
    }
  }

  private createFromForm(): ILot {
    return {
      ...new Lot(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      numero: this.editForm.get(['numero'])!.value,
      commentaire: this.editForm.get(['commentaire'])!.value,
      montant: this.editForm.get(['montant'])!.value,
      montantdao: this.editForm.get(['montantdao'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILot>>): void {
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
