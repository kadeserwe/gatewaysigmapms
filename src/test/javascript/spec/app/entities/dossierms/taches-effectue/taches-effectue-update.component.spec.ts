import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { TachesEffectueUpdateComponent } from 'app/entities/dossierms/taches-effectue/taches-effectue-update.component';
import { TachesEffectueService } from 'app/entities/dossierms/taches-effectue/taches-effectue.service';
import { TachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';

describe('Component Tests', () => {
  describe('TachesEffectue Management Update Component', () => {
    let comp: TachesEffectueUpdateComponent;
    let fixture: ComponentFixture<TachesEffectueUpdateComponent>;
    let service: TachesEffectueService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [TachesEffectueUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(TachesEffectueUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TachesEffectueUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TachesEffectueService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new TachesEffectue(123);
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
        const entity = new TachesEffectue();
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
