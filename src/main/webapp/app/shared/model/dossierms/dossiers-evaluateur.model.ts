import { Moment } from 'moment';

export interface IDossiersEvaluateur {
  id?: number;
  commission?: string;
  nom?: string;
  prenom?: string;
  telephone?: number;
  email?: string;
  fonction?: string;
  dateRemise?: Moment;
  dateLimite?: Moment;
  dossierAppelOffreId?: number;
}

export class DossiersEvaluateur implements IDossiersEvaluateur {
  constructor(
    public id?: number,
    public commission?: string,
    public nom?: string,
    public prenom?: string,
    public telephone?: number,
    public email?: string,
    public fonction?: string,
    public dateRemise?: Moment,
    public dateLimite?: Moment,
    public dossierAppelOffreId?: number
  ) {}
}
