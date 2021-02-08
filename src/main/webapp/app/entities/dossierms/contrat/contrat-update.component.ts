import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IContrat, Contrat } from 'app/shared/model/dossierms/contrat.model';
import { ContratService } from './contrat.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';
import { IFournisseur } from 'app/shared/model/dossierms/fournisseur.model';
import { FournisseurService } from 'app/entities/dossierms/fournisseur/fournisseur.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';

type SelectableEntity = IDossierAppelOffre | ILot | IFournisseur | IPlisOuverture;

@Component({
  selector: 'jhi-contrat-update',
  templateUrl: './contrat-update.component.html',
})
export class ContratUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  lots: ILot[] = [];
  fournisseurs: IFournisseur[] = [];
  plisouvertures: IPlisOuverture[] = [];
  conDateSignatureDp: any;
  conDateApprobationDp: any;
  conDateNotificationDp: any;
  conDateRecepProvisoireDp: any;
  conDateRecepDefinitiveDp: any;
  conDateOrdreDemarrageDp: any;
  condateAttributionProvisoireDp: any;
  condateAttributionDefinitiveDp: any;
  conDatePaiementDp: any;
  dateDemandeImmatriculationDp: any;
  dateImmatriculationDp: any;
  datePubDp: any;
  dateDemandePubContratDp: any;
  conDateCreationDp: any;
  renouvcontDateDemandeAutorisationDp: any;
  renouvcontDateautorisationDp: any;
  renouvcontDateDemandeExamenJuridiqueDp: any;
  renouvcontDateExamenJuridiqueDp: any;
  renouvcontDateDemandeApprobationDp: any;
  renouvcontDateApprobationDp: any;
  renouvcontDateRejetDp: any;
  renouvcontDateRetourApprobationDp: any;

  editForm = this.fb.group({
    id: [],
    montant: [],
    montantVerse: [],
    conDateSignature: [],
    conDateApprobation: [],
    conDateNotification: [],
    conDateRecepProvisoire: [],
    conDateRecepDefinitive: [],
    conDateOrdreDemarrage: [],
    condateAttributionProvisoire: [],
    condateAttributionDefinitive: [],
    conDatePaiement: [],
    dateDemandeImmatriculation: [],
    dateImmatriculation: [],
    datePub: [],
    dateDemandePubContrat: [],
    conDateCreation: [],
    renouvcontDateDemandeAutorisation: [],
    renouvcontDateautorisation: [],
    renouvcontDateDemandeExamenJuridique: [],
    renouvcontDateExamenJuridique: [],
    renouvcontDateDemandeApprobation: [],
    renouvcontDateApprobation: [],
    renouvcontDateRejet: [],
    renouvcontDateRetourApprobation: [],
    conCommentSignature: [],
    conRefSignature: [],
    conCommentApprobation: [],
    conRefApprobation: [],
    conCommentNotification: [],
    conRefNotification: [],
    conFichierRecepProvisoire: [],
    conCommentRecepProvisoire: [],
    conFichierRecepDefinitive: [],
    conCommentRecepDefinitive: [],
    conFichierOrdreDemarrage: [],
    conCommentOrdreDemarrage: [],
    conRefAttributionProvisoire: [],
    conCommentaireAttributionProvisoire: [],
    conRefAttributionDefinitive: [],
    conCommentaireAttributionDefinitive: [],
    conStatut: [],
    numMatriculation: [],
    conCommentaireDmdmat: [],
    conCommentaireMatriculation: [],
    concSituation: [],
    nationnalite: [],
    fichierImmatricule: [],
    fichierJustificatif: [],
    commentairePub: [],
    fichierContrat: [],
    conCommentDemandePub: [],
    renouvcontFichierAutorisationPrealable: [],
    renouvcontFichierExamenJuridique: [],
    renouvcontFichierContratSigne: [],
    renouvcontFichierPageGarde: [],
    renouvcontFichierPageSignature: [],
    renouvcontFichierRapportMotivation: [],
    renouvcontFichierProjetContrat: [],
    renouvcontCommentAutorisation: [],
    renouvcontCommentDemandeApprobation: [],
    renouvcontCommentExamenJuridique: [],
    autoriteId: [],
    serviceId: [],
    modePassationId: [],
    typeMarcheId: [],
    immatriculation: [],
    delai: [],
    renouvcontImmatStatut: [],
    renouvcontPubStatut: [],
    renouvcontAutorisationStatut: [],
    renouvcontExamenJuridiqueStatut: [],
    renouvcontApprobationStatut: [],
    etatContratdebase: [],
    libelleLot: [],
    dossierAppelOffreId: [],
    lotId: [],
    fournisseurId: [],
    plisOuvertureId: [],
  });

  constructor(
    protected contratService: ContratService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected lotService: LotService,
    protected fournisseurService: FournisseurService,
    protected plisOuvertureService: PlisOuvertureService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ contrat }) => {
      this.updateForm(contrat);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));

      this.fournisseurService.query().subscribe((res: HttpResponse<IFournisseur[]>) => (this.fournisseurs = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));
    });
  }

  updateForm(contrat: IContrat): void {
    this.editForm.patchValue({
      id: contrat.id,
      montant: contrat.montant,
      montantVerse: contrat.montantVerse,
      conDateSignature: contrat.conDateSignature,
      conDateApprobation: contrat.conDateApprobation,
      conDateNotification: contrat.conDateNotification,
      conDateRecepProvisoire: contrat.conDateRecepProvisoire,
      conDateRecepDefinitive: contrat.conDateRecepDefinitive,
      conDateOrdreDemarrage: contrat.conDateOrdreDemarrage,
      condateAttributionProvisoire: contrat.condateAttributionProvisoire,
      condateAttributionDefinitive: contrat.condateAttributionDefinitive,
      conDatePaiement: contrat.conDatePaiement,
      dateDemandeImmatriculation: contrat.dateDemandeImmatriculation,
      dateImmatriculation: contrat.dateImmatriculation,
      datePub: contrat.datePub,
      dateDemandePubContrat: contrat.dateDemandePubContrat,
      conDateCreation: contrat.conDateCreation,
      renouvcontDateDemandeAutorisation: contrat.renouvcontDateDemandeAutorisation,
      renouvcontDateautorisation: contrat.renouvcontDateautorisation,
      renouvcontDateDemandeExamenJuridique: contrat.renouvcontDateDemandeExamenJuridique,
      renouvcontDateExamenJuridique: contrat.renouvcontDateExamenJuridique,
      renouvcontDateDemandeApprobation: contrat.renouvcontDateDemandeApprobation,
      renouvcontDateApprobation: contrat.renouvcontDateApprobation,
      renouvcontDateRejet: contrat.renouvcontDateRejet,
      renouvcontDateRetourApprobation: contrat.renouvcontDateRetourApprobation,
      conCommentSignature: contrat.conCommentSignature,
      conRefSignature: contrat.conRefSignature,
      conCommentApprobation: contrat.conCommentApprobation,
      conRefApprobation: contrat.conRefApprobation,
      conCommentNotification: contrat.conCommentNotification,
      conRefNotification: contrat.conRefNotification,
      conFichierRecepProvisoire: contrat.conFichierRecepProvisoire,
      conCommentRecepProvisoire: contrat.conCommentRecepProvisoire,
      conFichierRecepDefinitive: contrat.conFichierRecepDefinitive,
      conCommentRecepDefinitive: contrat.conCommentRecepDefinitive,
      conFichierOrdreDemarrage: contrat.conFichierOrdreDemarrage,
      conCommentOrdreDemarrage: contrat.conCommentOrdreDemarrage,
      conRefAttributionProvisoire: contrat.conRefAttributionProvisoire,
      conCommentaireAttributionProvisoire: contrat.conCommentaireAttributionProvisoire,
      conRefAttributionDefinitive: contrat.conRefAttributionDefinitive,
      conCommentaireAttributionDefinitive: contrat.conCommentaireAttributionDefinitive,
      conStatut: contrat.conStatut,
      numMatriculation: contrat.numMatriculation,
      conCommentaireDmdmat: contrat.conCommentaireDmdmat,
      conCommentaireMatriculation: contrat.conCommentaireMatriculation,
      concSituation: contrat.concSituation,
      nationnalite: contrat.nationnalite,
      fichierImmatricule: contrat.fichierImmatricule,
      fichierJustificatif: contrat.fichierJustificatif,
      commentairePub: contrat.commentairePub,
      fichierContrat: contrat.fichierContrat,
      conCommentDemandePub: contrat.conCommentDemandePub,
      renouvcontFichierAutorisationPrealable: contrat.renouvcontFichierAutorisationPrealable,
      renouvcontFichierExamenJuridique: contrat.renouvcontFichierExamenJuridique,
      renouvcontFichierContratSigne: contrat.renouvcontFichierContratSigne,
      renouvcontFichierPageGarde: contrat.renouvcontFichierPageGarde,
      renouvcontFichierPageSignature: contrat.renouvcontFichierPageSignature,
      renouvcontFichierRapportMotivation: contrat.renouvcontFichierRapportMotivation,
      renouvcontFichierProjetContrat: contrat.renouvcontFichierProjetContrat,
      renouvcontCommentAutorisation: contrat.renouvcontCommentAutorisation,
      renouvcontCommentDemandeApprobation: contrat.renouvcontCommentDemandeApprobation,
      renouvcontCommentExamenJuridique: contrat.renouvcontCommentExamenJuridique,
      autoriteId: contrat.autoriteId,
      serviceId: contrat.serviceId,
      modePassationId: contrat.modePassationId,
      typeMarcheId: contrat.typeMarcheId,
      immatriculation: contrat.immatriculation,
      delai: contrat.delai,
      renouvcontImmatStatut: contrat.renouvcontImmatStatut,
      renouvcontPubStatut: contrat.renouvcontPubStatut,
      renouvcontAutorisationStatut: contrat.renouvcontAutorisationStatut,
      renouvcontExamenJuridiqueStatut: contrat.renouvcontExamenJuridiqueStatut,
      renouvcontApprobationStatut: contrat.renouvcontApprobationStatut,
      etatContratdebase: contrat.etatContratdebase,
      libelleLot: contrat.libelleLot,
      dossierAppelOffreId: contrat.dossierAppelOffreId,
      lotId: contrat.lotId,
      fournisseurId: contrat.fournisseurId,
      plisOuvertureId: contrat.plisOuvertureId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const contrat = this.createFromForm();
    if (contrat.id !== undefined) {
      this.subscribeToSaveResponse(this.contratService.update(contrat));
    } else {
      this.subscribeToSaveResponse(this.contratService.create(contrat));
    }
  }

  private createFromForm(): IContrat {
    return {
      ...new Contrat(),
      id: this.editForm.get(['id'])!.value,
      montant: this.editForm.get(['montant'])!.value,
      montantVerse: this.editForm.get(['montantVerse'])!.value,
      conDateSignature: this.editForm.get(['conDateSignature'])!.value,
      conDateApprobation: this.editForm.get(['conDateApprobation'])!.value,
      conDateNotification: this.editForm.get(['conDateNotification'])!.value,
      conDateRecepProvisoire: this.editForm.get(['conDateRecepProvisoire'])!.value,
      conDateRecepDefinitive: this.editForm.get(['conDateRecepDefinitive'])!.value,
      conDateOrdreDemarrage: this.editForm.get(['conDateOrdreDemarrage'])!.value,
      condateAttributionProvisoire: this.editForm.get(['condateAttributionProvisoire'])!.value,
      condateAttributionDefinitive: this.editForm.get(['condateAttributionDefinitive'])!.value,
      conDatePaiement: this.editForm.get(['conDatePaiement'])!.value,
      dateDemandeImmatriculation: this.editForm.get(['dateDemandeImmatriculation'])!.value,
      dateImmatriculation: this.editForm.get(['dateImmatriculation'])!.value,
      datePub: this.editForm.get(['datePub'])!.value,
      dateDemandePubContrat: this.editForm.get(['dateDemandePubContrat'])!.value,
      conDateCreation: this.editForm.get(['conDateCreation'])!.value,
      renouvcontDateDemandeAutorisation: this.editForm.get(['renouvcontDateDemandeAutorisation'])!.value,
      renouvcontDateautorisation: this.editForm.get(['renouvcontDateautorisation'])!.value,
      renouvcontDateDemandeExamenJuridique: this.editForm.get(['renouvcontDateDemandeExamenJuridique'])!.value,
      renouvcontDateExamenJuridique: this.editForm.get(['renouvcontDateExamenJuridique'])!.value,
      renouvcontDateDemandeApprobation: this.editForm.get(['renouvcontDateDemandeApprobation'])!.value,
      renouvcontDateApprobation: this.editForm.get(['renouvcontDateApprobation'])!.value,
      renouvcontDateRejet: this.editForm.get(['renouvcontDateRejet'])!.value,
      renouvcontDateRetourApprobation: this.editForm.get(['renouvcontDateRetourApprobation'])!.value,
      conCommentSignature: this.editForm.get(['conCommentSignature'])!.value,
      conRefSignature: this.editForm.get(['conRefSignature'])!.value,
      conCommentApprobation: this.editForm.get(['conCommentApprobation'])!.value,
      conRefApprobation: this.editForm.get(['conRefApprobation'])!.value,
      conCommentNotification: this.editForm.get(['conCommentNotification'])!.value,
      conRefNotification: this.editForm.get(['conRefNotification'])!.value,
      conFichierRecepProvisoire: this.editForm.get(['conFichierRecepProvisoire'])!.value,
      conCommentRecepProvisoire: this.editForm.get(['conCommentRecepProvisoire'])!.value,
      conFichierRecepDefinitive: this.editForm.get(['conFichierRecepDefinitive'])!.value,
      conCommentRecepDefinitive: this.editForm.get(['conCommentRecepDefinitive'])!.value,
      conFichierOrdreDemarrage: this.editForm.get(['conFichierOrdreDemarrage'])!.value,
      conCommentOrdreDemarrage: this.editForm.get(['conCommentOrdreDemarrage'])!.value,
      conRefAttributionProvisoire: this.editForm.get(['conRefAttributionProvisoire'])!.value,
      conCommentaireAttributionProvisoire: this.editForm.get(['conCommentaireAttributionProvisoire'])!.value,
      conRefAttributionDefinitive: this.editForm.get(['conRefAttributionDefinitive'])!.value,
      conCommentaireAttributionDefinitive: this.editForm.get(['conCommentaireAttributionDefinitive'])!.value,
      conStatut: this.editForm.get(['conStatut'])!.value,
      numMatriculation: this.editForm.get(['numMatriculation'])!.value,
      conCommentaireDmdmat: this.editForm.get(['conCommentaireDmdmat'])!.value,
      conCommentaireMatriculation: this.editForm.get(['conCommentaireMatriculation'])!.value,
      concSituation: this.editForm.get(['concSituation'])!.value,
      nationnalite: this.editForm.get(['nationnalite'])!.value,
      fichierImmatricule: this.editForm.get(['fichierImmatricule'])!.value,
      fichierJustificatif: this.editForm.get(['fichierJustificatif'])!.value,
      commentairePub: this.editForm.get(['commentairePub'])!.value,
      fichierContrat: this.editForm.get(['fichierContrat'])!.value,
      conCommentDemandePub: this.editForm.get(['conCommentDemandePub'])!.value,
      renouvcontFichierAutorisationPrealable: this.editForm.get(['renouvcontFichierAutorisationPrealable'])!.value,
      renouvcontFichierExamenJuridique: this.editForm.get(['renouvcontFichierExamenJuridique'])!.value,
      renouvcontFichierContratSigne: this.editForm.get(['renouvcontFichierContratSigne'])!.value,
      renouvcontFichierPageGarde: this.editForm.get(['renouvcontFichierPageGarde'])!.value,
      renouvcontFichierPageSignature: this.editForm.get(['renouvcontFichierPageSignature'])!.value,
      renouvcontFichierRapportMotivation: this.editForm.get(['renouvcontFichierRapportMotivation'])!.value,
      renouvcontFichierProjetContrat: this.editForm.get(['renouvcontFichierProjetContrat'])!.value,
      renouvcontCommentAutorisation: this.editForm.get(['renouvcontCommentAutorisation'])!.value,
      renouvcontCommentDemandeApprobation: this.editForm.get(['renouvcontCommentDemandeApprobation'])!.value,
      renouvcontCommentExamenJuridique: this.editForm.get(['renouvcontCommentExamenJuridique'])!.value,
      autoriteId: this.editForm.get(['autoriteId'])!.value,
      serviceId: this.editForm.get(['serviceId'])!.value,
      modePassationId: this.editForm.get(['modePassationId'])!.value,
      typeMarcheId: this.editForm.get(['typeMarcheId'])!.value,
      immatriculation: this.editForm.get(['immatriculation'])!.value,
      delai: this.editForm.get(['delai'])!.value,
      renouvcontImmatStatut: this.editForm.get(['renouvcontImmatStatut'])!.value,
      renouvcontPubStatut: this.editForm.get(['renouvcontPubStatut'])!.value,
      renouvcontAutorisationStatut: this.editForm.get(['renouvcontAutorisationStatut'])!.value,
      renouvcontExamenJuridiqueStatut: this.editForm.get(['renouvcontExamenJuridiqueStatut'])!.value,
      renouvcontApprobationStatut: this.editForm.get(['renouvcontApprobationStatut'])!.value,
      etatContratdebase: this.editForm.get(['etatContratdebase'])!.value,
      libelleLot: this.editForm.get(['libelleLot'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
      fournisseurId: this.editForm.get(['fournisseurId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IContrat>>): void {
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
