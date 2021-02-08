import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { PiecesPlisOuvertureDeleteDialogComponent } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture-delete-dialog.component';
import { PiecesPlisOuvertureService } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture.service';

describe('Component Tests', () => {
  describe('PiecesPlisOuverture Management Delete Component', () => {
    let comp: PiecesPlisOuvertureDeleteDialogComponent;
    let fixture: ComponentFixture<PiecesPlisOuvertureDeleteDialogComponent>;
    let service: PiecesPlisOuvertureService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesPlisOuvertureDeleteDialogComponent],
      })
        .overrideTemplate(PiecesPlisOuvertureDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PiecesPlisOuvertureDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesPlisOuvertureService);
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
