import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossierAppelOffreUpdateComponent } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre-update.component';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { DossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';

describe('Component Tests', () => {
  describe('DossierAppelOffre Management Update Component', () => {
    let comp: DossierAppelOffreUpdateComponent;
    let fixture: ComponentFixture<DossierAppelOffreUpdateComponent>;
    let service: DossierAppelOffreService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossierAppelOffreUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(DossierAppelOffreUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossierAppelOffreUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossierAppelOffreService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new DossierAppelOffre(123);
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
        const entity = new DossierAppelOffre();
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
