export interface IMonnaieOffre {
  id?: number;
  monCode?: string;
  monLibelle?: string;
}

export class MonnaieOffre implements IMonnaieOffre {
  constructor(public id?: number, public monCode?: string, public monLibelle?: string) {}
}
