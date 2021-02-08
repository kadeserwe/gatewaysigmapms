import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PlisOuvertureUpdateComponent } from 'app/entities/dossierms/plis-ouverture/plis-ouverture-update.component';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { PlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';

describe('Component Tests', () => {
  describe('PlisOuverture Management Update Component', () => {
    let comp: PlisOuvertureUpdateComponent;
    let fixture: ComponentFixture<PlisOuvertureUpdateComponent>;
    let service: PlisOuvertureService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PlisOuvertureUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PlisOuvertureUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PlisOuvertureUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PlisOuvertureService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PlisOuverture(123);
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
        const entity = new PlisOuverture();
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
