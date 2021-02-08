import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersPieceUpdateComponent } from 'app/entities/dossierms/dossiers-piece/dossiers-piece-update.component';
import { DossiersPieceService } from 'app/entities/dossierms/dossiers-piece/dossiers-piece.service';
import { DossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';

describe('Component Tests', () => {
  describe('DossiersPiece Management Update Component', () => {
    let comp: DossiersPieceUpdateComponent;
    let fixture: ComponentFixture<DossiersPieceUpdateComponent>;
    let service: DossiersPieceService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersPieceUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DossiersPieceUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossiersPieceUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossiersPieceService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DossiersPiece(123);
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
        const entity = new DossiersPiece();
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
