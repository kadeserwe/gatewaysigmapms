export interface IDossiersCommissionsMarche {
  id?: number;
  flagPresenceEvaluation?: number;
  etapePI?: number;
  dossierAppelOffreId?: number;
  membresCommissionsMarcheId?: number;
}

export class DossiersCommissionsMarche implements IDossiersCommissionsMarche {
  constructor(
    public id?: number,
    public flagPresenceEvaluation?: number,
    public etapePI?: number,
    public dossierAppelOffreId?: number,
    public membresCommissionsMarcheId?: number
  ) {}
}
