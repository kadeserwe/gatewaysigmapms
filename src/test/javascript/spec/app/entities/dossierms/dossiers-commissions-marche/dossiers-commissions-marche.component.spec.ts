import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersCommissionsMarcheComponent } from 'app/entities/dossierms/dossiers-commissions-marche/dossiers-commissions-marche.component';
import { DossiersCommissionsMarcheService } from 'app/entities/dossierms/dossiers-commissions-marche/dossiers-commissions-marche.service';
import { DossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';

describe('Component Tests', () => {
  describe('DossiersCommissionsMarche Management Component', () => {
    let comp: DossiersCommissionsMarcheComponent;
    let fixture: ComponentFixture<DossiersCommissionsMarcheComponent>;
    let service: DossiersCommissionsMarcheService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersCommissionsMarcheComponent],
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
        .overrideTemplate(DossiersCommissionsMarcheComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossiersCommissionsMarcheComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossiersCommissionsMarcheService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DossiersCommissionsMarche(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dossiersCommissionsMarches && comp.dossiersCommissionsMarches[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DossiersCommissionsMarche(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dossiersCommissionsMarches && comp.dossiersCommissionsMarches[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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