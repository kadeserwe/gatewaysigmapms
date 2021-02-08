import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { RetraitRegistreDAOService } from 'app/entities/dossierms/retrait-registre-dao/retrait-registre-dao.service';
import { IRetraitRegistreDAO, RetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';

describe('Service Tests', () => {
  describe('RetraitRegistreDAO Service', () => {
    let injector: TestBed;
    let service: RetraitRegistreDAOService;
    let httpMock: HttpTestingController;
    let elemDefault: IRetraitRegistreDAO;
    let expectedResult: IRetraitRegistreDAO | IRetraitRegistreDAO[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(RetraitRegistreDAOService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new RetraitRegistreDAO(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateRetrait: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a RetraitRegistreDAO', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateRetrait: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateRetrait: currentDate,
          },
          returnedFromService
        );

        service.create(new RetraitRegistreDAO()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a RetraitRegistreDAO', () => {
        const returnedFromService = Object.assign(
          {
            nomSoumissionnaire: 'BBBBBB',
            telephone: 'BBBBBB',
            email: 'BBBBBB',
            modePaiement: 'BBBBBB',
            ninea: 'BBBBBB',
            montantVerse: 1,
            dateRetrait: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateRetrait: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of RetraitRegistreDAO', () => {
        const returnedFromService = Object.assign(
          {
            nomSoumissionnaire: 'BBBBBB',
            telephone: 'BBBBBB',
            email: 'BBBBBB',
            modePaiement: 'BBBBBB',
            ninea: 'BBBBBB',
            montantVerse: 1,
            dateRetrait: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateRetrait: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a RetraitRegistreDAO', () => {
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
