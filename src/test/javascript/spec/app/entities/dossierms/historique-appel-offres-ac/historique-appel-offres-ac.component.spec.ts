import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { HistoriqueAppelOffresACComponent } from 'app/entities/dossierms/historique-appel-offres-ac/historique-appel-offres-ac.component';
import { HistoriqueAppelOffresACService } from 'app/entities/dossierms/historique-appel-offres-ac/historique-appel-offres-ac.service';
import { HistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';

describe('Component Tests', () => {
  describe('HistoriqueAppelOffresAC Management Component', () => {
    let comp: HistoriqueAppelOffresACComponent;
    let fixture: ComponentFixture<HistoriqueAppelOffresACComponent>;
    let service: HistoriqueAppelOffresACService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [HistoriqueAppelOffresACComponent],
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
        .overrideTemplate(HistoriqueAppelOffresACComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HistoriqueAppelOffresACComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HistoriqueAppelOffresACService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new HistoriqueAppelOffresAC(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.historiqueAppelOffresACS && comp.historiqueAppelOffresACS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new HistoriqueAppelOffresAC(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.historiqueAppelOffresACS && comp.historiqueAppelOffresACS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
