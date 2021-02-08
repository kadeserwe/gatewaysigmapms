import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossierAppelOffreDetailComponent } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre-detail.component';
import { DossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';

describe('Component Tests', () => {
  describe('DossierAppelOffre Management Detail Component', () => {
    let comp: DossierAppelOffreDetailComponent;
    let fixture: ComponentFixture<DossierAppelOffreDetailComponent>;
    const route = ({ data: of({ dossierAppelOffre: new DossierAppelOffre(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossierAppelOffreDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DossierAppelOffreDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DossierAppelOffreDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dossierAppelOffre on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dossierAppelOffre).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
