import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AttributionDetailComponent } from 'app/entities/dossierms/attribution/attribution-detail.component';
import { Attribution } from 'app/shared/model/dossierms/attribution.model';

describe('Component Tests', () => {
  describe('Attribution Management Detail Component', () => {
    let comp: AttributionDetailComponent;
    let fixture: ComponentFixture<AttributionDetailComponent>;
    const route = ({ data: of({ attribution: new Attribution(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AttributionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(AttributionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AttributionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load attribution on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.attribution).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
