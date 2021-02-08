import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GarantiesSoumissionnaireUpdateComponent } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire-update.component';
import { GarantiesSoumissionnaireService } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire.service';
import { GarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';

describe('Component Tests', () => {
  describe('GarantiesSoumissionnaire Management Update Component', () => {
    let comp: GarantiesSoumissionnaireUpdateComponent;
    let fixture: ComponentFixture<GarantiesSoumissionnaireUpdateComponent>;
    let service: GarantiesSoumissionnaireService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GarantiesSoumissionnaireUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(GarantiesSoumissionnaireUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GarantiesSoumissionnaireUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GarantiesSoumissionnaireService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new GarantiesSoumissionnaire(123);
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
        const entity = new GarantiesSoumissionnaire();
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
