import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { LotsSoumissionnaireDetailComponent } from 'app/entities/dossierms/lots-soumissionnaire/lots-soumissionnaire-detail.component';
import { LotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';

describe('Component Tests', () => {
  describe('LotsSoumissionnaire Management Detail Component', () => {
    let comp: LotsSoumissionnaireDetailComponent;
    let fixture: ComponentFixture<LotsSoumissionnaireDetailComponent>;
    const route = ({ data: of({ lotsSoumissionnaire: new LotsSoumissionnaire(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [LotsSoumissionnaireDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(LotsSoumissionnaireDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(LotsSoumissionnaireDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load lotsSoumissionnaire on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.lotsSoumissionnaire).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
