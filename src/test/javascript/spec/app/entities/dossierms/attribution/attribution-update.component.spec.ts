import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AttributionUpdateComponent } from 'app/entities/dossierms/attribution/attribution-update.component';
import { AttributionService } from 'app/entities/dossierms/attribution/attribution.service';
import { Attribution } from 'app/shared/model/dossierms/attribution.model';

describe('Component Tests', () => {
  describe('Attribution Management Update Component', () => {
    let comp: AttributionUpdateComponent;
    let fixture: ComponentFixture<AttributionUpdateComponent>;
    let service: AttributionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AttributionUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(AttributionUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AttributionUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AttributionService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Attribution(123);
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
        const entity = new Attribution();
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
