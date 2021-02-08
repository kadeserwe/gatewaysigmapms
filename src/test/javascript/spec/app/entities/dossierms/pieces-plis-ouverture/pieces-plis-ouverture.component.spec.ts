import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesPlisOuvertureComponent } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture.component';
import { PiecesPlisOuvertureService } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture.service';
import { PiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';

describe('Component Tests', () => {
  describe('PiecesPlisOuverture Management Component', () => {
    let comp: PiecesPlisOuvertureComponent;
    let fixture: ComponentFixture<PiecesPlisOuvertureComponent>;
    let service: PiecesPlisOuvertureService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesPlisOuvertureComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                defaultSort: 'id,asc',
              }),
              queryParamMap: of(
                convertToParamMap({
                  page: '1',
                  size: '1',
                  sort: 'id,desc',
                })
              ),
            },
          },
        ],
      })
        .overrideTemplate(PiecesPlisOuvertureComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PiecesPlisOuvertureComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PiecesPlisOuvertureService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PiecesPlisOuverture(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.piecesPlisOuvertures && comp.piecesPlisOuvertures[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PiecesPlisOuverture(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.piecesPlisOuvertures && comp.piecesPlisOuvertures[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      comp.ngOnInit();
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // INIT
      comp.ngOnInit();

      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
