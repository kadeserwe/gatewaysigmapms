import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ObservateursIndependantDetailComponent } from 'app/entities/dossierms/observateurs-independant/observateurs-independant-detail.component';
import { ObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';

describe('Component Tests', () => {
  describe('ObservateursIndependant Management Detail Component', () => {
    let comp: ObservateursIndependantDetailComponent;
    let fixture: ComponentFixture<ObservateursIndependantDetailComponent>;
    const route = ({ data: of({ observateursIndependant: new ObservateursIndependant(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ObservateursIndependantDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ObservateursIndependantDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ObservateursIndependantDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load observateursIndependant on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.observateursIndependant).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
