import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesRecusDetailComponent } from 'app/entities/dossierms/pieces-recus/pieces-recus-detail.component';
import { PiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';

describe('Component Tests', () => {
  describe('PiecesRecus Management Detail Component', () => {
    let comp: PiecesRecusDetailComponent;
    let fixture: ComponentFixture<PiecesRecusDetailComponent>;
    const route = ({ data: of({ piecesRecus: new PiecesRecus(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesRecusDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PiecesRecusDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PiecesRecusDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load piecesRecus on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.piecesRecus).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
