import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAvisAttribution, AvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';
import { AvisAttributionService } from './avis-attribution.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';

type SelectableEntity = IDossierAppelOffre | ILot;

@Component({
  selector: 'jhi-avis-attribution-update',
  templateUrl: './avis-attribution-update.component.html',
})
export class AvisAttributionUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  lots: ILot[] = [];
  attriDateDp: any;
  attridatepublicationDp: any;

  editForm = this.fb.group({
    id: [],
    attriObjet: [],
    attriType: [],
    attritexte: [],
    attriRef: [],
    attrifichier: [],
    attriRaisonsocial: [],
    attriDate: [],
    attridatepublication: [],
    attriPub: [],
    autiriteId: [],
    dossierAppelOffreId: [],
    lotId: [],
  });

  constructor(
    protected avisAttributionService: AvisAttributionService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected lotService: LotService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ avisAttribution }) => {
      this.updateForm(avisAttribution);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));
    });
  }

  updateForm(avisAttribution: IAvisAttribution): void {
    this.editForm.patchValue({
      id: avisAttribution.id,
      attriObjet: avisAttribution.attriObjet,
      attriType: avisAttribution.attriType,
      attritexte: avisAttribution.attritexte,
      attriRef: avisAttribution.attriRef,
      attrifichier: avisAttribution.attrifichier,
      attriRaisonsocial: avisAttribution.attriRaisonsocial,
      attriDate: avisAttribution.attriDate,
      attridatepublication: avisAttribution.attridatepublication,
      attriPub: avisAttribution.attriPub,
      autiriteId: avisAttribution.autiriteId,
      dossierAppelOffreId: avisAttribution.dossierAppelOffreId,
      lotId: avisAttribution.lotId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const avisAttribution = this.createFromForm();
    if (avisAttribution.id !== undefined) {
      this.subscribeToSaveResponse(this.avisAttributionService.update(avisAttribution));
    } else {
      this.subscribeToSaveResponse(this.avisAttributionService.create(avisAttribution));
    }
  }

  private createFromForm(): IAvisAttribution {
    return {
      ...new AvisAttribution(),
      id: this.editForm.get(['id'])!.value,
      attriObjet: this.editForm.get(['attriObjet'])!.value,
      attriType: this.editForm.get(['attriType'])!.value,
      attritexte: this.editForm.get(['attritexte'])!.value,
      attriRef: this.editForm.get(['attriRef'])!.value,
      attrifichier: this.editForm.get(['attrifichier'])!.value,
      attriRaisonsocial: this.editForm.get(['attriRaisonsocial'])!.value,
      attriDate: this.editForm.get(['attriDate'])!.value,
      attridatepublication: this.editForm.get(['attridatepublication'])!.value,
      attriPub: this.editForm.get(['attriPub'])!.value,
      autiriteId: this.editForm.get(['autiriteId'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAvisAttribution>>): void {
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
