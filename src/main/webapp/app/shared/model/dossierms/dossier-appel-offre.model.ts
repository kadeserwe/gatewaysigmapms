import { Moment } from 'moment';

export interface IDossierAppelOffre {
  id?: number;
  dosLieuDepotDossier?: string;
  dosReference?: string;
  dosAdresseRetrait?: string;
  dosConditionAcquistion?: string;
  dosAllotissement?: string;
  dosLotDivisible?: string;
  dosCommentaireMiseValidation?: string;
  dosCommentaireValidation?: string;
  dosFichierValidation?: string;
  dosCommentairePublicationProvisoire?: string;
  dosCommentairesPublicationDefinitive?: string;
  dosCommentairePublication?: string;
  dosCommentSignature?: string;
  dosRefSignature?: string;
  dosCommentApprobation?: string;
  dosRefApprobation?: string;
  dosDateDebutRetrait?: Moment;
  dosDateLimiteDepot?: Moment;
  dosHeurelimitedepot?: Moment;
  dosDateCreation?: Moment;
  dosDateRejet?: Moment;
  dosDatePublicationProvisoire?: Moment;
  dosDatePublicationDefinitive?: Moment;
  dosDateDemandePublication?: Moment;
  dosCommentaireDemandePublication?: string;
  dosFichierDemandePublication?: string;
  dosLieuAcquisitionDAO?: string;
  telechargerDAO?: number;
  dosDateOuvertueDesplis?: Moment;
  dosHeureOuvertureDesPlis?: Moment;
  dosDatePublication?: Moment;
  dosFicchierPublication?: string;
  autiriteId?: number;
  dosMontantGarantie?: number;
  dosMontantDao?: number;
  dosMontantEstime?: number;
  dosIncidents?: string;
  dateRemiseDossierTechnique?: Moment;
  dateLimiteDossierTechnique?: Moment;
  commentaireDelaiTechnique?: string;
  dosDateMiseValidationAttribution?: Moment;
  dosEtatValidation?: string;
  dosBordereau?: string;
  dosFichierMiseValidationPrequalif?: string;
  dosfichierSignature?: string;
  dosDateSignature?: Moment;
  dosDateMiseValidationSignature?: Moment;
  dosDateAttributionDefinitive?: Moment;
  dosDateDemandeApprobation?: Moment;
  dosCommentDemandeApprobation?: string;
  fichierApprobation?: string;
  dosDateNotification?: Moment;
  dosCommentNotification?: string;
  dosRefNotification?: string;
  dosFichierNotification?: string;
  dosCommentaireAttributionDefinitive?: string;
  appelOffreId?: number;
}

export class DossierAppelOffre implements IDossierAppelOffre {
  constructor(
    public id?: number,
    public dosLieuDepotDossier?: string,
    public dosReference?: string,
    public dosAdresseRetrait?: string,
    public dosConditionAcquistion?: string,
    public dosAllotissement?: string,
    public dosLotDivisible?: string,
    public dosCommentaireMiseValidation?: string,
    public dosCommentaireValidation?: string,
    public dosFichierValidation?: string,
    public dosCommentairePublicationProvisoire?: string,
    public dosCommentairesPublicationDefinitive?: string,
    public dosCommentairePublication?: string,
    public dosCommentSignature?: string,
    public dosRefSignature?: string,
    public dosCommentApprobation?: string,
    public dosRefApprobation?: string,
    public dosDateDebutRetrait?: Moment,
    public dosDateLimiteDepot?: Moment,
    public dosHeurelimitedepot?: Moment,
    public dosDateCreation?: Moment,
    public dosDateRejet?: Moment,
    public dosDatePublicationProvisoire?: Moment,
    public dosDatePublicationDefinitive?: Moment,
    public dosDateDemandePublication?: Moment,
    public dosCommentaireDemandePublication?: string,
    public dosFichierDemandePublication?: string,
    public dosLieuAcquisitionDAO?: string,
    public telechargerDAO?: number,
    public dosDateOuvertueDesplis?: Moment,
    public dosHeureOuvertureDesPlis?: Moment,
    public dosDatePublication?: Moment,
    public dosFicchierPublication?: string,
    public autiriteId?: number,
    public dosMontantGarantie?: number,
    public dosMontantDao?: number,
    public dosMontantEstime?: number,
    public dosIncidents?: string,
    public dateRemiseDossierTechnique?: Moment,
    public dateLimiteDossierTechnique?: Moment,
    public commentaireDelaiTechnique?: string,
    public dosDateMiseValidationAttribution?: Moment,
    public dosEtatValidation?: string,
    public dosBordereau?: string,
    public dosFichierMiseValidationPrequalif?: string,
    public dosfichierSignature?: string,
    public dosDateSignature?: Moment,
    public dosDateMiseValidationSignature?: Moment,
    public dosDateAttributionDefinitive?: Moment,
    public dosDateDemandeApprobation?: Moment,
    public dosCommentDemandeApprobation?: string,
    public fichierApprobation?: string,
    public dosDateNotification?: Moment,
    public dosCommentNotification?: string,
    public dosRefNotification?: string,
    public dosFichierNotification?: string,
    public dosCommentaireAttributionDefinitive?: string,
    public appelOffreId?: number
  ) {}
}
