import { Moment } from 'moment';

export interface IRetraitRegistreDAO {
  id?: number;
  nomSoumissionnaire?: string;
  telephone?: string;
  email?: string;
  modePaiement?: string;
  ninea?: string;
  montantVerse?: number;
  dateRetrait?: Moment;
  dossierAppelOffreId?: number;
  fournisseurId?: number;
  paysId?: number;
}

export class RetraitRegistreDAO implements IRetraitRegistreDAO {
  constructor(
    public id?: number,
    public nomSoumissionnaire?: string,
    public telephone?: string,
    public email?: string,
    public modePaiement?: string,
    public ninea?: string,
    public montantVerse?: number,
    public dateRetrait?: Moment,
    public dossierAppelOffreId?: number,
    public fournisseurId?: number,
    public paysId?: number
  ) {}
}
