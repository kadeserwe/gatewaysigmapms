import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PresenceOuvertureUpdateComponent } from 'app/entities/dossierms/presence-ouverture/presence-ouverture-update.component';
import { PresenceOuvertureService } from 'app/entities/dossierms/presence-ouverture/presence-ouverture.service';
import { PresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';

describe('Component Tests', () => {
  describe('PresenceOuverture Management Update Component', () => {
    let comp: PresenceOuvertureUpdateComponent;
    let fixture: ComponentFixture<PresenceOuvertureUpdateComponent>;
    let service: PresenceOuvertureService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PresenceOuvertureUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PresenceOuvertureUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PresenceOuvertureUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PresenceOuvertureService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PresenceOuverture(123);
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
        const entity = new PresenceOuverture();
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
