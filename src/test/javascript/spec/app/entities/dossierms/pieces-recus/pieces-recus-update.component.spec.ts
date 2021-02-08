import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesRecusUpdateComponent } from 'app/entities/dossierms/pieces-recus/pieces-recus-update.component';
import { PiecesRecusService } from 'app/entities/dossierms/pieces-recus/pieces-recus.service';
import { PiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';

describe('Component Tests', () => {
  describe('PiecesRecus Management Update Component', () => {
    let comp: PiecesRecusUpdateComponent;
    let fixture: ComponentFixture<PiecesRecusUpdateComponent>;
    let service: PiecesRecusService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesRecusUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PiecesRecusUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PiecesRecusUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesRecusService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PiecesRecus(123);
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
        const entity = new PiecesRecus();
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
