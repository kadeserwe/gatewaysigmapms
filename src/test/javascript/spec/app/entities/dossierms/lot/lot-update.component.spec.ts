import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { LotUpdateComponent } from 'app/entities/dossierms/lot/lot-update.component';
import { LotService } from 'app/entities/dossierms/lot/lot.service';
import { Lot } from 'app/shared/model/dossierms/lot.model';

describe('Component Tests', () => {
  describe('Lot Management Update Component', () => {
    let comp: LotUpdateComponent;
    let fixture: ComponentFixture<LotUpdateComponent>;
    let service: LotService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [LotUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(LotUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(LotUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(LotService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Lot(123);
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
        const entity = new Lot();
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
