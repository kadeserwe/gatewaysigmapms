import { Moment } from 'moment';

export interface IPlisOuverture {
  id?: number;
  raisonSociale?: string;
  adresseMail?: string;
  commentaire?: string;
  rang?: string;
  ninea?: string;
  natCode?: string;
  monCode?: string;
  pvOffreFinanciere?: string;
  negociation?: string;
  montantOffert?: number;
  scoreFinancier?: number;
  prixEvalue?: number;
  scoreTechniquePondere?: number;
  scoreFinancierPondere?: number;
  scoreFinal?: number;
  montantDefinitif?: number;
  montantTVA?: number;
  montantDouane?: number;
  dateDepot?: Moment;
  heuredepot?: Moment;
  rabais?: number;
  scoreTechnique?: number;
  seuilAtteint?: number;
  classemenTechnique?: number;
  classementGeneral?: number;
  candidatRestreintID?: number;
  etatPreselection?: number;
  etatExamenPreliminaire?: number;
  critereQualification?: number;
  attributaireProvisoire?: number;
  offreTechnique?: number;
  offreFinanciere?: number;
  lettreSoumission?: number;
  valide?: number;
  numero?: number;
  garantie?: number;
  pieceRequise?: number;
  observationsOffres?: string;
  observationsCandidats?: string;
  modeReception?: string;
  notifie?: string;
  signatureOffre?: string;
  exhaustivite?: string;
  garantieSoumission?: string;
  conformite?: string;
  critereProvenance?: string;
  notePreselectionne?: number;
  autoriteId?: number;
  ajustement?: number;
  dossierAppelOffreId?: number;
  retraitRegistreDAOId?: number;
  fournisseurId?: number;
}

export class PlisOuverture implements IPlisOuverture {
  constructor(
    public id?: number,
    public raisonSociale?: string,
    public adresseMail?: string,
    public commentaire?: string,
    public rang?: string,
    public ninea?: string,
    public natCode?: string,
    public monCode?: string,
    public pvOffreFinanciere?: string,
    public negociation?: string,
    public montantOffert?: number,
    public scoreFinancier?: number,
    public prixEvalue?: number,
    public scoreTechniquePondere?: number,
    public scoreFinancierPondere?: number,
    public scoreFinal?: number,
    public montantDefinitif?: number,
    public montantTVA?: number,
    public montantDouane?: number,
    public dateDepot?: Moment,
    public heuredepot?: Moment,
    public rabais?: number,
    public scoreTechnique?: number,
    public seuilAtteint?: number,
    public classemenTechnique?: number,
    public classementGeneral?: number,
    public candidatRestreintID?: number,
    public etatPreselection?: number,
    public etatExamenPreliminaire?: number,
    public critereQualification?: number,
    public attributaireProvisoire?: number,
    public offreTechnique?: number,
    public offreFinanciere?: number,
    public lettreSoumission?: number,
    public valide?: number,
    public numero?: number,
    public garantie?: number,
    public pieceRequise?: number,
    public observationsOffres?: string,
    public observationsCandidats?: string,
    public modeReception?: string,
    public notifie?: string,
    public signatureOffre?: string,
    public exhaustivite?: string,
    public garantieSoumission?: string,
    public conformite?: string,
    public critereProvenance?: string,
    public notePreselectionne?: number,
    public autoriteId?: number,
    public ajustement?: number,
    public dossierAppelOffreId?: number,
    public retraitRegistreDAOId?: number,
    public fournisseurId?: number
  ) {}
}
