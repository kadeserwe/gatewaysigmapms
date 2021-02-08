import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { HistoriqueAppelOffresACUpdateComponent } from 'app/entities/dossierms/historique-appel-offres-ac/historique-appel-offres-ac-update.component';
import { HistoriqueAppelOffresACService } from 'app/entities/dossierms/historique-appel-offres-ac/historique-appel-offres-ac.service';
import { HistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';

describe('Component Tests', () => {
  describe('HistoriqueAppelOffresAC Management Update Component', () => {
    let comp: HistoriqueAppelOffresACUpdateComponent;
    let fixture: ComponentFixture<HistoriqueAppelOffresACUpdateComponent>;
    let service: HistoriqueAppelOffresACService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [HistoriqueAppelOffresACUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(HistoriqueAppelOffresACUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HistoriqueAppelOffresACUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HistoriqueAppelOffresACService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new HistoriqueAppelOffresAC(123);
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
        const entity = new HistoriqueAppelOffresAC();
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
