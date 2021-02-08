import { Moment } from 'moment';

export interface IAppelOffre {
  id?: number;
  apoDatecreation?: Moment;
  apoDateAutorisation?: Moment;
  apoDateDemandeAutorisation?: Moment;
  apoDateRejet?: Moment;
  apoDateMiseAutorisation?: Moment;
  dateStopProcedure?: Moment;
  dateAffectationDossier?: Moment;
  apoDatePVOuverturepli?: Moment;
  apoDateVersement?: Moment;
  datePubListeRestreinte?: Moment;
  apoProjet?: string;
  apoObjet?: string;
  apoReference?: string;
  apoNumeroPretCredit?: string;
  apoCommentaireAutorisation?: string;
  apoFichierMiseAutorisation?: string;
  numeroMarche?: string;
  motifStopProcedure?: string;
  apoFichierPV?: string;
  apoFichierValidation?: string;
  apoAutorisationPrealable?: string;
  apoFichierAutorisationPrealable?: string;
  apoReferenceRequeteAc?: string;
  apoRapportSpecial?: string;
  apoReferenceCommunication?: string;
  apoReleveConseil?: string;
  apoFichierRapportSpecial?: string;
  apoFichierReleveConseil?: string;
  pubListeRestreinte?: string;
  fichierListeRestreinte?: string;
  apoMontantEstime?: number;
  apoMontantVersement?: number;
  apoResponsableDCMP?: number;
  etatSeuil?: number;
  apoStatut?: string;
  apoValide?: string;
  apoNbreDAO?: number;
  apoNbreDC?: number;
  apoEtatValidation?: number;
  autiriteId?: number;
  realisationId?: number;
  modepassationId?: number;
  typemarcheId?: number;
  modeselectionId?: number;
  categorieAppelOffreId?: number;
}

export class AppelOffre implements IAppelOffre {
  constructor(
    public id?: number,
    public apoDatecreation?: Moment,
    public apoDateAutorisation?: Moment,
    public apoDateDemandeAutorisation?: Moment,
    public apoDateRejet?: Moment,
    public apoDateMiseAutorisation?: Moment,
    public dateStopProcedure?: Moment,
    public dateAffectationDossier?: Moment,
    public apoDatePVOuverturepli?: Moment,
    public apoDateVersement?: Moment,
    public datePubListeRestreinte?: Moment,
    public apoProjet?: string,
    public apoObjet?: string,
    public apoReference?: string,
    public apoNumeroPretCredit?: string,
    public apoCommentaireAutorisation?: string,
    public apoFichierMiseAutorisation?: string,
    public numeroMarche?: string,
    public motifStopProcedure?: string,
    public apoFichierPV?: string,
    public apoFichierValidation?: string,
    public apoAutorisationPrealable?: string,
    public apoFichierAutorisationPrealable?: string,
    public apoReferenceRequeteAc?: string,
    public apoRapportSpecial?: string,
    public apoReferenceCommunication?: string,
    public apoReleveConseil?: string,
    public apoFichierRapportSpecial?: string,
    public apoFichierReleveConseil?: string,
    public pubListeRestreinte?: string,
    public fichierListeRestreinte?: string,
    public apoMontantEstime?: number,
    public apoMontantVersement?: number,
    public apoResponsableDCMP?: number,
    public etatSeuil?: number,
    public apoStatut?: string,
    public apoValide?: string,
    public apoNbreDAO?: number,
    public apoNbreDC?: number,
    public apoEtatValidation?: number,
    public autiriteId?: number,
    public realisationId?: number,
    public modepassationId?: number,
    public typemarcheId?: number,
    public modeselectionId?: number,
    public categorieAppelOffreId?: number
  ) {}
}
