import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { RepresentantServTechUpdateComponent } from 'app/entities/dossierms/representant-serv-tech/representant-serv-tech-update.component';
import { RepresentantServTechService } from 'app/entities/dossierms/representant-serv-tech/representant-serv-tech.service';
import { RepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';

describe('Component Tests', () => {
  describe('RepresentantServTech Management Update Component', () => {
    let comp: RepresentantServTechUpdateComponent;
    let fixture: ComponentFixture<RepresentantServTechUpdateComponent>;
    let service: RepresentantServTechService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [RepresentantServTechUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(RepresentantServTechUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(RepresentantServTechUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(RepresentantServTechService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new RepresentantServTech(123);
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
        const entity = new RepresentantServTech();
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
