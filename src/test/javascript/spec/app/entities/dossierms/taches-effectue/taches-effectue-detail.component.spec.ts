import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TachesEffectueDetailComponent } from 'app/entities/dossierms/taches-effectue/taches-effectue-detail.component';
import { TachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';

describe('Component Tests', () => {
  describe('TachesEffectue Management Detail Component', () => {
    let comp: TachesEffectueDetailComponent;
    let fixture: ComponentFixture<TachesEffectueDetailComponent>;
    const route = ({ data: of({ tachesEffectue: new TachesEffectue(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TachesEffectueDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(TachesEffectueDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TachesEffectueDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load tachesEffectue on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tachesEffectue).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
