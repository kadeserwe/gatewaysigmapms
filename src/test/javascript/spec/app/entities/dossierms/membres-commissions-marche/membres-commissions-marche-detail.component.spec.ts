import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { MembresCommissionsMarcheDetailComponent } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche-detail.component';
import { MembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';

describe('Component Tests', () => {
  describe('MembresCommissionsMarche Management Detail Component', () => {
    let comp: MembresCommissionsMarcheDetailComponent;
    let fixture: ComponentFixture<MembresCommissionsMarcheDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ membresCommissionsMarche: new MembresCommissionsMarche(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [MembresCommissionsMarcheDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(MembresCommissionsMarcheDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MembresCommissionsMarcheDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load membresCommissionsMarche on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.membresCommissionsMarche).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
