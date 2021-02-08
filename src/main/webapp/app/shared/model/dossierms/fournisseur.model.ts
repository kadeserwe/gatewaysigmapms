export interface IFournisseur {
  id?: number;
  nom?: string;
  adresse?: string;
  email?: string;
  telephone?: number;
  numeroRegistreCommerce?: number;
  piecejointe?: string;
  code?: string;
  activite?: string;
  adressecomptable?: string;
  adressedirigeant?: string;
  autredenomination?: string;
  autreformejuridique?: string;
  bpcomptable?: string;
  bpdeux?: string;
  bptrois?: string;
  bpun?: string;
  bpsecondaire?: string;
  centreimpot?: string;
  comptable?: string;
  dirigeant?: string;
  enseigne?: string;
  etssecondaire?: string;
  insae?: string;
  formejuridique?: string;
  proprietairesiege?: string;
  quartier?: string;
  numeroenregistrement?: string;
  serviceencharge?: string;
  siege?: string;
  sigle?: string;
  telcomptable?: string;
  teldeux?: string;
  teldirigeant?: string;
  telsecondaire?: string;
  teltrois?: string;
  telun?: string;
  ville?: string;
  typedge?: string;
  type?: string;
  utilisateurLogin?: string;
  fax?: string;
  catFournisseurId?: number;
}

export class Fournisseur implements IFournisseur {
  constructor(
    public id?: number,
    public nom?: string,
    public adresse?: string,
    public email?: string,
    public telephone?: number,
    public numeroRegistreCommerce?: number,
    public piecejointe?: string,
    public code?: string,
    public activite?: string,
    public adressecomptable?: string,
    public adressedirigeant?: string,
    public autredenomination?: string,
    public autreformejuridique?: string,
    public bpcomptable?: string,
    public bpdeux?: string,
    public bptrois?: string,
    public bpun?: string,
    public bpsecondaire?: string,
    public centreimpot?: string,
    public comptable?: string,
    public dirigeant?: string,
    public enseigne?: string,
    public etssecondaire?: string,
    public insae?: string,
    public formejuridique?: string,
    public proprietairesiege?: string,
    public quartier?: string,
    public numeroenregistrement?: string,
    public serviceencharge?: string,
    public siege?: string,
    public sigle?: string,
    public telcomptable?: string,
    public teldeux?: string,
    public teldirigeant?: string,
    public telsecondaire?: string,
    public teltrois?: string,
    public telun?: string,
    public ville?: string,
    public typedge?: string,
    public type?: string,
    public utilisateurLogin?: string,
    public fax?: string,
    public catFournisseurId?: number
  ) {}
}
