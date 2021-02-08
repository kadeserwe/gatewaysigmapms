import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossierAppelOffreComponent } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.component';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { DossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';

describe('Component Tests', () => {
  describe('DossierAppelOffre Management Component', () => {
    let comp: DossierAppelOffreComponent;
    let fixture: ComponentFixture<DossierAppelOffreComponent>;
    let service: DossierAppelOffreService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossierAppelOffreComponent],
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
        .overrideTemplate(DossierAppelOffreComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DossierAppelOffreComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DossierAppelOffreService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DossierAppelOffre(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dossierAppelOffres && comp.dossierAppelOffres[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new DossierAppelOffre(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dossierAppelOffres && comp.dossierAppelOffres[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
