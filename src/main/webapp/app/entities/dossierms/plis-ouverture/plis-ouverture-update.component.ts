import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPlisOuverture, PlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from './plis-ouverture.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IRetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';
import { RetraitRegistreDAOService } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao.service';
import { IFournisseur } from 'app/shared/model/dossierms/fournisseur.model';
import { FournisseurService } from 'app/entities/dossierms/fournisseur/fournisseur.service';

type SelectableEntity = IDossierAppelOffre | IRetraitRegistreDAO | IFournisseur;

@Component({
  selector: 'jhi-plis-ouverture-update',
  templateUrl: './plis-ouverture-update.component.html',
})
export class PlisOuvertureUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  retraitregistredaos: IRetraitRegistreDAO[] = [];
  fournisseurs: IFournisseur[] = [];
  dateDepotDp: any;
  heuredepotDp: any;

  editForm = this.fb.group({
    id: [],
    raisonSociale: [],
    adresseMail: [],
    commentaire: [],
    rang: [],
    ninea: [],
    natCode: [],
    monCode: [],
    pvOffreFinanciere: [],
    negociation: [],
    montantOffert: [],
    scoreFinancier: [],
    prixEvalue: [],
    scoreTechniquePondere: [],
    scoreFinancierPondere: [],
    scoreFinal: [],
    montantDefinitif: [],
    montantTVA: [],
    montantDouane: [],
    dateDepot: [],
    heuredepot: [],
    rabais: [],
    scoreTechnique: [],
    seuilAtteint: [],
    classemenTechnique: [],
    classementGeneral: [],
    candidatRestreintID: [],
    etatPreselection: [],
    etatExamenPreliminaire: [],
    critereQualification: [],
    attributaireProvisoire: [],
    offreTechnique: [],
    offreFinanciere: [],
    lettreSoumission: [],
    valide: [],
    numero: [],
    garantie: [],
    pieceRequise: [],
    observationsOffres: [],
    observationsCandidats: [],
    modeReception: [],
    notifie: [],
    signatureOffre: [],
    exhaustivite: [],
    garantieSoumission: [],
    conformite: [],
    critereProvenance: [],
    notePreselectionne: [],
    autoriteId: [],
    ajustement: [],
    dossierAppelOffreId: [],
    retraitRegistreDAOId: [],
    fournisseurId: [],
  });

  constructor(
    protected plisOuvertureService: PlisOuvertureService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected retraitRegistreDAOService: RetraitRegistreDAOService,
    protected fournisseurService: FournisseurService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ plisOuverture }) => {
      this.updateForm(plisOuverture);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.retraitRegistreDAOService
        .query()
        .subscribe((res: HttpResponse<IRetraitRegistreDAO[]>) => (this.retraitregistredaos = res.body || []));

      this.fournisseurService.query().subscribe((res: HttpResponse<IFournisseur[]>) => (this.fournisseurs = res.body || []));
    });
  }

  updateForm(plisOuverture: IPlisOuverture): void {
    this.editForm.patchValue({
      id: plisOuverture.id,
      raisonSociale: plisOuverture.raisonSociale,
      adresseMail: plisOuverture.adresseMail,
      commentaire: plisOuverture.commentaire,
      rang: plisOuverture.rang,
      ninea: plisOuverture.ninea,
      natCode: plisOuverture.natCode,
      monCode: plisOuverture.monCode,
      pvOffreFinanciere: plisOuverture.pvOffreFinanciere,
      negociation: plisOuverture.negociation,
      montantOffert: plisOuverture.montantOffert,
      scoreFinancier: plisOuverture.scoreFinancier,
      prixEvalue: plisOuverture.prixEvalue,
      scoreTechniquePondere: plisOuverture.scoreTechniquePondere,
      scoreFinancierPondere: plisOuverture.scoreFinancierPondere,
      scoreFinal: plisOuverture.scoreFinal,
      montantDefinitif: plisOuverture.montantDefinitif,
      montantTVA: plisOuverture.montantTVA,
      montantDouane: plisOuverture.montantDouane,
      dateDepot: plisOuverture.dateDepot,
      heuredepot: plisOuverture.heuredepot,
      rabais: plisOuverture.rabais,
      scoreTechnique: plisOuverture.scoreTechnique,
      seuilAtteint: plisOuverture.seuilAtteint,
      classemenTechnique: plisOuverture.classemenTechnique,
      classementGeneral: plisOuverture.classementGeneral,
      candidatRestreintID: plisOuverture.candidatRestreintID,
      etatPreselection: plisOuverture.etatPreselection,
      etatExamenPreliminaire: plisOuverture.etatExamenPreliminaire,
      critereQualification: plisOuverture.critereQualification,
      attributaireProvisoire: plisOuverture.attributaireProvisoire,
      offreTechnique: plisOuverture.offreTechnique,
      offreFinanciere: plisOuverture.offreFinanciere,
      lettreSoumission: plisOuverture.lettreSoumission,
      valide: plisOuverture.valide,
      numero: plisOuverture.numero,
      garantie: plisOuverture.garantie,
      pieceRequise: plisOuverture.pieceRequise,
      observationsOffres: plisOuverture.observationsOffres,
      observationsCandidats: plisOuverture.observationsCandidats,
      modeReception: plisOuverture.modeReception,
      notifie: plisOuverture.notifie,
      signatureOffre: plisOuverture.signatureOffre,
      exhaustivite: plisOuverture.exhaustivite,
      garantieSoumission: plisOuverture.garantieSoumission,
      conformite: plisOuverture.conformite,
      critereProvenance: plisOuverture.critereProvenance,
      notePreselectionne: plisOuverture.notePreselectionne,
      autoriteId: plisOuverture.autoriteId,
      ajustement: plisOuverture.ajustement,
      dossierAppelOffreId: plisOuverture.dossierAppelOffreId,
      retraitRegistreDAOId: plisOuverture.retraitRegistreDAOId,
      fournisseurId: plisOuverture.fournisseurId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const plisOuverture = this.createFromForm();
    if (plisOuverture.id !== undefined) {
      this.subscribeToSaveResponse(this.plisOuvertureService.update(plisOuverture));
    } else {
      this.subscribeToSaveResponse(this.plisOuvertureService.create(plisOuverture));
    }
  }

  private createFromForm(): IPlisOuverture {
    return {
      ...new PlisOuverture(),
      id: this.editForm.get(['id'])!.value,
      raisonSociale: this.editForm.get(['raisonSociale'])!.value,
      adresseMail: this.editForm.get(['adresseMail'])!.value,
      commentaire: this.editForm.get(['commentaire'])!.value,
      rang: this.editForm.get(['rang'])!.value,
      ninea: this.editForm.get(['ninea'])!.value,
      natCode: this.editForm.get(['natCode'])!.value,
      monCode: this.editForm.get(['monCode'])!.value,
      pvOffreFinanciere: this.editForm.get(['pvOffreFinanciere'])!.value,
      negociation: this.editForm.get(['negociation'])!.value,
      montantOffert: this.editForm.get(['montantOffert'])!.value,
      scoreFinancier: this.editForm.get(['scoreFinancier'])!.value,
      prixEvalue: this.editForm.get(['prixEvalue'])!.value,
      scoreTechniquePondere: this.editForm.get(['scoreTechniquePondere'])!.value,
      scoreFinancierPondere: this.editForm.get(['scoreFinancierPondere'])!.value,
      scoreFinal: this.editForm.get(['scoreFinal'])!.value,
      montantDefinitif: this.editForm.get(['montantDefinitif'])!.value,
      montantTVA: this.editForm.get(['montantTVA'])!.value,
      montantDouane: this.editForm.get(['montantDouane'])!.value,
      dateDepot: this.editForm.get(['dateDepot'])!.value,
      heuredepot: this.editForm.get(['heuredepot'])!.value,
      rabais: this.editForm.get(['rabais'])!.value,
      scoreTechnique: this.editForm.get(['scoreTechnique'])!.value,
      seuilAtteint: this.editForm.get(['seuilAtteint'])!.value,
      classemenTechnique: this.editForm.get(['classemenTechnique'])!.value,
      classementGeneral: this.editForm.get(['classementGeneral'])!.value,
      candidatRestreintID: this.editForm.get(['candidatRestreintID'])!.value,
      etatPreselection: this.editForm.get(['etatPreselection'])!.value,
      etatExamenPreliminaire: this.editForm.get(['etatExamenPreliminaire'])!.value,
      critereQualification: this.editForm.get(['critereQualification'])!.value,
      attributaireProvisoire: this.editForm.get(['attributaireProvisoire'])!.value,
      offreTechnique: this.editForm.get(['offreTechnique'])!.value,
      offreFinanciere: this.editForm.get(['offreFinanciere'])!.value,
      lettreSoumission: this.editForm.get(['lettreSoumission'])!.value,
      valide: this.editForm.get(['valide'])!.value,
      numero: this.editForm.get(['numero'])!.value,
      garantie: this.editForm.get(['garantie'])!.value,
      pieceRequise: this.editForm.get(['pieceRequise'])!.value,
      observationsOffres: this.editForm.get(['observationsOffres'])!.value,
      observationsCandidats: this.editForm.get(['observationsCandidats'])!.value,
      modeReception: this.editForm.get(['modeReception'])!.value,
      notifie: this.editForm.get(['notifie'])!.value,
      signatureOffre: this.editForm.get(['signatureOffre'])!.value,
      exhaustivite: this.editForm.get(['exhaustivite'])!.value,
      garantieSoumission: this.editForm.get(['garantieSoumission'])!.value,
      conformite: this.editForm.get(['conformite'])!.value,
      critereProvenance: this.editForm.get(['critereProvenance'])!.value,
      notePreselectionne: this.editForm.get(['notePreselectionne'])!.value,
      autoriteId: this.editForm.get(['autoriteId'])!.value,
      ajustement: this.editForm.get(['ajustement'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      retraitRegistreDAOId: this.editForm.get(['retraitRegistreDAOId'])!.value,
      fournisseurId: this.editForm.get(['fournisseurId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPlisOuverture>>): void {
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
