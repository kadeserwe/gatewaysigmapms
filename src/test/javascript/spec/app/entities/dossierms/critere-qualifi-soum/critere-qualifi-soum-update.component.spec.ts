import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CritereQualifiSoumUpdateComponent } from 'app/entities/dossierms/critere-qualifi-soum/critere-qualifi-soum-update.component';
import { CritereQualifiSoumService } from 'app/entities/dossierms/critere-qualifi-soum/critere-qualifi-soum.service';
import { CritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';

describe('Component Tests', () => {
  describe('CritereQualifiSoum Management Update Component', () => {
    let comp: CritereQualifiSoumUpdateComponent;
    let fixture: ComponentFixture<CritereQualifiSoumUpdateComponent>;
    let service: CritereQualifiSoumService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CritereQualifiSoumUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CritereQualifiSoumUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CritereQualifiSoumUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CritereQualifiSoumService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CritereQualifiSoum(123);
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
        const entity = new CritereQualifiSoum();
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
