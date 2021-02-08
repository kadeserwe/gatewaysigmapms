import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GarantiesDossierDetailComponent } from 'app/entities/dossierms/garanties-dossier/garanties-dossier-detail.component';
import { GarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';

describe('Component Tests', () => {
  describe('GarantiesDossier Management Detail Component', () => {
    let comp: GarantiesDossierDetailComponent;
    let fixture: ComponentFixture<GarantiesDossierDetailComponent>;
    const route = ({ data: of({ garantiesDossier: new GarantiesDossier(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GarantiesDossierDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(GarantiesDossierDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GarantiesDossierDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load garantiesDossier on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.garantiesDossier).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
