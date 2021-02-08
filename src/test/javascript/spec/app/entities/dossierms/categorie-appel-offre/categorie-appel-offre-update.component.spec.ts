import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CategorieAppelOffreUpdateComponent } from 'app/entities/dossierms/categorie-appel-offre/categorie-appel-offre-update.component';
import { CategorieAppelOffreService } from 'app/entities/dossierms/categorie-appel-offre/categorie-appel-offre.service';
import { CategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';

describe('Component Tests', () => {
  describe('CategorieAppelOffre Management Update Component', () => {
    let comp: CategorieAppelOffreUpdateComponent;
    let fixture: ComponentFixture<CategorieAppelOffreUpdateComponent>;
    let service: CategorieAppelOffreService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CategorieAppelOffreUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CategorieAppelOffreUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CategorieAppelOffreUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategorieAppelOffreService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CategorieAppelOffre(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new CategorieAppelOffre();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
