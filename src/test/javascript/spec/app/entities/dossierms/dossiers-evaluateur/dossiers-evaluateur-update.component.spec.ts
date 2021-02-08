import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersEvaluateurUpdateComponent } from 'app/entities/dossierms/dossiers-evaluateur/dossiers-evaluateur-update.component';
import { DossiersEvaluateurService } from 'app/entities/dossierms/dossiers-evaluateur/dossiers-evaluateur.service';
import { DossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';

describe('Component Tests', () => {
  describe('DossiersEvaluateur Management Update Component', () => {
    let comp: DossiersEvaluateurUpdateComponent;
    let fixture: ComponentFixture<DossiersEvaluateurUpdateComponent>;
    let service: DossiersEvaluateurService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersEvaluateurUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DossiersEvaluateurUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossiersEvaluateurUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossiersEvaluateurService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DossiersEvaluateur(123);
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
        const entity = new DossiersEvaluateur();
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
