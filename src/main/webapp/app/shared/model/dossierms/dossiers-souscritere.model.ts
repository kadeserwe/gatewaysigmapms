export interface IDossiersSouscritere {
  id?: number;
  note?: number;
  dossierAppelOffreId?: number;
  lotId?: number;
  critereId?: number;
}

export class DossiersSouscritere implements IDossiersSouscritere {
  constructor(
    public id?: number,
    public note?: number,
    public dossierAppelOffreId?: number,
    public lotId?: number,
    public critereId?: number
  ) {}
}
