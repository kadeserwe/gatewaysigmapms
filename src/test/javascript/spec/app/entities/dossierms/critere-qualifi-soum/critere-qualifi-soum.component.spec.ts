import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { CritereQualifiSoumComponent } from 'app/entities/dossierms/critere-qualifi-soum/critere-qualifi-soum.component';
import { CritereQualifiSoumService } from 'app/entities/dossierms/critere-qualifi-soum/critere-qualifi-soum.service';
import { CritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';

describe('Component Tests', () => {
  describe('CritereQualifiSoum Management Component', () => {
    let comp: CritereQualifiSoumComponent;
    let fixture: ComponentFixture<CritereQualifiSoumComponent>;
    let service: CritereQualifiSoumService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [CritereQualifiSoumComponent],
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
        .overrideTemplate(CritereQualifiSoumComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CritereQualifiSoumComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CritereQualifiSoumService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CritereQualifiSoum(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.critereQualifiSoums && comp.critereQualifiSoums[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CritereQualifiSoum(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.critereQualifiSoums && comp.critereQualifiSoums[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
