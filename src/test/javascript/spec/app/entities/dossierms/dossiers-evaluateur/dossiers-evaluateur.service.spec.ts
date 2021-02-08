import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { DossiersEvaluateurService } from 'app/entities/dossierms/dossiers-evaluateur/dossiers-evaluateur.service';
import { IDossiersEvaluateur, DossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';

describe('Service Tests', () => {
  describe('DossiersEvaluateur Service', () => {
    let injector: TestBed;
    let service: DossiersEvaluateurService;
    let httpMock: HttpTestingController;
    let elemDefault: IDossiersEvaluateur;
    let expectedResult: IDossiersEvaluateur | IDossiersEvaluateur[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DossiersEvaluateurService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new DossiersEvaluateur(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, 'AAAAAAA', 'AAAAAAA', currentDate, currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateRemise: currentDate.format(DATE_FORMAT),
            dateLimite: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DossiersEvaluateur', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateRemise: currentDate.format(DATE_FORMAT),
            dateLimite: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateRemise: currentDate,
            dateLimite: currentDate,
          },
          returnedFromService
        );

        service.create(new DossiersEvaluateur()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DossiersEvaluateur', () => {
        const returnedFromService = Object.assign(
          {
            commission: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            telephone: 1,
            email: 'BBBBBB',
            fonction: 'BBBBBB',
            dateRemise: currentDate.format(DATE_FORMAT),
            dateLimite: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateRemise: currentDate,
            dateLimite: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DossiersEvaluateur', () => {
        const returnedFromService = Object.assign(
          {
            commission: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            telephone: 1,
            email: 'BBBBBB',
            fonction: 'BBBBBB',
            dateRemise: currentDate.format(DATE_FORMAT),
            dateLimite: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateRemise: currentDate,
            dateLimite: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a DossiersEvaluateur', () => {
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
