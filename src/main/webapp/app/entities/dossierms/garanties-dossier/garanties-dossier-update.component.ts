import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IGarantiesDossier, GarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';
import { GarantiesDossierService } from './garanties-dossier.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';
import { IPiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';
import { PiecesRecusService } from 'app/entities/dossierms/pieces-recus/pieces-recus.service';

type SelectableEntity = IDossierAppelOffre | ILot | IPiecesRecus;

@Component({
  selector: 'jhi-garanties-dossier-update',
  templateUrl: './garanties-dossier-update.component.html',
})
export class GarantiesDossierUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  lots: ILot[] = [];
  piecesrecuses: IPiecesRecus[] = [];

  editForm = this.fb.group({
    id: [],
    pourcentage: [],
    montant: [],
    autiriteId: [],
    dossierAppelOffreId: [],
    lotId: [],
    piecesRecusId: [],
  });

  constructor(
    protected garantiesDossierService: GarantiesDossierService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected lotService: LotService,
    protected piecesRecusService: PiecesRecusService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ garantiesDossier }) => {
      this.updateForm(garantiesDossier);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));

      this.piecesRecusService.query().subscribe((res: HttpResponse<IPiecesRecus[]>) => (this.piecesrecuses = res.body || []));
    });
  }

  updateForm(garantiesDossier: IGarantiesDossier): void {
    this.editForm.patchValue({
      id: garantiesDossier.id,
      pourcentage: garantiesDossier.pourcentage,
      montant: garantiesDossier.montant,
      autiriteId: garantiesDossier.autiriteId,
      dossierAppelOffreId: garantiesDossier.dossierAppelOffreId,
      lotId: garantiesDossier.lotId,
      piecesRecusId: garantiesDossier.piecesRecusId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const garantiesDossier = this.createFromForm();
    if (garantiesDossier.id !== undefined) {
      this.subscribeToSaveResponse(this.garantiesDossierService.update(garantiesDossier));
    } else {
      this.subscribeToSaveResponse(this.garantiesDossierService.create(garantiesDossier));
    }
  }

  private createFromForm(): IGarantiesDossier {
    return {
      ...new GarantiesDossier(),
      id: this.editForm.get(['id'])!.value,
      pourcentage: this.editForm.get(['pourcentage'])!.value,
      montant: this.editForm.get(['montant'])!.value,
      autiriteId: this.editForm.get(['autiriteId'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
      piecesRecusId: this.editForm.get(['piecesRecusId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IGarantiesDossier>>): void {
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
