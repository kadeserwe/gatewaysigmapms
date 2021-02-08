import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDossierAppelOffre, DossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from './dossier-appel-offre.service';
import { IAppelOffre } from 'app/shared/model/dossierms/appel-offre.model';
import { AppelOffreService } from 'app/entities/dossierms/appel-offre/appel-offre.service';

@Component({
  selector: 'jhi-dossier-appel-offre-update',
  templateUrl: './dossier-appel-offre-update.component.html',
})
export class DossierAppelOffreUpdateComponent implements OnInit {
  isSaving = false;
  appeloffres: IAppelOffre[] = [];
  dosDateDebutRetraitDp: any;
  dosDateLimiteDepotDp: any;
  dosHeurelimitedepotDp: any;
  dosDateCreationDp: any;
  dosDateRejetDp: any;
  dosDatePublicationProvisoireDp: any;
  dosDatePublicationDefinitiveDp: any;
  dosDateDemandePublicationDp: any;
  dosDateOuvertueDesplisDp: any;
  dosHeureOuvertureDesPlisDp: any;
  dosDatePublicationDp: any;
  dateRemiseDossierTechniqueDp: any;
  dateLimiteDossierTechniqueDp: any;
  dosDateMiseValidationAttributionDp: any;
  dosDateSignatureDp: any;
  dosDateMiseValidationSignatureDp: any;
  dosDateAttributionDefinitiveDp: any;
  dosDateDemandeApprobationDp: any;
  dosDateNotificationDp: any;

  editForm = this.fb.group({
    id: [],
    dosLieuDepotDossier: [],
    dosReference: [null, [Validators.required]],
    dosAdresseRetrait: [],
    dosConditionAcquistion: [],
    dosAllotissement: [],
    dosLotDivisible: [],
    dosCommentaireMiseValidation: [],
    dosCommentaireValidation: [],
    dosFichierValidation: [],
    dosCommentairePublicationProvisoire: [],
    dosCommentairesPublicationDefinitive: [],
    dosCommentairePublication: [],
    dosCommentSignature: [],
    dosRefSignature: [],
    dosCommentApprobation: [],
    dosRefApprobation: [],
    dosDateDebutRetrait: [],
    dosDateLimiteDepot: [],
    dosHeurelimitedepot: [],
    dosDateCreation: [],
    dosDateRejet: [],
    dosDatePublicationProvisoire: [],
    dosDatePublicationDefinitive: [],
    dosDateDemandePublication: [],
    dosCommentaireDemandePublication: [],
    dosFichierDemandePublication: [],
    dosLieuAcquisitionDAO: [],
    telechargerDAO: [],
    dosDateOuvertueDesplis: [],
    dosHeureOuvertureDesPlis: [],
    dosDatePublication: [],
    dosFicchierPublication: [],
    autiriteId: [null, [Validators.required]],
    dosMontantGarantie: [],
    dosMontantDao: [],
    dosMontantEstime: [],
    dosIncidents: [],
    dateRemiseDossierTechnique: [],
    dateLimiteDossierTechnique: [],
    commentaireDelaiTechnique: [],
    dosDateMiseValidationAttribution: [],
    dosEtatValidation: [],
    dosBordereau: [],
    dosFichierMiseValidationPrequalif: [],
    dosfichierSignature: [],
    dosDateSignature: [],
    dosDateMiseValidationSignature: [],
    dosDateAttributionDefinitive: [],
    dosDateDemandeApprobation: [],
    dosCommentDemandeApprobation: [],
    fichierApprobation: [],
    dosDateNotification: [],
    dosCommentNotification: [],
    dosRefNotification: [],
    dosFichierNotification: [],
    dosCommentaireAttributionDefinitive: [],
    appelOffreId: [],
  });

