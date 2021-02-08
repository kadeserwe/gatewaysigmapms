import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersEvaluateurDetailComponent } from 'app/entities/dossierms/dossiers-evaluateur/dossiers-evaluateur-detail.component';
import { DossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';

describe('Component Tests', () => {
  describe('DossiersEvaluateur Management Detail Component', () => {
    let comp: DossiersEvaluateurDetailComponent;
    let fixture: ComponentFixture<DossiersEvaluateurDetailComponent>;
    const route = ({ data: of({ dossiersEvaluateur: new DossiersEvaluateur(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersEvaluateurDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DossiersEvaluateurDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DossiersEvaluateurDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dossiersEvaluateur on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dossiersEvaluateur).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
