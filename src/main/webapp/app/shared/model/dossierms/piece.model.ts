export interface IPiece {
  id?: number;
  libelle?: string;
  description?: string;
  codepiece?: string;
  localisation?: string;
  type?: number;
  autoriteId?: number;
}

export class Piece implements IPiece {
  constructor(
    public id?: number,
    public libelle?: string,
    public description?: string,
    public codepiece?: string,
    public localisation?: string,
    public type?: number,
    public autoriteId?: number
  ) {}
}
