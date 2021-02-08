import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CritereDetailComponent } from 'app/entities/dossierms/critere/critere-detail.component';
import { Critere } from 'app/shared/model/dossierms/critere.model';

describe('Component Tests', () => {
  describe('Critere Management Detail Component', () => {
    let comp: CritereDetailComponent;
    let fixture: ComponentFixture<CritereDetailComponent>;
    const route = ({ data: of({ critere: new Critere(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CritereDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CritereDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CritereDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load critere on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.critere).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
