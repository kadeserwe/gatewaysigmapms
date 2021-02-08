export interface INaturePrix {
  id?: number;
  natCode?: string;
  natLibelle?: string;
}

export class NaturePrix implements INaturePrix {
  constructor(public id?: number, public natCode?: string, public natLibelle?: string) {}
}
