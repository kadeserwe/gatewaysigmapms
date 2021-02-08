import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDossiersSouscritere, DossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';
import { DossiersSouscritereService } from './dossiers-souscritere.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';
import { ICritere } from 'app/shared/model/dossierms/critere.model';
import { CritereService } from 'app/entities/dossierms/critere/critere.service';

type SelectableEntity = IDossierAppelOffre | ILot | ICritere;

@Component({
  selector: 'jhi-dossiers-souscritere-update',
  templateUrl: './dossiers-souscritere-update.component.html',
})
export class DossiersSouscritereUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  lots: ILot[] = [];
  criteres: ICritere[] = [];

  editForm = this.fb.group({
    id: [],
    note: [],
    dossierAppelOffreId: [],
    lotId: [],
    critereId: [],
  });

  constructor(
    protected dossiersSouscritereService: DossiersSouscritereService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected lotService: LotService,
    protected critereService: CritereService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossiersSouscritere }) => {
      this.updateForm(dossiersSouscritere);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));

      this.critereService.query().subscribe((res: HttpResponse<ICritere[]>) => (this.criteres = res.body || []));
    });
  }

  updateForm(dossiersSouscritere: IDossiersSouscritere): void {
    this.editForm.patchValue({
      id: dossiersSouscritere.id,
      note: dossiersSouscritere.note,
      dossierAppelOffreId: dossiersSouscritere.dossierAppelOffreId,
      lotId: dossiersSouscritere.lotId,
      critereId: dossiersSouscritere.critereId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dossiersSouscritere = this.createFromForm();
    if (dossiersSouscritere.id !== undefined) {
      this.subscribeToSaveResponse(this.dossiersSouscritereService.update(dossiersSouscritere));
    } else {
      this.subscribeToSaveResponse(this.dossiersSouscritereService.create(dossiersSouscritere));
    }
  }

  private createFromForm(): IDossiersSouscritere {
    return {
      ...new DossiersSouscritere(),
      id: this.editForm.get(['id'])!.value,
      note: this.editForm.get(['note'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
      critereId: this.editForm.get(['critereId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDossiersSouscritere>>): void {
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