  constructor(
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected appelOffreService: AppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dossierAppelOffre }) => {
      this.updateForm(dossierAppelOffre);

      this.appelOffreService.query().subscribe((res: HttpResponse<IAppelOffre[]>) => (this.appeloffres = res.body || []));
    });
  }

  updateForm(dossierAppelOffre: IDossierAppelOffre): void {
    this.editForm.patchValue({
      id: dossierAppelOffre.id,
      dosLieuDepotDossier: dossierAppelOffre.dosLieuDepotDossier,
      dosReference: dossierAppelOffre.dosReference,
      dosAdresseRetrait: dossierAppelOffre.dosAdresseRetrait,
      dosConditionAcquistion: dossierAppelOffre.dosConditionAcquistion,
      dosAllotissement: dossierAppelOffre.dosAllotissement,
      dosLotDivisible: dossierAppelOffre.dosLotDivisible,
      dosCommentaireMiseValidation: dossierAppelOffre.dosCommentaireMiseValidation,
      dosCommentaireValidation: dossierAppelOffre.dosCommentaireValidation,
      dosFichierValidation: dossierAppelOffre.dosFichierValidation,
      dosCommentairePublicationProvisoire: dossierAppelOffre.dosCommentairePublicationProvisoire,
      dosCommentairesPublicationDefinitive: dossierAppelOffre.dosCommentairesPublicationDefinitive,
      dosCommentairePublication: dossierAppelOffre.dosCommentairePublication,
      dosCommentSignature: dossierAppelOffre.dosCommentSignature,
      dosRefSignature: dossierAppelOffre.dosRefSignature,
      dosCommentApprobation: dossierAppelOffre.dosCommentApprobation,
      dosRefApprobation: dossierAppelOffre.dosRefApprobation,
      dosDateDebutRetrait: dossierAppelOffre.dosDateDebutRetrait,
      dosDateLimiteDepot: dossierAppelOffre.dosDateLimiteDepot,
      dosHeurelimitedepot: dossierAppelOffre.dosHeurelimitedepot,
      dosDateCreation: dossierAppelOffre.dosDateCreation,
      dosDateRejet: dossierAppelOffre.dosDateRejet,
      dosDatePublicationProvisoire: dossierAppelOffre.dosDatePublicationProvisoire,
      dosDatePublicationDefinitive: dossierAppelOffre.dosDatePublicationDefinitive,
      dosDateDemandePublication: dossierAppelOffre.dosDateDemandePublication,
      dosCommentaireDemandePublication: dossierAppelOffre.dosCommentaireDemandePublication,
      dosFichierDemandePublication: dossierAppelOffre.dosFichierDemandePublication,
      dosLieuAcquisitionDAO: dossierAppelOffre.dosLieuAcquisitionDAO,
      telechargerDAO: dossierAppelOffre.telechargerDAO,
      dosDateOuvertueDesplis: dossierAppelOffre.dosDateOuvertueDesplis,
      dosHeureOuvertureDesPlis: dossierAppelOffre.dosHeureOuvertureDesPlis,
      dosDatePublication: dossierAppelOffre.dosDatePublication,
      dosFicchierPublication: dossierAppelOffre.dosFicchierPublication,
      autiriteId: dossierAppelOffre.autiriteId,
      dosMontantGarantie: dossierAppelOffre.dosMontantGarantie,
      dosMontantDao: dossierAppelOffre.dosMontantDao,
      dosMontantEstime: dossierAppelOffre.dosMontantEstime,
      dosIncidents: dossierAppelOffre.dosIncidents,
      dateRemiseDossierTechnique: dossierAppelOffre.dateRemiseDossierTechnique,
      dateLimiteDossierTechnique: dossierAppelOffre.dateLimiteDossierTechnique,
      commentaireDelaiTechnique: dossierAppelOffre.commentaireDelaiTechnique,
      dosDateMiseValidationAttribution: dossierAppelOffre.dosDateMiseValidationAttribution,
      dosEtatValidation: dossierAppelOffre.dosEtatValidation,
      dosBordereau: dossierAppelOffre.dosBordereau,
      dosFichierMiseValidationPrequalif: dossierAppelOffre.dosFichierMiseValidationPrequalif,
      dosfichierSignature: dossierAppelOffre.dosfichierSignature,
      dosDateSignature: dossierAppelOffre.dosDateSignature,
      dosDateMiseValidationSignature: dossierAppelOffre.dosDateMiseValidationSignature,
      dosDateAttributionDefinitive: dossierAppelOffre.dosDateAttributionDefinitive,
      dosDateDemandeApprobation: dossierAppelOffre.dosDateDemandeApprobation,
      dosCommentDemandeApprobation: dossierAppelOffre.dosCommentDemandeApprobation,
      fichierApprobation: dossierAppelOffre.fichierApprobation,
      dosDateNotification: dossierAppelOffre.dosDateNotification,
      dosCommentNotification: dossierAppelOffre.dosCommentNotification,
      dosRefNotification: dossierAppelOffre.dosRefNotification,
      dosFichierNotification: dossierAppelOffre.dosFichierNotification,
      dosCommentaireAttributionDefinitive: dossierAppelOffre.dosCommentaireAttributionDefinitive,
      appelOffreId: dossierAppelOffre.appelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dossierAppelOffre = this.createFromForm();
    if (dossierAppelOffre.id !== undefined) {
      this.subscribeToSaveResponse(this.dossierAppelOffreService.update(dossierAppelOffre));
    } else {
      this.subscribeToSaveResponse(this.dossierAppelOffreService.create(dossierAppelOffre));
    }
  }

  private createFromForm(): IDossierAppelOffre {
    return {
      ...new DossierAppelOffre(),
      id: this.editForm.get(['id'])!.value,
      dosLieuDepotDossier: this.editForm.get(['dosLieuDepotDossier'])!.value,
      dosReference: this.editForm.get(['dosReference'])!.value,
      dosAdresseRetrait: this.editForm.get(['dosAdresseRetrait'])!.value,
      dosConditionAcquistion: this.editForm.get(['dosConditionAcquistion'])!.value,
      dosAllotissement: this.editForm.get(['dosAllotissement'])!.value,
      dosLotDivisible: this.editForm.get(['dosLotDivisible'])!.value,
      dosCommentaireMiseValidation: this.editForm.get(['dosCommentaireMiseValidation'])!.value,
      dosCommentaireValidation: this.editForm.get(['dosCommentaireValidation'])!.value,
      dosFichierValidation: this.editForm.get(['dosFichierValidation'])!.value,
      dosCommentairePublicationProvisoire: this.editForm.get(['dosCommentairePublicationProvisoire'])!.value,
      dosCommentairesPublicationDefinitive: this.editForm.get(['dosCommentairesPublicationDefinitive'])!.value,
      dosCommentairePublication: this.editForm.get(['dosCommentairePublication'])!.value,
      dosCommentSignature: this.editForm.get(['dosCommentSignature'])!.value,
      dosRefSignature: this.editForm.get(['dosRefSignature'])!.value,
      dosCommentApprobation: this.editForm.get(['dosCommentApprobation'])!.value,
      dosRefApprobation: this.editForm.get(['dosRefApprobation'])!.value,
      dosDateDebutRetrait: this.editForm.get(['dosDateDebutRetrait'])!.value,
      dosDateLimiteDepot: this.editForm.get(['dosDateLimiteDepot'])!.value,
      dosHeurelimitedepot: this.editForm.get(['dosHeurelimitedepot'])!.value,
      dosDateCreation: this.editForm.get(['dosDateCreation'])!.value,
      dosDateRejet: this.editForm.get(['dosDateRejet'])!.value,
      dosDatePublicationProvisoire: this.editForm.get(['dosDatePublicationProvisoire'])!.value,
      dosDatePublicationDefinitive: this.editForm.get(['dosDatePublicationDefinitive'])!.value,
      dosDateDemandePublication: this.editForm.get(['dosDateDemandePublication'])!.value,
      dosCommentaireDemandePublication: this.editForm.get(['dosCommentaireDemandePublication'])!.value,
      dosFichierDemandePublication: this.editForm.get(['dosFichierDemandePublication'])!.value,
      dosLieuAcquisitionDAO: this.editForm.get(['dosLieuAcquisitionDAO'])!.value,
      telechargerDAO: this.editForm.get(['telechargerDAO'])!.value,
      dosDateOuvertueDesplis: this.editForm.get(['dosDateOuvertueDesplis'])!.value,
      dosHeureOuvertureDesPlis: this.editForm.get(['dosHeureOuvertureDesPlis'])!.value,
      dosDatePublication: this.editForm.get(['dosDatePublication'])!.value,
      dosFicchierPublication: this.editForm.get(['dosFicchierPublication'])!.value,
      autiriteId: this.editForm.get(['autiriteId'])!.value,
      dosMontantGarantie: this.editForm.get(['dosMontantGarantie'])!.value,
      dosMontantDao: this.editForm.get(['dosMontantDao'])!.value,
      dosMontantEstime: this.editForm.get(['dosMontantEstime'])!.value,
      dosIncidents: this.editForm.get(['dosIncidents'])!.value,
      dateRemiseDossierTechnique: this.editForm.get(['dateRemiseDossierTechnique'])!.value,
      dateLimiteDossierTechnique: this.editForm.get(['dateLimiteDossierTechnique'])!.value,
      commentaireDelaiTechnique: this.editForm.get(['commentaireDelaiTechnique'])!.value,
      dosDateMiseValidationAttribution: this.editForm.get(['dosDateMiseValidationAttribution'])!.value,
      dosEtatValidation: this.editForm.get(['dosEtatValidation'])!.value,
      dosBordereau: this.editForm.get(['dosBordereau'])!.value,
      dosFichierMiseValidationPrequalif: this.editForm.get(['dosFichierMiseValidationPrequalif'])!.value,
      dosfichierSignature: this.editForm.get(['dosfichierSignature'])!.value,
      dosDateSignature: this.editForm.get(['dosDateSignature'])!.value,
      dosDateMiseValidationSignature: this.editForm.get(['dosDateMiseValidationSignature'])!.value,
      dosDateAttributionDefinitive: this.editForm.get(['dosDateAttributionDefinitive'])!.value,
      dosDateDemandeApprobation: this.editForm.get(['dosDateDemandeApprobation'])!.value,
      dosCommentDemandeApprobation: this.editForm.get(['dosCommentDemandeApprobation'])!.value,
      fichierApprobation: this.editForm.get(['fichierApprobation'])!.value,
      dosDateNotification: this.editForm.get(['dosDateNotification'])!.value,
      dosCommentNotification: this.editForm.get(['dosCommentNotification'])!.value,
      dosRefNotification: this.editForm.get(['dosRefNotification'])!.value,
      dosFichierNotification: this.editForm.get(['dosFichierNotification'])!.value,
      dosCommentaireAttributionDefinitive: this.editForm.get(['dosCommentaireAttributionDefinitive'])!.value,
      appelOffreId: this.editForm.get(['appelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDossierAppelOffre>>): void {
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

  trackById(index: number, item: IAppelOffre): any {
    return item.id;
  }
}
