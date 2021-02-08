import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GarantiesSoumissionnaireDetailComponent } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire-detail.component';
import { GarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';

describe('Component Tests', () => {
  describe('GarantiesSoumissionnaire Management Detail Component', () => {
    let comp: GarantiesSoumissionnaireDetailComponent;
    let fixture: ComponentFixture<GarantiesSoumissionnaireDetailComponent>;
    const route = ({ data: of({ garantiesSoumissionnaire: new GarantiesSoumissionnaire(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GarantiesSoumissionnaireDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(GarantiesSoumissionnaireDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GarantiesSoumissionnaireDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load garantiesSoumissionnaire on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.garantiesSoumissionnaire).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
