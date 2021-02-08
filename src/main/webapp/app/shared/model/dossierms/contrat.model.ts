import { Moment } from 'moment';

export interface IContrat {
  id?: number;
  montant?: number;
  montantVerse?: number;
  conDateSignature?: Moment;
  conDateApprobation?: Moment;
  conDateNotification?: Moment;
  conDateRecepProvisoire?: Moment;
  conDateRecepDefinitive?: Moment;
  conDateOrdreDemarrage?: Moment;
  condateAttributionProvisoire?: Moment;
  condateAttributionDefinitive?: Moment;
  conDatePaiement?: Moment;
  dateDemandeImmatriculation?: Moment;
  dateImmatriculation?: Moment;
  datePub?: Moment;
  dateDemandePubContrat?: Moment;
  conDateCreation?: Moment;
  renouvcontDateDemandeAutorisation?: Moment;
  renouvcontDateautorisation?: Moment;
  renouvcontDateDemandeExamenJuridique?: Moment;
  renouvcontDateExamenJuridique?: Moment;
  renouvcontDateDemandeApprobation?: Moment;
  renouvcontDateApprobation?: Moment;
  renouvcontDateRejet?: Moment;
  renouvcontDateRetourApprobation?: Moment;
  conCommentSignature?: string;
  conRefSignature?: string;
  conCommentApprobation?: string;
  conRefApprobation?: string;
  conCommentNotification?: string;
  conRefNotification?: string;
  conFichierRecepProvisoire?: string;
  conCommentRecepProvisoire?: string;
  conFichierRecepDefinitive?: string;
  conCommentRecepDefinitive?: string;
  conFichierOrdreDemarrage?: string;
  conCommentOrdreDemarrage?: string;
  conRefAttributionProvisoire?: string;
  conCommentaireAttributionProvisoire?: string;
  conRefAttributionDefinitive?: string;
  conCommentaireAttributionDefinitive?: string;
  conStatut?: string;
  numMatriculation?: string;
  conCommentaireDmdmat?: string;
  conCommentaireMatriculation?: string;
  concSituation?: string;
  nationnalite?: string;
  fichierImmatricule?: string;
  fichierJustificatif?: string;
  commentairePub?: string;
  fichierContrat?: string;
  conCommentDemandePub?: string;
  renouvcontFichierAutorisationPrealable?: string;
  renouvcontFichierExamenJuridique?: string;
  renouvcontFichierContratSigne?: string;
  renouvcontFichierPageGarde?: string;
  renouvcontFichierPageSignature?: string;
  renouvcontFichierRapportMotivation?: string;
  renouvcontFichierProjetContrat?: string;
  renouvcontCommentAutorisation?: string;
  renouvcontCommentDemandeApprobation?: string;
  renouvcontCommentExamenJuridique?: string;
  autoriteId?: number;
  serviceId?: number;
  modePassationId?: number;
  typeMarcheId?: number;
  immatriculation?: number;
  delai?: number;
  renouvcontImmatStatut?: boolean;
  renouvcontPubStatut?: boolean;
  renouvcontAutorisationStatut?: number;
  renouvcontExamenJuridiqueStatut?: number;
  renouvcontApprobationStatut?: number;
  etatContratdebase?: string;
  libelleLot?: string;
  dossierAppelOffreId?: number;
  lotId?: number;
  fournisseurId?: number;
  plisOuvertureId?: number;
}

export class Contrat implements IContrat {
  constructor(
    public id?: number,
    public montant?: number,
    public montantVerse?: number,
    public conDateSignature?: Moment,
    public conDateApprobation?: Moment,
    public conDateNotification?: Moment,
    public conDateRecepProvisoire?: Moment,
    public conDateRecepDefinitive?: Moment,
    public conDateOrdreDemarrage?: Moment,
    public condateAttributionProvisoire?: Moment,
    public condateAttributionDefinitive?: Moment,
    public conDatePaiement?: Moment,
    public dateDemandeImmatriculation?: Moment,
    public dateImmatriculation?: Moment,
    public datePub?: Moment,
    public dateDemandePubContrat?: Moment,
    public conDateCreation?: Moment,
    public renouvcontDateDemandeAutorisation?: Moment,
    public renouvcontDateautorisation?: Moment,
    public renouvcontDateDemandeExamenJuridique?: Moment,
    public renouvcontDateExamenJuridique?: Moment,
    public renouvcontDateDemandeApprobation?: Moment,
    public renouvcontDateApprobation?: Moment,
    public renouvcontDateRejet?: Moment,
    public renouvcontDateRetourApprobation?: Moment,
    public conCommentSignature?: string,
    public conRefSignature?: string,
    public conCommentApprobation?: string,
    public conRefApprobation?: string,
    public conCommentNotification?: string,
    public conRefNotification?: string,
    public conFichierRecepProvisoire?: string,
    public conCommentRecepProvisoire?: string,
    public conFichierRecepDefinitive?: string,
    public conCommentRecepDefinitive?: string,
    public conFichierOrdreDemarrage?: string,
    public conCommentOrdreDemarrage?: string,
    public conRefAttributionProvisoire?: string,
    public conCommentaireAttributionProvisoire?: string,
    public conRefAttributionDefinitive?: string,
    public conCommentaireAttributionDefinitive?: string,
    public conStatut?: string,
    public numMatriculation?: string,
    public conCommentaireDmdmat?: string,
    public conCommentaireMatriculation?: string,
    public concSituation?: string,
    public nationnalite?: string,
    public fichierImmatricule?: string,
    public fichierJustificatif?: string,
    public commentairePub?: string,
    public fichierContrat?: string,
    public conCommentDemandePub?: string,
    public renouvcontFichierAutorisationPrealable?: string,
    public renouvcontFichierExamenJuridique?: string,
    public renouvcontFichierContratSigne?: string,
    public renouvcontFichierPageGarde?: string,
    public renouvcontFichierPageSignature?: string,
    public renouvcontFichierRapportMotivation?: string,
    public renouvcontFichierProjetContrat?: string,
    public renouvcontCommentAutorisation?: string,
    public renouvcontCommentDemandeApprobation?: string,
    public renouvcontCommentExamenJuridique?: string,
    public autoriteId?: number,
    public serviceId?: number,
    public modePassationId?: number,
    public typeMarcheId?: number,
    public immatriculation?: number,
    public delai?: number,
    public renouvcontImmatStatut?: boolean,
    public renouvcontPubStatut?: boolean,
    public renouvcontAutorisationStatut?: number,
    public renouvcontExamenJuridiqueStatut?: number,
    public renouvcontApprobationStatut?: number,
    public etatContratdebase?: string,
    public libelleLot?: string,
    public dossierAppelOffreId?: number,
    public lotId?: number,
    public fournisseurId?: number,
    public plisOuvertureId?: number
  ) {
    this.renouvcontImmatStatut = this.renouvcontImmatStatut || false;
    this.renouvcontPubStatut = this.renouvcontPubStatut || false;
  }
}
