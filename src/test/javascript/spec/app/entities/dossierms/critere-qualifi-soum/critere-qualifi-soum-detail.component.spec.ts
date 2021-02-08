import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CritereQualifiSoumDetailComponent } from 'app/entities/dossierms/critere-qualifi-soum/critere-qualifi-soum-detail.component';
import { CritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';

describe('Component Tests', () => {
  describe('CritereQualifiSoum Management Detail Component', () => {
    let comp: CritereQualifiSoumDetailComponent;
    let fixture: ComponentFixture<CritereQualifiSoumDetailComponent>;
    const route = ({ data: of({ critereQualifiSoum: new CritereQualifiSoum(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CritereQualifiSoumDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CritereQualifiSoumDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CritereQualifiSoumDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load critereQualifiSoum on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.critereQualifiSoum).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
