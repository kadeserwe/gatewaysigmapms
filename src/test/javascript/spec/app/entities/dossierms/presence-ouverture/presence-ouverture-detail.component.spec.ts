import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { PresenceOuvertureDetailComponent } from 'app/entities/dossierms/presence-ouverture/presence-ouverture-detail.component';
import { PresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';

describe('Component Tests', () => {
  describe('PresenceOuverture Management Detail Component', () => {
    let comp: PresenceOuvertureDetailComponent;
    let fixture: ComponentFixture<PresenceOuvertureDetailComponent>;
    const route = ({ data: of({ presenceOuverture: new PresenceOuverture(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [PresenceOuvertureDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PresenceOuvertureDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PresenceOuvertureDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load presenceOuverture on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.presenceOuverture).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
