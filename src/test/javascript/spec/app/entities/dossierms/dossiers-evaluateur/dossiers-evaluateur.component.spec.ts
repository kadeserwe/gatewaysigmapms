import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersEvaluateurComponent } from 'app/entities/dossierms/dossiers-evaluateur/dossiers-evaluateur.component';
import { DossiersEvaluateurService } from 'app/entities/dossierms/dossiers-evaluateur/dossiers-evaluateur.service';
import { DossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';

describe('Component Tests', () => {
  describe('DossiersEvaluateur Management Component', () => {
    let comp: DossiersEvaluateurComponent;
    let fixture: ComponentFixture<DossiersEvaluateurComponent>;
    let service: DossiersEvaluateurService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersEvaluateurComponent],
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
        .overrideTemplate(DossiersEvaluateurComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossiersEvaluateurComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossiersEvaluateurService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DossiersEvaluateur(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dossiersEvaluateurs && comp.dossiersEvaluateurs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DossiersEvaluateur(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dossiersEvaluateurs && comp.dossiersEvaluateurs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
