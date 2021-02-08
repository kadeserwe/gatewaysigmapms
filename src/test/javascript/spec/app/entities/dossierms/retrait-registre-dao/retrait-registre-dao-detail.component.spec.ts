import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { RetraitRegistreDAODetailComponent } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao-detail.component';
import { RetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';

describe('Component Tests', () => {
  describe('RetraitRegistreDAO Management Detail Component', () => {
    let comp: RetraitRegistreDAODetailComponent;
    let fixture: ComponentFixture<RetraitRegistreDAODetailComponent>;
    const route = ({ data: of({ retraitRegistreDAO: new RetraitRegistreDAO(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [RetraitRegistreDAODetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(RetraitRegistreDAODetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(RetraitRegistreDAODetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load retraitRegistreDAO on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.retraitRegistreDAO).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
