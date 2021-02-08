export interface ITachesEffectue {
  id?: number;
  allotissement?: number;
  garantie?: number;
  pieceAdministrative?: number;
  critereQualification?: number;
  devise?: number;
  financement?: number;
  registreRetrait?: number;
  registreDepot?: number;
  lotsSoumis?: number;
  commissionsPassation?: number;
  representantsSoumis?: number;
  servicesTechniques?: number;
  observateurs?: number;
  garantieSoum?: number;
  piecesSoumis?: number;
  lectureOffre?: number;
  commissionTecnique?: number;
  document?: number;
  examenGarantie?: number;
  examenExhaustivite?: number;
  examenSignatureOffre?: number;
  examenConformite?: number;
  verificationCritere?: number;
  attributionProvisoire?: number;
  termeReference?: number;
  depotCandidature?: number;
  preselection?: number;
  notification?: number;
  commissionsPassationPI?: number;
  representantsSoumisPI?: number;
  notesTechnique?: number;
  offresFinanciere?: number;
  prixEvalue?: number;
  registreDepotPI?: number;
  critereProvenance?: number;
  procesVerbale?: number;
  dossierAppelOffreId?: number;
}

export class TachesEffectue implements ITachesEffectue {
  constructor(
    public id?: number,
    public allotissement?: number,
    public garantie?: number,
    public pieceAdministrative?: number,
    public critereQualification?: number,
    public devise?: number,
    public financement?: number,
    public registreRetrait?: number,
    public registreDepot?: number,
    public lotsSoumis?: number,
    public commissionsPassation?: number,
    public representantsSoumis?: number,
    public servicesTechniques?: number,
    public observateurs?: number,
    public garantieSoum?: number,
    public piecesSoumis?: number,
    public lectureOffre?: number,
    public commissionTecnique?: number,
    public document?: number,
    public examenGarantie?: number,
    public examenExhaustivite?: number,
    public examenSignatureOffre?: number,
    public examenConformite?: number,
    public verificationCritere?: number,
    public attributionProvisoire?: number,
    public termeReference?: number,
    public depotCandidature?: number,
    public preselection?: number,
    public notification?: number,
    public commissionsPassationPI?: number,
    public representantsSoumisPI?: number,
    public notesTechnique?: number,
    public offresFinanciere?: number,
    public prixEvalue?: number,
    public registreDepotPI?: number,
    public critereProvenance?: number,
    public procesVerbale?: number,
    public dossierAppelOffreId?: number
  ) {}
}
