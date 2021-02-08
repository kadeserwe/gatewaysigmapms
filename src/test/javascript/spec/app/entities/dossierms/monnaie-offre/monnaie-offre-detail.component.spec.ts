import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MonnaieOffreDetailComponent } from 'app/entities/dossierms/monnaie-offre/monnaie-offre-detail.component';
import { MonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';

describe('Component Tests', () => {
  describe('MonnaieOffre Management Detail Component', () => {
    let comp: MonnaieOffreDetailComponent;
    let fixture: ComponentFixture<MonnaieOffreDetailComponent>;
    const route = ({ data: of({ monnaieOffre: new MonnaieOffre(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [MonnaieOffreDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(MonnaieOffreDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MonnaieOffreDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load monnaieOffre on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.monnaieOffre).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
