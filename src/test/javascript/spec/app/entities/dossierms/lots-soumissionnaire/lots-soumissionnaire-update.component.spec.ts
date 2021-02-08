import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { LotsSoumissionnaireUpdateComponent } from 'app/entities/dossierms/lots-soumissionnaire/lots-soumissionnaire-update.component';
import { LotsSoumissionnaireService } from 'app/entities/dossierms/lots-soumissionnaire/lots-soumissionnaire.service';
import { LotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';

describe('Component Tests', () => {
  describe('LotsSoumissionnaire Management Update Component', () => {
    let comp: LotsSoumissionnaireUpdateComponent;
    let fixture: ComponentFixture<LotsSoumissionnaireUpdateComponent>;
    let service: LotsSoumissionnaireService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [LotsSoumissionnaireUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(LotsSoumissionnaireUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(LotsSoumissionnaireUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(LotsSoumissionnaireService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new LotsSoumissionnaire(123);
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
        const entity = new LotsSoumissionnaire();
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
