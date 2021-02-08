import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersSouscritereUpdateComponent } from 'app/entities/dossierms/dossiers-souscritere/dossiers-souscritere-update.component';
import { DossiersSouscritereService } from 'app/entities/dossierms/dossiers-souscritere/dossiers-souscritere.service';
import { DossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';

describe('Component Tests', () => {
  describe('DossiersSouscritere Management Update Component', () => {
    let comp: DossiersSouscritereUpdateComponent;
    let fixture: ComponentFixture<DossiersSouscritereUpdateComponent>;
    let service: DossiersSouscritereService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersSouscritereUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DossiersSouscritereUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossiersSouscritereUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossiersSouscritereService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DossiersSouscritere(123);
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
        const entity = new DossiersSouscritere();
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
