import { Moment } from 'moment';

export interface IAvisAttribution {
  id?: number;
  attriObjet?: string;
  attriType?: string;
  attritexte?: string;
  attriRef?: string;
  attrifichier?: string;
  attriRaisonsocial?: string;
  attriDate?: Moment;
  attridatepublication?: Moment;
  attriPub?: number;
  autiriteId?: number;
  dossierAppelOffreId?: number;
  lotId?: number;
}

export class AvisAttribution implements IAvisAttribution {
  constructor(
    public id?: number,
    public attriObjet?: string,
    public attriType?: string,
    public attritexte?: string,
    public attriRef?: string,
    public attrifichier?: string,
    public attriRaisonsocial?: string,
    public attriDate?: Moment,
    public attridatepublication?: Moment,
    public attriPub?: number,
    public autiriteId?: number,
    public dossierAppelOffreId?: number,
    public lotId?: number
  ) {}
}
