export interface ICritere {
  id?: number;
  libelle?: string;
  autoriteId?: number;
}

export class Critere implements ICritere {
  constructor(public id?: number, public libelle?: string, public autoriteId?: number) {}
}
