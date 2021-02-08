import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { GarantiesSoumissionnaireComponent } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire.component';
import { GarantiesSoumissionnaireService } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire.service';
import { GarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';

describe('Component Tests', () => {
  describe('GarantiesSoumissionnaire Management Component', () => {
    let comp: GarantiesSoumissionnaireComponent;
    let fixture: ComponentFixture<GarantiesSoumissionnaireComponent>;
    let service: GarantiesSoumissionnaireService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [GarantiesSoumissionnaireComponent],
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
        .overrideTemplate(GarantiesSoumissionnaireComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GarantiesSoumissionnaireComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GarantiesSoumissionnaireService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new GarantiesSoumissionnaire(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.garantiesSoumissionnaires && comp.garantiesSoumissionnaires[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new GarantiesSoumissionnaire(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.garantiesSoumissionnaires && comp.garantiesSoumissionnaires[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
