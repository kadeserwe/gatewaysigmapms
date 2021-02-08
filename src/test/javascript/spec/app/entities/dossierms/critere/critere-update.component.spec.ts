import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CritereUpdateComponent } from 'app/entities/dossierms/critere/critere-update.component';
import { CritereService } from 'app/entities/dossierms/critere/critere.service';
import { Critere } from 'app/shared/model/dossierms/critere.model';

describe('Component Tests', () => {
  describe('Critere Management Update Component', () => {
    let comp: CritereUpdateComponent;
    let fixture: ComponentFixture<CritereUpdateComponent>;
    let service: CritereService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CritereUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CritereUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CritereUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CritereService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Critere(123);
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
        const entity = new Critere();
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
