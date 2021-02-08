export interface IDossiersPiece {
  id?: number;
  dossierAppelOffreId?: number;
  pieceId?: number;
}

export class DossiersPiece implements IDossiersPiece {
  constructor(public id?: number, public dossierAppelOffreId?: number, public pieceId?: number) {}
}
