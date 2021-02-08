export interface IPiecesPlisOuverture {
  id?: number;
  etat?: string;
  libelle?: string;
  etatConforme?: string;
  dossierAppelOffreId?: number;
  plisOuvertureId?: number;
  pieceId?: number;
}

export class PiecesPlisOuverture implements IPiecesPlisOuverture {
  constructor(
    public id?: number,
    public etat?: string,
    public libelle?: string,
    public etatConforme?: string,
    public dossierAppelOffreId?: number,
    public plisOuvertureId?: number,
    public pieceId?: number
  ) {}
}
