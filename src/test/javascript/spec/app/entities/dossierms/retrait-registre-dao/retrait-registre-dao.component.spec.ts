import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { RetraitRegistreDAOComponent } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao.component';
import { RetraitRegistreDAOService } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao.service';
import { RetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';

describe('Component Tests', () => {
  describe('RetraitRegistreDAO Management Component', () => {
    let comp: RetraitRegistreDAOComponent;
    let fixture: ComponentFixture<RetraitRegistreDAOComponent>;
    let service: RetraitRegistreDAOService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [RetraitRegistreDAOComponent],
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
        .overrideTemplate(RetraitRegistreDAOComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(RetraitRegistreDAOComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(RetraitRegistreDAOService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new RetraitRegistreDAO(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.retraitRegistreDAOS && comp.retraitRegistreDAOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new RetraitRegistreDAO(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.retraitRegistreDAOS && comp.retraitRegistreDAOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
