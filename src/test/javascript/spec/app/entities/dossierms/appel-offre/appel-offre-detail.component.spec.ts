import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AppelOffreDetailComponent } from 'app/entities/dossierms/appel-offre/appel-offre-detail.component';
import { AppelOffre } from 'app/shared/model/dossierms/appel-offre.model';

describe('Component Tests', () => {
  describe('AppelOffre Management Detail Component', () => {
    let comp: AppelOffreDetailComponent;
    let fixture: ComponentFixture<AppelOffreDetailComponent>;
    const route = ({ data: of({ appelOffre: new AppelOffre(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AppelOffreDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(AppelOffreDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AppelOffreDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load appelOffre on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.appelOffre).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
