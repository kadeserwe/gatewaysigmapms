import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { AttributionService } from 'app/entities/dossierms/attribution/attribution.service';
import { IAttribution, Attribution } from 'app/shared/model/dossierms/attribution.model';

describe('Service Tests', () => {
  describe('Attribution Service', () => {
    let injector: TestBed;
    let service: AttributionService;
    let httpMock: HttpTestingController;
    let elemDefault: IAttribution;
    let expectedResult: IAttribution | IAttribution[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(AttributionService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Attribution(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        0,
        0,
        0,
        currentDate,
        currentDate,
        currentDate
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            datePublicationProvisoire: currentDate.format(DATE_FORMAT),
            datePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dateattribution: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Attribution', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            datePublicationProvisoire: currentDate.format(DATE_FORMAT),
            datePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dateattribution: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            datePublicationProvisoire: currentDate,
            datePublicationDefinitive: currentDate,
            dateattribution: currentDate,
          },
          returnedFromService
        );

        service.create(new Attribution()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Attribution', () => {
        const returnedFromService = Object.assign(
          {
            referencePlandePassation: 'BBBBBB',
            referenceAvisGeneral: 'BBBBBB',
            attributaireProvisoire: 'BBBBBB',
            commentaire: 'BBBBBB',
            commentaireDefinitif: 'BBBBBB',
            nomFichierDef: 'BBBBBB',
            attriType: 'BBBBBB',
            montantMarche: 1,
            montantdefinitif: 1,
            moisExecution: 1,
            semaineExecution: 1,
            joursExecution: 1,
            datePublicationProvisoire: currentDate.format(DATE_FORMAT),
            datePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dateattribution: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            datePublicationProvisoire: currentDate,
            datePublicationDefinitive: currentDate,
            dateattribution: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Attribution', () => {
        const returnedFromService = Object.assign(
          {
            referencePlandePassation: 'BBBBBB',
            referenceAvisGeneral: 'BBBBBB',
            attributaireProvisoire: 'BBBBBB',
            commentaire: 'BBBBBB',
            commentaireDefinitif: 'BBBBBB',
            nomFichierDef: 'BBBBBB',
            attriType: 'BBBBBB',
            montantMarche: 1,
            montantdefinitif: 1,
            moisExecution: 1,
            semaineExecution: 1,
            joursExecution: 1,
            datePublicationProvisoire: currentDate.format(DATE_FORMAT),
            datePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dateattribution: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            datePublicationProvisoire: currentDate,
            datePublicationDefinitive: currentDate,
            dateattribution: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Attribution', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
