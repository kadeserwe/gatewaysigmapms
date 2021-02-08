import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITachesEffectue, TachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';
import { TachesEffectueService } from './taches-effectue.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';

@Component({
  selector: 'jhi-taches-effectue-update',
  templateUrl: './taches-effectue-update.component.html',
})
export class TachesEffectueUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];

  editForm = this.fb.group({
    id: [],
    allotissement: [],
    garantie: [],
    pieceAdministrative: [],
    critereQualification: [],
    devise: [],
    financement: [],
    registreRetrait: [],
    registreDepot: [],
    lotsSoumis: [],
    commissionsPassation: [],
    representantsSoumis: [],
    servicesTechniques: [],
    observateurs: [],
    garantieSoum: [],
    piecesSoumis: [],
    lectureOffre: [],
    commissionTecnique: [],
    document: [],
    examenGarantie: [],
    examenExhaustivite: [],
    examenSignatureOffre: [],
    examenConformite: [],
    verificationCritere: [],
    attributionProvisoire: [],
    termeReference: [],
    depotCandidature: [],
    preselection: [],
    notification: [],
    commissionsPassationPI: [],
    representantsSoumisPI: [],
    notesTechnique: [],
    offresFinanciere: [],
    prixEvalue: [],
    registreDepotPI: [],
    critereProvenance: [],
    procesVerbale: [],
    dossierAppelOffreId: [],
  });

  constructor(
    protected tachesEffectueService: TachesEffectueService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ tachesEffectue }) => {
      this.updateForm(tachesEffectue);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));
    });
  }

  updateForm(tachesEffectue: ITachesEffectue): void {
    this.editForm.patchValue({
      id: tachesEffectue.id,
      allotissement: tachesEffectue.allotissement,
      garantie: tachesEffectue.garantie,
      pieceAdministrative: tachesEffectue.pieceAdministrative,
      critereQualification: tachesEffectue.critereQualification,
      devise: tachesEffectue.devise,
      financement: tachesEffectue.financement,
      registreRetrait: tachesEffectue.registreRetrait,
      registreDepot: tachesEffectue.registreDepot,
      lotsSoumis: tachesEffectue.lotsSoumis,
      commissionsPassation: tachesEffectue.commissionsPassation,
      representantsSoumis: tachesEffectue.representantsSoumis,
      servicesTechniques: tachesEffectue.servicesTechniques,
      observateurs: tachesEffectue.observateurs,
      garantieSoum: tachesEffectue.garantieSoum,
      piecesSoumis: tachesEffectue.piecesSoumis,
      lectureOffre: tachesEffectue.lectureOffre,
      commissionTecnique: tachesEffectue.commissionTecnique,
      document: tachesEffectue.document,
      examenGarantie: tachesEffectue.examenGarantie,
      examenExhaustivite: tachesEffectue.examenExhaustivite,
      examenSignatureOffre: tachesEffectue.examenSignatureOffre,
      examenConformite: tachesEffectue.examenConformite,
      verificationCritere: tachesEffectue.verificationCritere,
      attributionProvisoire: tachesEffectue.attributionProvisoire,
      termeReference: tachesEffectue.termeReference,
      depotCandidature: tachesEffectue.depotCandidature,
      preselection: tachesEffectue.preselection,
      notification: tachesEffectue.notification,
      commissionsPassationPI: tachesEffectue.commissionsPassationPI,
      representantsSoumisPI: tachesEffectue.representantsSoumisPI,
      notesTechnique: tachesEffectue.notesTechnique,
      offresFinanciere: tachesEffectue.offresFinanciere,
      prixEvalue: tachesEffectue.prixEvalue,
      registreDepotPI: tachesEffectue.registreDepotPI,
      critereProvenance: tachesEffectue.critereProvenance,
      procesVerbale: tachesEffectue.procesVerbale,
      dossierAppelOffreId: tachesEffectue.dossierAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const tachesEffectue = this.createFromForm();
    if (tachesEffectue.id !== undefined) {
      this.subscribeToSaveResponse(this.tachesEffectueService.update(tachesEffectue));
    } else {
      this.subscribeToSaveResponse(this.tachesEffectueService.create(tachesEffectue));
    }
  }

  private createFromForm(): ITachesEffectue {
    return {
      ...new TachesEffectue(),
      id: this.editForm.get(['id'])!.value,
      allotissement: this.editForm.get(['allotissement'])!.value,
      garantie: this.editForm.get(['garantie'])!.value,
      pieceAdministrative: this.editForm.get(['pieceAdministrative'])!.value,
      critereQualification: this.editForm.get(['critereQualification'])!.value,
      devise: this.editForm.get(['devise'])!.value,
      financement: this.editForm.get(['financement'])!.value,
      registreRetrait: this.editForm.get(['registreRetrait'])!.value,
      registreDepot: this.editForm.get(['registreDepot'])!.value,
      lotsSoumis: this.editForm.get(['lotsSoumis'])!.value,
      commissionsPassation: this.editForm.get(['commissionsPassation'])!.value,
      representantsSoumis: this.editForm.get(['representantsSoumis'])!.value,
      servicesTechniques: this.editForm.get(['servicesTechniques'])!.value,
      observateurs: this.editForm.get(['observateurs'])!.value,
      garantieSoum: this.editForm.get(['garantieSoum'])!.value,
      piecesSoumis: this.editForm.get(['piecesSoumis'])!.value,
      lectureOffre: this.editForm.get(['lectureOffre'])!.value,
      commissionTecnique: this.editForm.get(['commissionTecnique'])!.value,
      document: this.editForm.get(['document'])!.value,
      examenGarantie: this.editForm.get(['examenGarantie'])!.value,
      examenExhaustivite: this.editForm.get(['examenExhaustivite'])!.value,
      examenSignatureOffre: this.editForm.get(['examenSignatureOffre'])!.value,
      examenConformite: this.editForm.get(['examenConformite'])!.value,
      verificationCritere: this.editForm.get(['verificationCritere'])!.value,
      attributionProvisoire: this.editForm.get(['attributionProvisoire'])!.value,
      termeReference: this.editForm.get(['termeReference'])!.value,
      depotCandidature: this.editForm.get(['depotCandidature'])!.value,
      preselection: this.editForm.get(['preselection'])!.value,
      notification: this.editForm.get(['notification'])!.value,
      commissionsPassationPI: this.editForm.get(['commissionsPassationPI'])!.value,
      representantsSoumisPI: this.editForm.get(['representantsSoumisPI'])!.value,
      notesTechnique: this.editForm.get(['notesTechnique'])!.value,
      offresFinanciere: this.editForm.get(['offresFinanciere'])!.value,
      prixEvalue: this.editForm.get(['prixEvalue'])!.value,
      registreDepotPI: this.editForm.get(['registreDepotPI'])!.value,
      critereProvenance: this.editForm.get(['critereProvenance'])!.value,
      procesVerbale: this.editForm.get(['procesVerbale'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITachesEffectue>>): void {
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
