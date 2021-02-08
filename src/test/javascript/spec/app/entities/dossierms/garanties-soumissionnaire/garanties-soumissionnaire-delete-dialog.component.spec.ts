import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { GarantiesSoumissionnaireDeleteDialogComponent } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire-delete-dialog.component';
import { GarantiesSoumissionnaireService } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire.service';

describe('Component Tests', () => {
  describe('GarantiesSoumissionnaire Management Delete Component', () => {
    let comp: GarantiesSoumissionnaireDeleteDialogComponent;
    let fixture: ComponentFixture<GarantiesSoumissionnaireDeleteDialogComponent>;
    let service: GarantiesSoumissionnaireService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GarantiesSoumissionnaireDeleteDialogComponent],
      })
        .overrideTemplate(GarantiesSoumissionnaireDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GarantiesSoumissionnaireDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GarantiesSoumissionnaireService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
