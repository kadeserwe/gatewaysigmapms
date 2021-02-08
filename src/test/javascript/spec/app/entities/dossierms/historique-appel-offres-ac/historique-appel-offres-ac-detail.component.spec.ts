import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { HistoriqueAppelOffresACDetailComponent } from 'app/entities/dossierms/historique-appel-offres-ac/historique-appel-offres-ac-detail.component';
import { HistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';

describe('Component Tests', () => {
  describe('HistoriqueAppelOffresAC Management Detail Component', () => {
    let comp: HistoriqueAppelOffresACDetailComponent;
    let fixture: ComponentFixture<HistoriqueAppelOffresACDetailComponent>;
    const route = ({ data: of({ historiqueAppelOffresAC: new HistoriqueAppelOffresAC(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [HistoriqueAppelOffresACDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(HistoriqueAppelOffresACDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(HistoriqueAppelOffresACDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load historiqueAppelOffresAC on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.historiqueAppelOffresAC).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
