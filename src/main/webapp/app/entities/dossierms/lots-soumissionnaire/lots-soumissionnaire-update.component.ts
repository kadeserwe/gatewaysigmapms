import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ILotsSoumissionnaire, LotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';
import { LotsSoumissionnaireService } from './lots-soumissionnaire.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { IMonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';
import { MonnaieOffreService } from 'app/entities/dossierms/monnaie-offre/monnaie-offre.service';
import { INaturePrix } from 'app/shared/model/dossierms/nature-prix.model';
import { NaturePrixService } from 'app/entities/dossierms/nature-prix/nature-prix.service';
import { IPays } from 'app/shared/model/dossierms/pays.model';
import { PaysService } from 'app/entities/dossierms/pays/pays.service';

type SelectableEntity = IDossierAppelOffre | ILot | IPlisOuverture | IMonnaieOffre | INaturePrix | IPays;

@Component({
  selector: 'jhi-lots-soumissionnaire-update',
  templateUrl: './lots-soumissionnaire-update.component.html',
})
export class LotsSoumissionnaireUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  lots: ILot[] = [];
  plisouvertures: IPlisOuverture[] = [];
  monnaieoffres: IMonnaieOffre[] = [];
  natureprixes: INaturePrix[] = [];
  pays: IPays[] = [];
  dateDepotDp: any;

  editForm = this.fb.group({
    id: [],
    raisonsociale: [],
    numero: [],
    email: [],
    commentaire: [],
    lotsoumis: [],
    lotrecu: [],
    libelle: [],
    elimine: [],
    montantOffert: [],
    montantDefinitif: [],
    montantGarantie: [],
    montantTVA: [],
    montantDouane: [],
    montantTTC: [],
    rabais: [],
    rang: [],
    scoreTechnique: [],
    scoreFinancier: [],
    prixEvalue: [],
    scoreTechniquePondere: [],
    scoreFinancierPondere: [],
    scoreFinal: [],
    dateDepot: [],
    classementGeneral: [],
    classemenTechnique: [],
    etatPreselection: [],
    etatExamenPreliminaire: [],
    critereQualification: [],
    attributaireProvisoire: [],
    plilValide: [],
    lettreSoumission: [],
    offreTechnique: [],
    offreFinanciere: [],
    plinumero: [],
    dossierAppelOffreId: [],
    lotId: [],
    plisOuvertureId: [],
    monnaieOffreId: [],
    naturePrixId: [],
    paysId: [],
  });

  constructor(
    protected lotsSoumissionnaireService: LotsSoumissionnaireService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected lotService: LotService,
    protected plisOuvertureService: PlisOuvertureService,
    protected monnaieOffreService: MonnaieOffreService,
    protected naturePrixService: NaturePrixService,
    protected paysService: PaysService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ lotsSoumissionnaire }) => {
      this.updateForm(lotsSoumissionnaire);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));

      this.monnaieOffreService.query().subscribe((res: HttpResponse<IMonnaieOffre[]>) => (this.monnaieoffres = res.body || []));

      this.naturePrixService.query().subscribe((res: HttpResponse<INaturePrix[]>) => (this.natureprixes = res.body || []));

      this.paysService.query().subscribe((res: HttpResponse<IPays[]>) => (this.pays = res.body || []));
    });
  }

  updateForm(lotsSoumissionnaire: ILotsSoumissionnaire): void {
    this.editForm.patchValue({
      id: lotsSoumissionnaire.id,
      raisonsociale: lotsSoumissionnaire.raisonsociale,
      numero: lotsSoumissionnaire.numero,
      email: lotsSoumissionnaire.email,
      commentaire: lotsSoumissionnaire.commentaire,
      lotsoumis: lotsSoumissionnaire.lotsoumis,
      lotrecu: lotsSoumissionnaire.lotrecu,
      libelle: lotsSoumissionnaire.libelle,
      elimine: lotsSoumissionnaire.elimine,
      montantOffert: lotsSoumissionnaire.montantOffert,
      montantDefinitif: lotsSoumissionnaire.montantDefinitif,
      montantGarantie: lotsSoumissionnaire.montantGarantie,
      montantTVA: lotsSoumissionnaire.montantTVA,
      montantDouane: lotsSoumissionnaire.montantDouane,
      montantTTC: lotsSoumissionnaire.montantTTC,
      rabais: lotsSoumissionnaire.rabais,
      rang: lotsSoumissionnaire.rang,
      scoreTechnique: lotsSoumissionnaire.scoreTechnique,
      scoreFinancier: lotsSoumissionnaire.scoreFinancier,
      prixEvalue: lotsSoumissionnaire.prixEvalue,
      scoreTechniquePondere: lotsSoumissionnaire.scoreTechniquePondere,
      scoreFinancierPondere: lotsSoumissionnaire.scoreFinancierPondere,
      scoreFinal: lotsSoumissionnaire.scoreFinal,
      dateDepot: lotsSoumissionnaire.dateDepot,
      classementGeneral: lotsSoumissionnaire.classementGeneral,
      classemenTechnique: lotsSoumissionnaire.classemenTechnique,
      etatPreselection: lotsSoumissionnaire.etatPreselection,
      etatExamenPreliminaire: lotsSoumissionnaire.etatExamenPreliminaire,
      critereQualification: lotsSoumissionnaire.critereQualification,
      attributaireProvisoire: lotsSoumissionnaire.attributaireProvisoire,
      plilValide: lotsSoumissionnaire.plilValide,
      lettreSoumission: lotsSoumissionnaire.lettreSoumission,
      offreTechnique: lotsSoumissionnaire.offreTechnique,
      offreFinanciere: lotsSoumissionnaire.offreFinanciere,
      plinumero: lotsSoumissionnaire.plinumero,
      dossierAppelOffreId: lotsSoumissionnaire.dossierAppelOffreId,
      lotId: lotsSoumissionnaire.lotId,
      plisOuvertureId: lotsSoumissionnaire.plisOuvertureId,
      monnaieOffreId: lotsSoumissionnaire.monnaieOffreId,
      naturePrixId: lotsSoumissionnaire.naturePrixId,
      paysId: lotsSoumissionnaire.paysId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const lotsSoumissionnaire = this.createFromForm();
    if (lotsSoumissionnaire.id !== undefined) {
      this.subscribeToSaveResponse(this.lotsSoumissionnaireService.update(lotsSoumissionnaire));
    } else {
      this.subscribeToSaveResponse(this.lotsSoumissionnaireService.create(lotsSoumissionnaire));
    }
  }

  private createFromForm(): ILotsSoumissionnaire {
    return {
      ...new LotsSoumissionnaire(),
      id: this.editForm.get(['id'])!.value,
      raisonsociale: this.editForm.get(['raisonsociale'])!.value,
      numero: this.editForm.get(['numero'])!.value,
      email: this.editForm.get(['email'])!.value,
      commentaire: this.editForm.get(['commentaire'])!.value,
      lotsoumis: this.editForm.get(['lotsoumis'])!.value,
      lotrecu: this.editForm.get(['lotrecu'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      elimine: this.editForm.get(['elimine'])!.value,
      montantOffert: this.editForm.get(['montantOffert'])!.value,
      montantDefinitif: this.editForm.get(['montantDefinitif'])!.value,
      montantGarantie: this.editForm.get(['montantGarantie'])!.value,
      montantTVA: this.editForm.get(['montantTVA'])!.value,
      montantDouane: this.editForm.get(['montantDouane'])!.value,
      montantTTC: this.editForm.get(['montantTTC'])!.value,
      rabais: this.editForm.get(['rabais'])!.value,
      rang: this.editForm.get(['rang'])!.value,
      scoreTechnique: this.editForm.get(['scoreTechnique'])!.value,
      scoreFinancier: this.editForm.get(['scoreFinancier'])!.value,
      prixEvalue: this.editForm.get(['prixEvalue'])!.value,
      scoreTechniquePondere: this.editForm.get(['scoreTechniquePondere'])!.value,
      scoreFinancierPondere: this.editForm.get(['scoreFinancierPondere'])!.value,
      scoreFinal: this.editForm.get(['scoreFinal'])!.value,
      dateDepot: this.editForm.get(['dateDepot'])!.value,
      classementGeneral: this.editForm.get(['classementGeneral'])!.value,
      classemenTechnique: this.editForm.get(['classemenTechnique'])!.value,
      etatPreselection: this.editForm.get(['etatPreselection'])!.value,
      etatExamenPreliminaire: this.editForm.get(['etatExamenPreliminaire'])!.value,
      critereQualification: this.editForm.get(['critereQualification'])!.value,
      attributaireProvisoire: this.editForm.get(['attributaireProvisoire'])!.value,
      plilValide: this.editForm.get(['plilValide'])!.value,
      lettreSoumission: this.editForm.get(['lettreSoumission'])!.value,
      offreTechnique: this.editForm.get(['offreTechnique'])!.value,
      offreFinanciere: this.editForm.get(['offreFinanciere'])!.value,
      plinumero: this.editForm.get(['plinumero'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
      monnaieOffreId: this.editForm.get(['monnaieOffreId'])!.value,
      naturePrixId: this.editForm.get(['naturePrixId'])!.value,
      paysId: this.editForm.get(['paysId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILotsSoumissionnaire>>): void {
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
