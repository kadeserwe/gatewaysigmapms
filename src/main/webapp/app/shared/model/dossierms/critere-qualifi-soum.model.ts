export interface ICritereQualifiSoum {
  id?: number;
  conforme?: number;
  libelle?: string;
  libelleLot?: string;
  dossierAppelOffreId?: number;
  plisOuvertureId?: number;
  lotId?: number;
  dossiersSosuscritereId?: number;
}

export class CritereQualifiSoum implements ICritereQualifiSoum {
  constructor(
    public id?: number,
    public conforme?: number,
    public libelle?: string,
    public libelleLot?: string,
    public dossierAppelOffreId?: number,
    public plisOuvertureId?: number,
    public lotId?: number,
    public dossiersSosuscritereId?: number
  ) {}
}
