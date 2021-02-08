export interface IGarantiesSoumissionnaire {
  id?: number;
  fournie?: string;
  libelle?: string;
  observations?: string;
  libellelot?: string;
  montant?: number;
  dossierAppelOffreId?: number;
  garantiesDossierId?: number;
  plisOuvertureId?: number;
  naturesGarantieId?: number;
}

export class GarantiesSoumissionnaire implements IGarantiesSoumissionnaire {
  constructor(
    public id?: number,
    public fournie?: string,
    public libelle?: string,
    public observations?: string,
    public libellelot?: string,
    public montant?: number,
    public dossierAppelOffreId?: number,
    public garantiesDossierId?: number,
    public plisOuvertureId?: number,
    public naturesGarantieId?: number
  ) {}
}
