import { Moment } from 'moment';

export interface IObservateursIndependant {
  id?: number;
  representant?: string;
  qualite?: string;
  presence?: string;
  dateConvocation?: Moment;
  etape?: number;
  dossierAppelOffreId?: number;
}

export class ObservateursIndependant implements IObservateursIndependant {
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
