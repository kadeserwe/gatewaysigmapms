import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DossiersPieceDetailComponent } from 'app/entities/dossierms/dossiers-piece/dossiers-piece-detail.component';
import { DossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';

describe('Component Tests', () => {
  describe('DossiersPiece Management Detail Component', () => {
    let comp: DossiersPieceDetailComponent;
    let fixture: ComponentFixture<DossiersPieceDetailComponent>;
    const route = ({ data: of({ dossiersPiece: new DossiersPiece(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DossiersPieceDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DossiersPieceDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DossiersPieceDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load dossiersPiece on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dossiersPiece).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
