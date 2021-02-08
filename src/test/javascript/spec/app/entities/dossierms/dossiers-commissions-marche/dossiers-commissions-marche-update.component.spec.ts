import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersCommissionsMarcheUpdateComponent } from 'app/entities/dossierms/dossiers-commissions-marche/dossiers-commissions-marche-update.component';
import { DossiersCommissionsMarcheService } from 'app/entities/dossierms/dossiers-commissions-marche/dossiers-commissions-marche.service';
import { DossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';

describe('Component Tests', () => {
  describe('DossiersCommissionsMarche Management Update Component', () => {
    let comp: DossiersCommissionsMarcheUpdateComponent;
    let fixture: ComponentFixture<DossiersCommissionsMarcheUpdateComponent>;
    let service: DossiersCommissionsMarcheService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersCommissionsMarcheUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DossiersCommissionsMarcheUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossiersCommissionsMarcheUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossiersCommissionsMarcheService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DossiersCommissionsMarche(123);
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
        const entity = new DossiersCommissionsMarche();
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
