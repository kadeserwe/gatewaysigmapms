export interface IDevise {
  id?: number;
  devTauxConversion?: number;
  dossierAppelOffreId?: number;
  monnaieOffreId?: number;
}

export class Devise implements IDevise {
  constructor(public id?: number, public devTauxConversion?: number, public dossierAppelOffreId?: number, public monnaieOffreId?: number) {}
}
