import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PiecesPlisOuvertureDetailComponent } from 'app/entities/dossierms/pieces-plis-ouverture/pieces-plis-ouverture-detail.component';
import { PiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';

describe('Component Tests', () => {
  describe('PiecesPlisOuverture Management Detail Component', () => {
    let comp: PiecesPlisOuvertureDetailComponent;
    let fixture: ComponentFixture<PiecesPlisOuvertureDetailComponent>;
    const route = ({ data: of({ piecesPlisOuverture: new PiecesPlisOuverture(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PiecesPlisOuvertureDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PiecesPlisOuvertureDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PiecesPlisOuvertureDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load piecesPlisOuverture on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.piecesPlisOuverture).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
