import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CatFournisseurUpdateComponent } from 'app/entities/dossierms/cat-fournisseur/cat-fournisseur-update.component';
import { CatFournisseurService } from 'app/entities/dossierms/cat-fournisseur/cat-fournisseur.service';
import { CatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';

describe('Component Tests', () => {
  describe('CatFournisseur Management Update Component', () => {
    let comp: CatFournisseurUpdateComponent;
    let fixture: ComponentFixture<CatFournisseurUpdateComponent>;
    let service: CatFournisseurService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CatFournisseurUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CatFournisseurUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CatFournisseurUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CatFournisseurService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CatFournisseur(123);
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
        const entity = new CatFournisseur();
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
