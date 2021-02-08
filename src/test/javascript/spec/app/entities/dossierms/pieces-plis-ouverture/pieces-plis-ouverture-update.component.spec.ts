import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesPlisOuvertureUpdateComponent } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture-update.component';
import { PiecesPlisOuvertureService } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture.service';
import { PiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';

describe('Component Tests', () => {
  describe('PiecesPlisOuverture Management Update Component', () => {
    let comp: PiecesPlisOuvertureUpdateComponent;
    let fixture: ComponentFixture<PiecesPlisOuvertureUpdateComponent>;
    let service: PiecesPlisOuvertureService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesPlisOuvertureUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PiecesPlisOuvertureUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PiecesPlisOuvertureUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesPlisOuvertureService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PiecesPlisOuverture(123);
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
        const entity = new PiecesPlisOuverture();
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
