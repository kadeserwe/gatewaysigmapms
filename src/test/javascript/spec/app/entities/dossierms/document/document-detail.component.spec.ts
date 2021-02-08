import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewaysigmapTestModule } from '../../../../test.module';
import { DocumentDetailComponent } from 'app/entities/dossierms/document/document-detail.component';
import { Document } from 'app/shared/model/dossierms/document.model';

describe('Component Tests', () => {
  describe('Document Management Detail Component', () => {
    let comp: DocumentDetailComponent;
    let fixture: ComponentFixture<DocumentDetailComponent>;
    const route = ({ data: of({ document: new Document(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewaysigmapTestModule],
        declarations: [DocumentDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(DocumentDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DocumentDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load document on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.document).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});