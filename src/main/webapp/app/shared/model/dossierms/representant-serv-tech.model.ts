import { Moment } from 'moment';

export interface IRepresentantServTech {
  id?: number;
  representant?: string;
  qualite?: string;
  presence?: string;
  dateConvocation?: Moment;
  etape?: number;
  dossierAppelOffreId?: number;
}

export class RepresentantServTech implements IRepresentantServTech {
  constructor(
    public id?: number,
    public representant?: string,
    public qualite?: string,
    public presence?: string,
    public dateConvocation?: Moment,
    public etape?: number,
    public dossierAppelOffreId?: number
  ) {}
}
