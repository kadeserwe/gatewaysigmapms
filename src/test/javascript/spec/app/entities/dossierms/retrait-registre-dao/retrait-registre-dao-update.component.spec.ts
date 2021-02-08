import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { RetraitRegistreDAOUpdateComponent } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao-update.component';
import { RetraitRegistreDAOService } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao.service';
import { RetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';

describe('Component Tests', () => {
  describe('RetraitRegistreDAO Management Update Component', () => {
    let comp: RetraitRegistreDAOUpdateComponent;
    let fixture: ComponentFixture<RetraitRegistreDAOUpdateComponent>;
    let service: RetraitRegistreDAOService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [RetraitRegistreDAOUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(RetraitRegistreDAOUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(RetraitRegistreDAOUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(RetraitRegistreDAOService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new RetraitRegistreDAO(123);
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
        const entity = new RetraitRegistreDAO();
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
