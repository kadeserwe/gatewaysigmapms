import { Moment } from 'moment';

export interface IMembresCommissionsMarche {
  id?: number;
  nom?: string;
  prenom?: string;
  fonction?: string;
  telephone?: string;
  email?: string;
  gestion?: string;
  statut?: string;
  typeMembre?: string;
  arrete?: string;
  fichierArrete?: string;
  photoContentType?: string;
  photo?: any;
  type?: string;
  origine?: string;
  etapePI?: number;
  flagPresident?: number;
  actif?: number;
  position?: number;
  reconduit?: number;
  autoriteId?: number;
  membre?: number;
  dateArrete?: Moment;
}

export class MembresCommissionsMarche implements IMembresCommissionsMarche {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public fonction?: string,
    public telephone?: string,
    public email?: string,
    public gestion?: string,
    public statut?: string,
    public typeMembre?: string,
    public arrete?: string,
    public fichierArrete?: string,
    public photoContentType?: string,
    public photo?: any,
    public type?: string,
    public origine?: string,
    public etapePI?: number,
    public flagPresident?: number,
    public actif?: number,
    public position?: number,
    public reconduit?: number,
    public autoriteId?: number,
    public membre?: number,
    public dateArrete?: Moment
  ) {}
}
