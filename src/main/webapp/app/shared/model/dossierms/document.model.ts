import { Moment } from 'moment';

export interface IDocument {
  id?: number;
  typeDocument?: string;
  textPVOuverture?: string;
  nomFichier?: string;
  libelle?: string;
  reference?: string;
  objet?: string;
  origine?: string;
  lieuAcquisitionDAO?: string;
  fichierDemandePublication?: string;
  fichierDC?: string;
  fichierAR?: string;
  date?: Moment;
  heure?: Moment;
  dateDemandePublication?: Moment;
  dateLimiteDepot?: Moment;
  heureLimiteDepot?: Moment;
  dateOuvertueDesplis?: Moment;
  heureOuvertureDesPlis?: Moment;
  autoriteId?: number;
  dossierAppelOffreId?: number;
  appelOffreId?: number;
  plisOuvertureId?: number;
  lotId?: number;
}

export class Document implements IDocument {
  constructor(
    public id?: number,
    public typeDocument?: string,
    public textPVOuverture?: string,
    public nomFichier?: string,
    public libelle?: string,
    public reference?: string,
    public objet?: string,
    public origine?: string,
    public lieuAcquisitionDAO?: string,
    public fichierDemandePublication?: string,
    public fichierDC?: string,
    public fichierAR?: string,
    public date?: Moment,
    public heure?: Moment,
    public dateDemandePublication?: Moment,
    public dateLimiteDepot?: Moment,
    public heureLimiteDepot?: Moment,
    public dateOuvertueDesplis?: Moment,
    public heureOuvertureDesPlis?: Moment,
    public autoriteId?: number,
    public dossierAppelOffreId?: number,
    public appelOffreId?: number,
    public plisOuvertureId?: number,
    public lotId?: number
  ) {}
}
