import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'historique',
        loadChildren: () => import('./planpassationms/historique/historique.module').then(m => m.PlanpassationmsHistoriqueModule),
      },
      {
        path: 'plan-passation',
        loadChildren: () =>
          import('./planpassationms/plan-passation/plan-passation.module').then(m => m.PlanpassationmsPlanPassationModule),
      },
      {
        path: 'realisation',
        loadChildren: () => import('./planpassationms/realisation/realisation.module').then(m => m.PlanpassationmsRealisationModule),
      },
      {
        path: 'syg-service',
        loadChildren: () => import('./planpassationms/syg-service/syg-service.module').then(m => m.PlanpassationmsSygServiceModule),
      },
      {
        path: 'syg-type-service',
        loadChildren: () =>
          import('./planpassationms/syg-type-service/syg-type-service.module').then(m => m.PlanpassationmsSygTypeServiceModule),
      },
      {
        path: 'syg-type-marche',
        loadChildren: () =>
          import('./planpassationms/syg-type-marche/syg-type-marche.module').then(m => m.PlanpassationmsSygTypeMarcheModule),
      },
      {
        path: 'syg-type-source-financement',
        loadChildren: () =>
          import('./planpassationms/syg-type-source-financement/syg-type-source-financement.module').then(
            m => m.PlanpassationmsSygTypeSourceFinancementModule
          ),
      },
      {
        path: 'syg-source-financement',
        loadChildren: () =>
          import('./planpassationms/syg-source-financement/syg-source-financement.module').then(
            m => m.PlanpassationmsSygSourceFinancementModule
          ),
      },
      {
        path: 'appel-offre',
        loadChildren: () => import('./dossierms/appel-offre/appel-offre.module').then(m => m.DossiermsAppelOffreModule),
      },
      {
        path: 'attribution',
        loadChildren: () => import('./dossierms/attribution/attribution.module').then(m => m.DossiermsAttributionModule),
      },
      {
        path: 'lot',
        loadChildren: () => import('./dossierms/lot/lot.module').then(m => m.DossiermsLotModule),
      },
      {
        path: 'categorie-appel-offre',
        loadChildren: () =>
          import('./dossierms/categorie-appel-offre/categorie-appel-offre.module').then(m => m.DossiermsCategorieAppelOffreModule),
      },
      {
        path: 'dossier-appel-offre',
        loadChildren: () =>
          import('./dossierms/dossier-appel-offre/dossier-appel-offre.module').then(m => m.DossiermsDossierAppelOffreModule),
      },
      {
        path: 'cat-fournisseur',
        loadChildren: () => import('./dossierms/cat-fournisseur/cat-fournisseur.module').then(m => m.DossiermsCatFournisseurModule),
      },
      {
        path: 'plis-ouverture',
        loadChildren: () => import('./dossierms/plis-ouverture/plis-ouverture.module').then(m => m.DossiermsPlisOuvertureModule),
      },
      {
        path: 'retrait-registre-dao',
        loadChildren: () =>
          import('./dossierms/retrait-registre-dao/retrait-registre-dao.module').then(m => m.DossiermsRetraitRegistreDAOModule),
      },
      {
        path: 'fournisseur',
        loadChildren: () => import('./dossierms/fournisseur/fournisseur.module').then(m => m.DossiermsFournisseurModule),
      },
      {
        path: 'pays',
        loadChildren: () => import('./dossierms/pays/pays.module').then(m => m.DossiermsPaysModule),
      },
      {
        path: 'avis-attribution',
        loadChildren: () => import('./dossierms/avis-attribution/avis-attribution.module').then(m => m.DossiermsAvisAttributionModule),
      },
      {
        path: 'critere',
        loadChildren: () => import('./dossierms/critere/critere.module').then(m => m.DossiermsCritereModule),
      },
      {
        path: 'critere-qualifi-soum',
        loadChildren: () =>
          import('./dossierms/critere-qualifi-soum/critere-qualifi-soum.module').then(m => m.DossiermsCritereQualifiSoumModule),
      },
      {
        path: 'dossiers-souscritere',
        loadChildren: () =>
          import('./dossierms/dossiers-souscritere/dossiers-souscritere.module').then(m => m.DossiermsDossiersSouscritereModule),
      },
      {
        path: 'devise',
        loadChildren: () => import('./dossierms/devise/devise.module').then(m => m.DossiermsDeviseModule),
      },
      {
        path: 'monnaie-offre',
        loadChildren: () => import('./dossierms/monnaie-offre/monnaie-offre.module').then(m => m.DossiermsMonnaieOffreModule),
      },
      {
        path: 'dossiers-piece',
        loadChildren: () => import('./dossierms/dossiers-piece/dossiers-piece.module').then(m => m.DossiermsDossiersPieceModule),
      },
      {
        path: 'piece',
        loadChildren: () => import('./dossierms/piece/piece.module').then(m => m.DossiermsPieceModule),
      },
      {
        path: 'nature-prix',
        loadChildren: () => import('./dossierms/nature-prix/nature-prix.module').then(m => m.DossiermsNaturePrixModule),
      },
      {
        path: 'natures-garantie',
        loadChildren: () => import('./dossierms/natures-garantie/natures-garantie.module').then(m => m.DossiermsNaturesGarantieModule),
      },
      {
        path: 'pieces-plis-ouverture',
        loadChildren: () =>
          import('./dossierms/pieces-plis-ouverture/pieces-plis-ouverture.module').then(m => m.DossiermsPiecesPlisOuvertureModule),
      },
      {
        path: 'pieces-recus',
        loadChildren: () => import('./dossierms/pieces-recus/pieces-recus.module').then(m => m.DossiermsPiecesRecusModule),
      },
      {
        path: 'presence-ouverture',
        loadChildren: () =>
          import('./dossierms/presence-ouverture/presence-ouverture.module').then(m => m.DossiermsPresenceOuvertureModule),
      },
      {
        path: 'membres-commissions-marche',
        loadChildren: () =>
          import('./dossierms/membres-commissions-marche/membres-commissions-marche.module').then(
            m => m.DossiermsMembresCommissionsMarcheModule
          ),
      },
      {
        path: 'observateurs-independant',
        loadChildren: () =>
          import('./dossierms/observateurs-independant/observateurs-independant.module').then(
            m => m.DossiermsObservateursIndependantModule
          ),
      },
      {
        path: 'representant-serv-tech',
        loadChildren: () =>
          import('./dossierms/representant-serv-tech/representant-serv-tech.module').then(m => m.DossiermsRepresentantServTechModule),
      },
      {
        path: 'garanties-soumissionnaire',
        loadChildren: () =>
          import('./dossierms/garanties-soumissionnaire/garanties-soumissionnaire.module').then(
            m => m.DossiermsGarantiesSoumissionnaireModule
          ),
      },
      {
        path: 'garanties-dossier',
        loadChildren: () => import('./dossierms/garanties-dossier/garanties-dossier.module').then(m => m.DossiermsGarantiesDossierModule),
      },
      {
        path: 'dossiers-commissions-marche',
        loadChildren: () =>
          import('./dossierms/dossiers-commissions-marche/dossiers-commissions-marche.module').then(
            m => m.DossiermsDossiersCommissionsMarcheModule
          ),
      },
      {
        path: 'dossiers-evaluateur',
        loadChildren: () =>
          import('./dossierms/dossiers-evaluateur/dossiers-evaluateur.module').then(m => m.DossiermsDossiersEvaluateurModule),
      },
      {
        path: 'lots-soumissionnaire',
        loadChildren: () =>
          import('./dossierms/lots-soumissionnaire/lots-soumissionnaire.module').then(m => m.DossiermsLotsSoumissionnaireModule),
      },
      {
        path: 'historique-appel-offres-ac',
        loadChildren: () =>
          import('./dossierms/historique-appel-offres-ac/historique-appel-offres-ac.module').then(
            m => m.DossiermsHistoriqueAppelOffresACModule
          ),
      },
      {
        path: 'taches-effectue',
        loadChildren: () => import('./dossierms/taches-effectue/taches-effectue.module').then(m => m.DossiermsTachesEffectueModule),
      },
      {
        path: 'document',
        loadChildren: () => import('./dossierms/document/document.module').then(m => m.DossiermsDocumentModule),
      },
      {
        path: 'contrat',
        loadChildren: () => import('./dossierms/contrat/contrat.module').then(m => m.DossiermsContratModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class GatewaysigmapEntityModule {}
