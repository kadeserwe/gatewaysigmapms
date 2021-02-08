import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersCommissionsMarcheDetailComponent } from 'app/entities/dossierms/dossiers-commissions-marche/dossiers-commissions-marche-detail.component';
import { DossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';

describe('Component Tests', () => {
  describe('DossiersCommissionsMarche Management Detail Component', () => {
    let comp: DossiersCommissionsMarcheDetailComponent;
    let fixture: ComponentFixture<DossiersCommissionsMarcheDetailComponent>;
    const route = ({ data: of({ dossiersCommissionsMarche: new DossiersCommissionsMarche(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersCommissionsMarcheDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DossiersCommissionsMarcheDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DossiersCommissionsMarcheDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dossiersCommissionsMarche on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dossiersCommissionsMarche).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
