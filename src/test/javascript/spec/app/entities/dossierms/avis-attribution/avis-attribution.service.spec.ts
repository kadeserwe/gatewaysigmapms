import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { AvisAttributionService } from 'app/entities/dossierms/avis-attribution/avis-attribution.service';
import { IAvisAttribution, AvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';

describe('Service Tests', () => {
  describe('AvisAttribution Service', () => {
    let injector: TestBed;
    let service: AvisAttributionService;
    let httpMock: HttpTestingController;
    let elemDefault: IAvisAttribution;
    let expectedResult: IAvisAttribution | IAvisAttribution[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(AvisAttributionService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new AvisAttribution(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        0,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            attriDate: currentDate.format(DATE_FORMAT),
            attridatepublication: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a AvisAttribution', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            attriDate: currentDate.format(DATE_FORMAT),
            attridatepublication: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            attriDate: currentDate,
            attridatepublication: currentDate,
          },
          returnedFromService
        );

        service.create(new AvisAttribution()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a AvisAttribution', () => {
        const returnedFromService = Object.assign(
          {
            attriObjet: 'BBBBBB',
            attriType: 'BBBBBB',
            attritexte: 'BBBBBB',
            attriRef: 'BBBBBB',
            attrifichier: 'BBBBBB',
            attriRaisonsocial: 'BBBBBB',
            attriDate: currentDate.format(DATE_FORMAT),
            attridatepublication: currentDate.format(DATE_FORMAT),
            attriPub: 1,
            autiriteId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            attriDate: currentDate,
            attridatepublication: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of AvisAttribution', () => {
        const returnedFromService = Object.assign(
          {
            attriObjet: 'BBBBBB',
            attriType: 'BBBBBB',
            attritexte: 'BBBBBB',
            attriRef: 'BBBBBB',
            attrifichier: 'BBBBBB',
            attriRaisonsocial: 'BBBBBB',
            attriDate: currentDate.format(DATE_FORMAT),
            attridatepublication: currentDate.format(DATE_FORMAT),
            attriPub: 1,
            autiriteId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            attriDate: currentDate,
            attridatepublication: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a AvisAttribution', () => {
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
