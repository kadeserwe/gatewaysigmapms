import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PlisOuvertureDetailComponent } from 'app/entities/dossierms/plis-ouverture/plis-ouverture-detail.component';
import { PlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';

describe('Component Tests', () => {
  describe('PlisOuverture Management Detail Component', () => {
    let comp: PlisOuvertureDetailComponent;
    let fixture: ComponentFixture<PlisOuvertureDetailComponent>;
    const route = ({ data: of({ plisOuverture: new PlisOuverture(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PlisOuvertureDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PlisOuvertureDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PlisOuvertureDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load plisOuverture on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.plisOuverture).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
