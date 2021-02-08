import { Moment } from 'moment';

export interface IAttribution {
  id?: number;
  referencePlandePassation?: string;
  referenceAvisGeneral?: string;
  attributaireProvisoire?: string;
  commentaire?: string;
  commentaireDefinitif?: string;
  nomFichierDef?: string;
  attriType?: string;
  montantMarche?: number;
  montantdefinitif?: number;
  moisExecution?: number;
  semaineExecution?: number;
  joursExecution?: number;
  datePublicationProvisoire?: Moment;
  datePublicationDefinitive?: Moment;
  dateattribution?: Moment;
  dossierAppelOffreId?: number;
  plisOuvertureId?: number;
  lotId?: number;
}

export class Attribution implements IAttribution {
  constructor(
    public id?: number,
    public referencePlandePassation?: string,
    public referenceAvisGeneral?: string,
    public attributaireProvisoire?: string,
    public commentaire?: string,
    public commentaireDefinitif?: string,
    public nomFichierDef?: string,
    public attriType?: string,
    public montantMarche?: number,
    public montantdefinitif?: number,
    public moisExecution?: number,
    public semaineExecution?: number,
    public joursExecution?: number,
    public datePublicationProvisoire?: Moment,
    public datePublicationDefinitive?: Moment,
    public dateattribution?: Moment,
    public dossierAppelOffreId?: number,
    public plisOuvertureId?: number,
    public lotId?: number
  ) {}
}
