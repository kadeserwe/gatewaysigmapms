import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { LotsSoumissionnaireComponent } from 'app/entities/dossierms/lots-soumissionnaire/lots-soumissionnaire.component';
import { LotsSoumissionnaireService } from 'app/entities/dossierms/lots-soumissionnaire/lots-soumissionnaire.service';
import { LotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';

describe('Component Tests', () => {
  describe('LotsSoumissionnaire Management Component', () => {
    let comp: LotsSoumissionnaireComponent;
    let fixture: ComponentFixture<LotsSoumissionnaireComponent>;
    let service: LotsSoumissionnaireService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [LotsSoumissionnaireComponent],
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
        .overrideTemplate(LotsSoumissionnaireComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(LotsSoumissionnaireComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(LotsSoumissionnaireService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new LotsSoumissionnaire(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.lotsSoumissionnaires && comp.lotsSoumissionnaires[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new LotsSoumissionnaire(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.lotsSoumissionnaires && comp.lotsSoumissionnaires[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
