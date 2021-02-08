import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AppelOffreUpdateComponent } from 'app/entities/dossierms/appel-offre/appel-offre-update.component';
import { AppelOffreService } from 'app/entities/dossierms/appel-offre/appel-offre.service';
import { AppelOffre } from 'app/shared/model/dossierms/appel-offre.model';

describe('Component Tests', () => {
  describe('AppelOffre Management Update Component', () => {
    let comp: AppelOffreUpdateComponent;
    let fixture: ComponentFixture<AppelOffreUpdateComponent>;
    let service: AppelOffreService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AppelOffreUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(AppelOffreUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AppelOffreUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AppelOffreService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AppelOffre(123);
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
        const entity = new AppelOffre();
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
