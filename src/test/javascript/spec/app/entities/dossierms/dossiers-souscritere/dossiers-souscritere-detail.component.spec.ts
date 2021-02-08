import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersSouscritereDetailComponent } from 'app/entities/dossierms/dossiers-souscritere/dossiers-souscritere-detail.component';
import { DossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';

describe('Component Tests', () => {
  describe('DossiersSouscritere Management Detail Component', () => {
    let comp: DossiersSouscritereDetailComponent;
    let fixture: ComponentFixture<DossiersSouscritereDetailComponent>;
    const route = ({ data: of({ dossiersSouscritere: new DossiersSouscritere(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersSouscritereDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DossiersSouscritereDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DossiersSouscritereDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dossiersSouscritere on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dossiersSouscritere).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
