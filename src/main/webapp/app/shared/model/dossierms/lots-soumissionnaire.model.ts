import { Moment } from 'moment';

export interface ILotsSoumissionnaire {
  id?: number;
  raisonsociale?: string;
  numero?: string;
  email?: string;
  commentaire?: string;
  lotsoumis?: string;
  lotrecu?: string;
  libelle?: string;
  elimine?: string;
  montantOffert?: number;
  montantDefinitif?: number;
  montantGarantie?: number;
  montantTVA?: number;
  montantDouane?: number;
  montantTTC?: number;
  rabais?: number;
  rang?: number;
  scoreTechnique?: number;
  scoreFinancier?: number;
  prixEvalue?: number;
  scoreTechniquePondere?: number;
  scoreFinancierPondere?: number;
  scoreFinal?: number;
  dateDepot?: Moment;
  classementGeneral?: number;
  classemenTechnique?: number;
  etatPreselection?: number;
  etatExamenPreliminaire?: number;
  critereQualification?: number;
  attributaireProvisoire?: number;
  plilValide?: number;
  lettreSoumission?: number;
  offreTechnique?: number;
  offreFinanciere?: number;
  plinumero?: number;
  dossierAppelOffreId?: number;
  lotId?: number;
  plisOuvertureId?: number;
  monnaieOffreId?: number;
  naturePrixId?: number;
  paysId?: number;
}

export class LotsSoumissionnaire implements ILotsSoumissionnaire {
  constructor(
    public id?: number,
    public raisonsociale?: string,
    public numero?: string,
    public email?: string,
    public commentaire?: string,
    public lotsoumis?: string,
    public lotrecu?: string,
    public libelle?: string,
    public elimine?: string,
    public montantOffert?: number,
    public montantDefinitif?: number,
    public montantGarantie?: number,
    public montantTVA?: number,
    public montantDouane?: number,
    public montantTTC?: number,
    public rabais?: number,
    public rang?: number,
    public scoreTechnique?: number,
    public scoreFinancier?: number,
    public prixEvalue?: number,
    public scoreTechniquePondere?: number,
    public scoreFinancierPondere?: number,
    public scoreFinal?: number,
    public dateDepot?: Moment,
    public classementGeneral?: number,
    public classemenTechnique?: number,
    public etatPreselection?: number,
    public etatExamenPreliminaire?: number,
    public critereQualification?: number,
    public attributaireProvisoire?: number,
    public plilValide?: number,
    public lettreSoumission?: number,
    public offreTechnique?: number,
    public offreFinanciere?: number,
    public plinumero?: number,
    public dossierAppelOffreId?: number,
    public lotId?: number,
    public plisOuvertureId?: number,
    public monnaieOffreId?: number,
    public naturePrixId?: number,
    public paysId?: number
  ) {}
}
