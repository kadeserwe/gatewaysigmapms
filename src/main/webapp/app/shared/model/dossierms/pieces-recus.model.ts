export interface IPiecesRecus {
  id?: number;
  libelle?: string;
  description?: string;
  garantie?: number;
}

export class PiecesRecus implements IPiecesRecus {
  constructor(public id?: number, public libelle?: string, public description?: string, public garantie?: number) {}
}
