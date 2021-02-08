import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { RepresentantServTechDetailComponent } from 'app/entities/dossierms/representant-serv-tech/representant-serv-tech-detail.component';
import { RepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';

describe('Component Tests', () => {
  describe('RepresentantServTech Management Detail Component', () => {
    let comp: RepresentantServTechDetailComponent;
    let fixture: ComponentFixture<RepresentantServTechDetailComponent>;
    const route = ({ data: of({ representantServTech: new RepresentantServTech(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [RepresentantServTechDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(RepresentantServTechDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(RepresentantServTechDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load representantServTech on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.representantServTech).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
