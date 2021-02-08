export interface ILot {
  id?: number;
  libelle?: string;
  numero?: string;
  commentaire?: string;
  montant?: number;
  montantdao?: number;
  dossierAppelOffreId?: number;
}

export class Lot implements ILot {
  constructor(
    public id?: number,
    public libelle?: string,
    public numero?: string,
    public commentaire?: string,
    public montant?: number,
    public montantdao?: number,
    public dossierAppelOffreId?: number
  ) {}
}
