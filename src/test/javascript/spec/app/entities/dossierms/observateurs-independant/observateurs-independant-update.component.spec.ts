import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { ObservateursIndependantUpdateComponent } from 'app/entities/dossierms/observateurs-independant/observateurs-independant-update.component';
import { ObservateursIndependantService } from 'app/entities/dossierms/observateurs-independant/observateurs-independant.service';
import { ObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';

describe('Component Tests', () => {
  describe('ObservateursIndependant Management Update Component', () => {
    let comp: ObservateursIndependantUpdateComponent;
    let fixture: ComponentFixture<ObservateursIndependantUpdateComponent>;
    let service: ObservateursIndependantService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [ObservateursIndependantUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ObservateursIndependantUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ObservateursIndependantUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ObservateursIndependantService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ObservateursIndependant(123);
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
        const entity = new ObservateursIndependant();
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
