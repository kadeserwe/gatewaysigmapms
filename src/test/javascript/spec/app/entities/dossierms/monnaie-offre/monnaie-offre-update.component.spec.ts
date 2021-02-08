import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MonnaieOffreUpdateComponent } from 'app/entities/dossierms/monnaie-offre/monnaie-offre-update.component';
import { MonnaieOffreService } from 'app/entities/dossierms/monnaie-offre/monnaie-offre.service';
import { MonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';

describe('Component Tests', () => {
  describe('MonnaieOffre Management Update Component', () => {
    let comp: MonnaieOffreUpdateComponent;
    let fixture: ComponentFixture<MonnaieOffreUpdateComponent>;
    let service: MonnaieOffreService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [MonnaieOffreUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(MonnaieOffreUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MonnaieOffreUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MonnaieOffreService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new MonnaieOffre(123);
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
        const entity = new MonnaieOffre();
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
