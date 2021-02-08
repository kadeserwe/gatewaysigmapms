import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CatFournisseurDetailComponent } from 'app/entities/dossierms/cat-fournisseur/cat-fournisseur-detail.component';
import { CatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';

describe('Component Tests', () => {
  describe('CatFournisseur Management Detail Component', () => {
    let comp: CatFournisseurDetailComponent;
    let fixture: ComponentFixture<CatFournisseurDetailComponent>;
    const route = ({ data: of({ catFournisseur: new CatFournisseur(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CatFournisseurDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CatFournisseurDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CatFournisseurDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load catFournisseur on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.catFournisseur).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
