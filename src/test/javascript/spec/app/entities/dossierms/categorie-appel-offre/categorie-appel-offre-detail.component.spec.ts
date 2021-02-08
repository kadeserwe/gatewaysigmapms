import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CategorieAppelOffreDetailComponent } from 'app/entities/dossierms/categorie-appel-offre/categorie-appel-offre-detail.component';
import { CategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';

describe('Component Tests', () => {
  describe('CategorieAppelOffre Management Detail Component', () => {
    let comp: CategorieAppelOffreDetailComponent;
    let fixture: ComponentFixture<CategorieAppelOffreDetailComponent>;
    const route = ({ data: of({ categorieAppelOffre: new CategorieAppelOffre(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CategorieAppelOffreDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CategorieAppelOffreDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategorieAppelOffreDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load categorieAppelOffre on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.categorieAppelOffre).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
