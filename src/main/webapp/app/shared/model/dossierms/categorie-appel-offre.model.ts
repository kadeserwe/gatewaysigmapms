export interface ICategorieAppelOffre {
  id?: number;
  libelle?: string;
  niveau?: number;
}

export class CategorieAppelOffre implements ICategorieAppelOffre {
  constructor(public id?: number, public libelle?: string, public niveau?: number) {}
}
