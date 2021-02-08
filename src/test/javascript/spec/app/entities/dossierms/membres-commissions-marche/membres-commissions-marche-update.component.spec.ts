import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MembresCommissionsMarcheUpdateComponent } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche-update.component';
import { MembresCommissionsMarcheService } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche.service';
import { MembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';

describe('Component Tests', () => {
  describe('MembresCommissionsMarche Management Update Component', () => {
    let comp: MembresCommissionsMarcheUpdateComponent;
    let fixture: ComponentFixture<MembresCommissionsMarcheUpdateComponent>;
    let service: MembresCommissionsMarcheService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [MembresCommissionsMarcheUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(MembresCommissionsMarcheUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MembresCommissionsMarcheUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MembresCommissionsMarcheService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new MembresCommissionsMarche(123);
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
        const entity = new MembresCommissionsMarche();
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
