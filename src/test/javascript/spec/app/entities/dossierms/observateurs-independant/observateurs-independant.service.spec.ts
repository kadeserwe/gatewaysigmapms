import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { ObservateursIndependantService } from 'app/entities/dossierms/observateurs-independant/observateurs-independant.service';
import { IObservateursIndependant, ObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';

describe('Service Tests', () => {
  describe('ObservateursIndependant Service', () => {
    let injector: TestBed;
    let service: ObservateursIndependantService;
    let httpMock: HttpTestingController;
    let elemDefault: IObservateursIndependant;
    let expectedResult: IObservateursIndependant | IObservateursIndependant[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ObservateursIndependantService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new ObservateursIndependant(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', currentDate, 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateConvocation: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a ObservateursIndependant', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateConvocation: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateConvocation: currentDate,
          },
          returnedFromService
        );

        service.create(new ObservateursIndependant()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a ObservateursIndependant', () => {
        const returnedFromService = Object.assign(
          {
            representant: 'BBBBBB',
            qualite: 'BBBBBB',
            presence: 'BBBBBB',
            dateConvocation: currentDate.format(DATE_FORMAT),
            etape: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateConvocation: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of ObservateursIndependant', () => {
        const returnedFromService = Object.assign(
          {
            representant: 'BBBBBB',
            qualite: 'BBBBBB',
            presence: 'BBBBBB',
            dateConvocation: currentDate.format(DATE_FORMAT),
            etape: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateConvocation: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a ObservateursIndependant', () => {
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
