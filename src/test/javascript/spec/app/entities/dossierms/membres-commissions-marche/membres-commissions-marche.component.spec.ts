import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MembresCommissionsMarcheComponent } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche.component';
import { MembresCommissionsMarcheService } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche.service';
import { MembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';

describe('Component Tests', () => {
  describe('MembresCommissionsMarche Management Component', () => {
    let comp: MembresCommissionsMarcheComponent;
    let fixture: ComponentFixture<MembresCommissionsMarcheComponent>;
    let service: MembresCommissionsMarcheService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [MembresCommissionsMarcheComponent],
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
        .overrideTemplate(MembresCommissionsMarcheComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MembresCommissionsMarcheComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MembresCommissionsMarcheService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new MembresCommissionsMarche(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.membresCommissionsMarches && comp.membresCommissionsMarches[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new MembresCommissionsMarche(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.membresCommissionsMarches && comp.membresCommissionsMarches[0]).toEqual(jasmine.objectContaining({ id: 123 }));
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
