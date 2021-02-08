import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { NaturePrixUpdateComponent } from 'app/entities/dossierms/nature-prix/nature-prix-update.component';
import { NaturePrixService } from 'app/entities/dossierms/nature-prix/nature-prix.service';
import { NaturePrix } from 'app/shared/model/dossierms/nature-prix.model';

describe('Component Tests', () => {
  describe('NaturePrix Management Update Component', () => {
    let comp: NaturePrixUpdateComponent;
    let fixture: ComponentFixture<NaturePrixUpdateComponent>;
    let service: NaturePrixService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [NaturePrixUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(NaturePrixUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(NaturePrixUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(NaturePrixService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new NaturePrix(123);
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
        const entity = new NaturePrix();
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
