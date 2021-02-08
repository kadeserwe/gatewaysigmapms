import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GarantiesDossierUpdateComponent } from 'app/entities/dossierms/garanties-dossier/garanties-dossier-update.component';
import { GarantiesDossierService } from 'app/entities/dossierms/garanties-dossier/garanties-dossier.service';
import { GarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';

describe('Component Tests', () => {
  describe('GarantiesDossier Management Update Component', () => {
    let comp: GarantiesDossierUpdateComponent;
    let fixture: ComponentFixture<GarantiesDossierUpdateComponent>;
    let service: GarantiesDossierService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GarantiesDossierUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(GarantiesDossierUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GarantiesDossierUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GarantiesDossierService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new GarantiesDossier(123);
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
        const entity = new GarantiesDossier();
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
