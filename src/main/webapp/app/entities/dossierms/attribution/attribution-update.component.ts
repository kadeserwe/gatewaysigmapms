import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAttribution, Attribution } from 'app/shared/model/dossierms/attribution.model';
import { AttributionService } from './attribution.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';

type SelectableEntity = IDossierAppelOffre | IPlisOuverture | ILot;

@Component({
  selector: 'jhi-attribution-update',
  templateUrl: './attribution-update.component.html',
})
export class AttributionUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  plisouvertures: IPlisOuverture[] = [];
  lots: ILot[] = [];
  datePublicationProvisoireDp: any;
  datePublicationDefinitiveDp: any;
  dateattributionDp: any;

  editForm = this.fb.group({
    id: [],
    referencePlandePassation: [],
    referenceAvisGeneral: [],
    attributaireProvisoire: [],
    commentaire: [],
    commentaireDefinitif: [],
    nomFichierDef: [],
    attriType: [],
    montantMarche: [],
    montantdefinitif: [],
    moisExecution: [],
    semaineExecution: [],
    joursExecution: [],
    datePublicationProvisoire: [],
    datePublicationDefinitive: [],
    dateattribution: [],
    dossierAppelOffreId: [],
    plisOuvertureId: [],
    lotId: [],
  });

  constructor(
    protected attributionService: AttributionService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected plisOuvertureService: PlisOuvertureService,
    protected lotService: LotService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ attribution }) => {
      this.updateForm(attribution);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));
    });
  }

  updateForm(attribution: IAttribution): void {
    this.editForm.patchValue({
      id: attribution.id,
      referencePlandePassation: attribution.referencePlandePassation,
      referenceAvisGeneral: attribution.referenceAvisGeneral,
      attributaireProvisoire: attribution.attributaireProvisoire,
      commentaire: attribution.commentaire,
      commentaireDefinitif: attribution.commentaireDefinitif,
      nomFichierDef: attribution.nomFichierDef,
      attriType: attribution.attriType,
      montantMarche: attribution.montantMarche,
      montantdefinitif: attribution.montantdefinitif,
      moisExecution: attribution.moisExecution,
      semaineExecution: attribution.semaineExecution,
      joursExecution: attribution.joursExecution,
      datePublicationProvisoire: attribution.datePublicationProvisoire,
      datePublicationDefinitive: attribution.datePublicationDefinitive,
      dateattribution: attribution.dateattribution,
      dossierAppelOffreId: attribution.dossierAppelOffreId,
      plisOuvertureId: attribution.plisOuvertureId,
      lotId: attribution.lotId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const attribution = this.createFromForm();
    if (attribution.id !== undefined) {
      this.subscribeToSaveResponse(this.attributionService.update(attribution));
    } else {
      this.subscribeToSaveResponse(this.attributionService.create(attribution));
    }
  }

  private createFromForm(): IAttribution {
    return {
      ...new Attribution(),
      id: this.editForm.get(['id'])!.value,
      referencePlandePassation: this.editForm.get(['referencePlandePassation'])!.value,
      referenceAvisGeneral: this.editForm.get(['referenceAvisGeneral'])!.value,
      attributaireProvisoire: this.editForm.get(['attributaireProvisoire'])!.value,
      commentaire: this.editForm.get(['commentaire'])!.value,
      commentaireDefinitif: this.editForm.get(['commentaireDefinitif'])!.value,
      nomFichierDef: this.editForm.get(['nomFichierDef'])!.value,
      attriType: this.editForm.get(['attriType'])!.value,
      montantMarche: this.editForm.get(['montantMarche'])!.value,
      montantdefinitif: this.editForm.get(['montantdefinitif'])!.value,
      moisExecution: this.editForm.get(['moisExecution'])!.value,
      semaineExecution: this.editForm.get(['semaineExecution'])!.value,
      joursExecution: this.editForm.get(['joursExecution'])!.value,
      datePublicationProvisoire: this.editForm.get(['datePublicationProvisoire'])!.value,
      datePublicationDefinitive: this.editForm.get(['datePublicationDefinitive'])!.value,
      dateattribution: this.editForm.get(['dateattribution'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAttribution>>): void {
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
