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
        path: 'conf-gen-sequence',
        loadChildren: () =>
          import('./planpassationms/conf-gen-sequence/conf-gen-sequence.module').then(m => m.PlanpassationmsConfGenSequenceModule),
      },
      {
        path: 'syg-realisation',
        loadChildren: () =>
          import('./planpassationms/syg-realisation/syg-realisation.module').then(m => m.PlanpassationmsSygRealisationModule),
      },
      {
        path: 'conf-sequance-generator',
        loadChildren: () =>
          import('./planpassationms/conf-sequance-generator/conf-sequance-generator.module').then(
            m => m.PlanpassationmsConfSequanceGeneratorModule
          ),
      },
      {
        path: 'conf-table-de-transaction',
        loadChildren: () =>
          import('./planpassationms/conf-table-de-transaction/conf-table-de-transaction.module').then(
            m => m.PlanpassationmsConfTableDeTransactionModule
          ),
      },
      {
        path: 'conf-table-row',
        loadChildren: () => import('./planpassationms/conf-table-row/conf-table-row.module').then(m => m.PlanpassationmsConfTableRowModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class GatewaysigmapEntityModule {}
