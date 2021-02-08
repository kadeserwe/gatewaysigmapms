export interface IGarantiesDossier {
  id?: number;
  pourcentage?: number;
  montant?: number;
  autiriteId?: number;
  dossierAppelOffreId?: number;
  lotId?: number;
  piecesRecusId?: number;
}

export class GarantiesDossier implements IGarantiesDossier {
  constructor(
    public id?: number,
    public pourcentage?: number,
    public montant?: number,
    public autiriteId?: number,
    public dossierAppelOffreId?: number,
    public lotId?: number,
    public piecesRecusId?: number
  ) {}
}
