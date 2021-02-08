import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { AvisAttributionUpdateComponent } from 'app/entities/dossierms/avis-attribution/avis-attribution-update.component';
import { AvisAttributionService } from 'app/entities/dossierms/avis-attribution/avis-attribution.service';
import { AvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';

describe('Component Tests', () => {
  describe('AvisAttribution Management Update Component', () => {
    let comp: AvisAttributionUpdateComponent;
    let fixture: ComponentFixture<AvisAttributionUpdateComponent>;
    let service: AvisAttributionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [AvisAttributionUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(AvisAttributionUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AvisAttributionUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AvisAttributionService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AvisAttribution(123);
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
        const entity = new AvisAttribution();
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
