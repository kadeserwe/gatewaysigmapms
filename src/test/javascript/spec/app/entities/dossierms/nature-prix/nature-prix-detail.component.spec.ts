import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { NaturePrixDetailComponent } from 'app/entities/dossierms/nature-prix/nature-prix-detail.component';
import { NaturePrix } from 'app/shared/model/dossierms/nature-prix.model';

describe('Component Tests', () => {
  describe('NaturePrix Management Detail Component', () => {
    let comp: NaturePrixDetailComponent;
    let fixture: ComponentFixture<NaturePrixDetailComponent>;
    const route = ({ data: of({ naturePrix: new NaturePrix(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [NaturePrixDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(NaturePrixDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(NaturePrixDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load naturePrix on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.naturePrix).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
