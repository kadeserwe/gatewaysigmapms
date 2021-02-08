export interface ICatFournisseur {
  id?: number;
  libelle?: string;
  description?: string;
}

export class CatFournisseur implements ICatFournisseur {
  constructor(public id?: number, public libelle?: string, public description?: string) {}
}
