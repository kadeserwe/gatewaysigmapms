import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AvisAttributionDetailComponent } from 'app/entities/dossierms/avis-attribution/avis-attribution-detail.component';
import { AvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';

describe('Component Tests', () => {
  describe('AvisAttribution Management Detail Component', () => {
    let comp: AvisAttributionDetailComponent;
    let fixture: ComponentFixture<AvisAttributionDetailComponent>;
    const route = ({ data: of({ avisAttribution: new AvisAttribution(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AvisAttributionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(AvisAttributionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AvisAttributionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load avisAttribution on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.avisAttribution).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
