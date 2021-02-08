export interface IPresenceOuverture {
  id?: number;
  supplementaire?: string;
  email?: string;
  telephone?: string;
  nomRepresentant?: string;
  prenomRepresentant?: string;
  nomStructure?: string;
  qualite?: string;
  etapePI?: number;
  dossierAppelOffreId?: number;
  appelOffreId?: number;
  plisOuvertureId?: number;
}

export class PresenceOuverture implements IPresenceOuverture {
  constructor(
    public id?: number,
    public supplementaire?: string,
    public email?: string,
    public telephone?: string,
    public nomRepresentant?: string,
    public prenomRepresentant?: string,
    public nomStructure?: string,
    public qualite?: string,
    public etapePI?: number,
    public dossierAppelOffreId?: number,
    public appelOffreId?: number,
    public plisOuvertureId?: number
  ) {}
}
