import { Moment } from 'moment';

export interface IHistoriqueAppelOffresAC {
  id?: number;
  histoacValidation?: string;
  histoacCommentaire?: string;
  histoacFichiervalidation?: string;
  histoacBorderau?: string;
  histoValidation?: string;
  histoCommentaire?: string;
  histoFichiervalidation?: string;
  daoFichier?: string;
  origine?: string;
  histoacDatevalidation?: Moment;
  histoacDatecreationdossier?: Moment;
  histoDatevalidation?: Moment;
  histoacAttribution?: number;
  histoacAc?: number;
  validerparNom?: string;
  validerparPrenom?: string;
  userId?: number;
  autiriteId?: number;
  dossierAppelOffreId?: number;
}

export class HistoriqueAppelOffresAC implements IHistoriqueAppelOffresAC {
  constructor(
    public id?: number,
    public histoacValidation?: string,
    public histoacCommentaire?: string,
    public histoacFichiervalidation?: string,
    public histoacBorderau?: string,
    public histoValidation?: string,
    public histoCommentaire?: string,
    public histoFichiervalidation?: string,
    public daoFichier?: string,
    public origine?: string,
    public histoacDatevalidation?: Moment,
    public histoacDatecreationdossier?: Moment,
    public histoDatevalidation?: Moment,
    public histoacAttribution?: number,
    public histoacAc?: number,
    public validerparNom?: string,
    public validerparPrenom?: string,
    public userId?: number,
    public autiriteId?: number,
    public dossierAppelOffreId?: number
  ) {}
}
