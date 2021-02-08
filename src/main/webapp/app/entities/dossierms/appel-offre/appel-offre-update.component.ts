import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAppelOffre, AppelOffre } from 'app/shared/model/dossierms/appel-offre.model';
import { AppelOffreService } from './appel-offre.service';
import { ICategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';
import { CategorieAppelOffreService } from 'app/entities/dossierms/categorie-appel-offre/categorie-appel-offre.service';

@Component({
  selector: 'jhi-appel-offre-update',
  templateUrl: './appel-offre-update.component.html',
})
export class AppelOffreUpdateComponent implements OnInit {
  isSaving = false;
  categorieappeloffres: ICategorieAppelOffre[] = [];
  apoDatecreationDp: any;
  apoDateAutorisationDp: any;
  apoDateDemandeAutorisationDp: any;
  apoDateRejetDp: any;
  apoDateMiseAutorisationDp: any;
  dateStopProcedureDp: any;
  dateAffectationDossierDp: any;
  apoDatePVOuverturepliDp: any;
  apoDateVersementDp: any;
  datePubListeRestreinteDp: any;

  editForm = this.fb.group({
    id: [],
    apoDatecreation: [null, [Validators.required]],
    apoDateAutorisation: [],
    apoDateDemandeAutorisation: [],
    apoDateRejet: [],
    apoDateMiseAutorisation: [],
    dateStopProcedure: [],
    dateAffectationDossier: [],
    apoDatePVOuverturepli: [],
    apoDateVersement: [],
    datePubListeRestreinte: [],
    apoProjet: [],
    apoObjet: [],
    apoReference: [null, [Validators.required]],
    apoNumeroPretCredit: [],
    apoCommentaireAutorisation: [],
    apoFichierMiseAutorisation: [],
    numeroMarche: [],
    motifStopProcedure: [],
    apoFichierPV: [],
    apoFichierValidation: [],
    apoAutorisationPrealable: [],
    apoFichierAutorisationPrealable: [],
    apoReferenceRequeteAc: [],
    apoRapportSpecial: [],
    apoReferenceCommunication: [],
    apoReleveConseil: [],
    apoFichierRapportSpecial: [],
    apoFichierReleveConseil: [],
    pubListeRestreinte: [],
    fichierListeRestreinte: [],
    apoMontantEstime: [],
    apoMontantVersement: [],
    apoResponsableDCMP: [],
    etatSeuil: [],
    apoStatut: [],
    apoValide: [],
    apoNbreDAO: [],
    apoNbreDC: [],
    apoEtatValidation: [],
    autiriteId: [null, [Validators.required]],
    realisationId: [null, [Validators.required]],
    modepassationId: [],
    typemarcheId: [],
    modeselectionId: [],
    categorieAppelOffreId: [],
  });

  constructor(
    protected appelOffreService: AppelOffreService,
    protected categorieAppelOffreService: CategorieAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ appelOffre }) => {
      this.updateForm(appelOffre);

      this.categorieAppelOffreService
        .query()
        .subscribe((res: HttpResponse<ICategorieAppelOffre[]>) => (this.categorieappeloffres = res.body || []));
    });
  }

  updateForm(appelOffre: IAppelOffre): void {
    this.editForm.patchValue({
      id: appelOffre.id,
      apoDatecreation: appelOffre.apoDatecreation,
      apoDateAutorisation: appelOffre.apoDateAutorisation,
      apoDateDemandeAutorisation: appelOffre.apoDateDemandeAutorisation,
      apoDateRejet: appelOffre.apoDateRejet,
      apoDateMiseAutorisation: appelOffre.apoDateMiseAutorisation,
      dateStopProcedure: appelOffre.dateStopProcedure,
      dateAffectationDossier: appelOffre.dateAffectationDossier,
      apoDatePVOuverturepli: appelOffre.apoDatePVOuverturepli,
      apoDateVersement: appelOffre.apoDateVersement,
      datePubListeRestreinte: appelOffre.datePubListeRestreinte,
      apoProjet: appelOffre.apoProjet,
      apoObjet: appelOffre.apoObjet,
      apoReference: appelOffre.apoReference,
      apoNumeroPretCredit: appelOffre.apoNumeroPretCredit,
      apoCommentaireAutorisation: appelOffre.apoCommentaireAutorisation,
      apoFichierMiseAutorisation: appelOffre.apoFichierMiseAutorisation,
      numeroMarche: appelOffre.numeroMarche,
      motifStopProcedure: appelOffre.motifStopProcedure,
      apoFichierPV: appelOffre.apoFichierPV,
      apoFichierValidation: appelOffre.apoFichierValidation,
      apoAutorisationPrealable: appelOffre.apoAutorisationPrealable,
      apoFichierAutorisationPrealable: appelOffre.apoFichierAutorisationPrealable,
      apoReferenceRequeteAc: appelOffre.apoReferenceRequeteAc,
      apoRapportSpecial: appelOffre.apoRapportSpecial,
      apoReferenceCommunication: appelOffre.apoReferenceCommunication,
      apoReleveConseil: appelOffre.apoReleveConseil,
      apoFichierRapportSpecial: appelOffre.apoFichierRapportSpecial,
      apoFichierReleveConseil: appelOffre.apoFichierReleveConseil,
      pubListeRestreinte: appelOffre.pubListeRestreinte,
      fichierListeRestreinte: appelOffre.fichierListeRestreinte,
      apoMontantEstime: appelOffre.apoMontantEstime,
      apoMontantVersement: appelOffre.apoMontantVersement,
      apoResponsableDCMP: appelOffre.apoResponsableDCMP,
      etatSeuil: appelOffre.etatSeuil,
      apoStatut: appelOffre.apoStatut,
      apoValide: appelOffre.apoValide,
      apoNbreDAO: appelOffre.apoNbreDAO,
      apoNbreDC: appelOffre.apoNbreDC,
      apoEtatValidation: appelOffre.apoEtatValidation,
      autiriteId: appelOffre.autiriteId,
      realisationId: appelOffre.realisationId,
      modepassationId: appelOffre.modepassationId,
      typemarcheId: appelOffre.typemarcheId,
      modeselectionId: appelOffre.modeselectionId,
      categorieAppelOffreId: appelOffre.categorieAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const appelOffre = this.createFromForm();
    if (appelOffre.id !== undefined) {
      this.subscribeToSaveResponse(this.appelOffreService.update(appelOffre));
    } else {
      this.subscribeToSaveResponse(this.appelOffreService.create(appelOffre));
    }
  }

  private createFromForm(): IAppelOffre {
    return {
      ...new AppelOffre(),
      id: this.editForm.get(['id'])!.value,
      apoDatecreation: this.editForm.get(['apoDatecreation'])!.value,
      apoDateAutorisation: this.editForm.get(['apoDateAutorisation'])!.value,
      apoDateDemandeAutorisation: this.editForm.get(['apoDateDemandeAutorisation'])!.value,
      apoDateRejet: this.editForm.get(['apoDateRejet'])!.value,
      apoDateMiseAutorisation: this.editForm.get(['apoDateMiseAutorisation'])!.value,
      dateStopProcedure: this.editForm.get(['dateStopProcedure'])!.value,
      dateAffectationDossier: this.editForm.get(['dateAffectationDossier'])!.value,
      apoDatePVOuverturepli: this.editForm.get(['apoDatePVOuverturepli'])!.value,
      apoDateVersement: this.editForm.get(['apoDateVersement'])!.value,
      datePubListeRestreinte: this.editForm.get(['datePubListeRestreinte'])!.value,
      apoProjet: this.editForm.get(['apoProjet'])!.value,
      apoObjet: this.editForm.get(['apoObjet'])!.value,
      apoReference: this.editForm.get(['apoReference'])!.value,
      apoNumeroPretCredit: this.editForm.get(['apoNumeroPretCredit'])!.value,
      apoCommentaireAutorisation: this.editForm.get(['apoCommentaireAutorisation'])!.value,
      apoFichierMiseAutorisation: this.editForm.get(['apoFichierMiseAutorisation'])!.value,
      numeroMarche: this.editForm.get(['numeroMarche'])!.value,
      motifStopProcedure: this.editForm.get(['motifStopProcedure'])!.value,
      apoFichierPV: this.editForm.get(['apoFichierPV'])!.value,
      apoFichierValidation: this.editForm.get(['apoFichierValidation'])!.value,
      apoAutorisationPrealable: this.editForm.get(['apoAutorisationPrealable'])!.value,
      apoFichierAutorisationPrealable: this.editForm.get(['apoFichierAutorisationPrealable'])!.value,
      apoReferenceRequeteAc: this.editForm.get(['apoReferenceRequeteAc'])!.value,
      apoRapportSpecial: this.editForm.get(['apoRapportSpecial'])!.value,
      apoReferenceCommunication: this.editForm.get(['apoReferenceCommunication'])!.value,
      apoReleveConseil: this.editForm.get(['apoReleveConseil'])!.value,
      apoFichierRapportSpecial: this.editForm.get(['apoFichierRapportSpecial'])!.value,
      apoFichierReleveConseil: this.editForm.get(['apoFichierReleveConseil'])!.value,
      pubListeRestreinte: this.editForm.get(['pubListeRestreinte'])!.value,
      fichierListeRestreinte: this.editForm.get(['fichierListeRestreinte'])!.value,
      apoMontantEstime: this.editForm.get(['apoMontantEstime'])!.value,
      apoMontantVersement: this.editForm.get(['apoMontantVersement'])!.value,
      apoResponsableDCMP: this.editForm.get(['apoResponsableDCMP'])!.value,
      etatSeuil: this.editForm.get(['etatSeuil'])!.value,
      apoStatut: this.editForm.get(['apoStatut'])!.value,
      apoValide: this.editForm.get(['apoValide'])!.value,
      apoNbreDAO: this.editForm.get(['apoNbreDAO'])!.value,
      apoNbreDC: this.editForm.get(['apoNbreDC'])!.value,
      apoEtatValidation: this.editForm.get(['apoEtatValidation'])!.value,
      autiriteId: this.editForm.get(['autiriteId'])!.value,
      realisationId: this.editForm.get(['realisationId'])!.value,
      modepassationId: this.editForm.get(['modepassationId'])!.value,
      typemarcheId: this.editForm.get(['typemarcheId'])!.value,
      modeselectionId: this.editForm.get(['modeselectionId'])!.value,
      categorieAppelOffreId: this.editForm.get(['categorieAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAppelOffre>>): void {
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

  trackById(index: number, item: ICategorieAppelOffre): any {
    return item.id;
  }
}
