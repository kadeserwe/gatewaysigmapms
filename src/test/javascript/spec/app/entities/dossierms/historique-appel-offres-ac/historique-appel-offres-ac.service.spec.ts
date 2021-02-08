import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { HistoriqueAppelOffresACService } from 'app/entities/dossierms/historique-appel-offres-ac/historique-appel-offres-ac.service';
import { IHistoriqueAppelOffresAC, HistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';

describe('Service Tests', () => {
  describe('HistoriqueAppelOffresAC Service', () => {
    let injector: TestBed;
    let service: HistoriqueAppelOffresACService;
    let httpMock: HttpTestingController;
    let elemDefault: IHistoriqueAppelOffresAC;
    let expectedResult: IHistoriqueAppelOffresAC | IHistoriqueAppelOffresAC[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(HistoriqueAppelOffresACService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new HistoriqueAppelOffresAC(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        currentDate,
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        0,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            histoacDatevalidation: currentDate.format(DATE_FORMAT),
            histoacDatecreationdossier: currentDate.format(DATE_FORMAT),
            histoDatevalidation: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a HistoriqueAppelOffresAC', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            histoacDatevalidation: currentDate.format(DATE_FORMAT),
            histoacDatecreationdossier: currentDate.format(DATE_FORMAT),
            histoDatevalidation: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            histoacDatevalidation: currentDate,
            histoacDatecreationdossier: currentDate,
            histoDatevalidation: currentDate,
          },
          returnedFromService
        );

        service.create(new HistoriqueAppelOffresAC()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a HistoriqueAppelOffresAC', () => {
        const returnedFromService = Object.assign(
          {
            histoacValidation: 'BBBBBB',
            histoacCommentaire: 'BBBBBB',
            histoacFichiervalidation: 'BBBBBB',
            histoacBorderau: 'BBBBBB',
            histoValidation: 'BBBBBB',
            histoCommentaire: 'BBBBBB',
            histoFichiervalidation: 'BBBBBB',
            daoFichier: 'BBBBBB',
            origine: 'BBBBBB',
            histoacDatevalidation: currentDate.format(DATE_FORMAT),
            histoacDatecreationdossier: currentDate.format(DATE_FORMAT),
            histoDatevalidation: currentDate.format(DATE_FORMAT),
            histoacAttribution: 1,
            histoacAc: 1,
            validerparNom: 'BBBBBB',
            validerparPrenom: 'BBBBBB',
            userId: 1,
            autiriteId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            histoacDatevalidation: currentDate,
            histoacDatecreationdossier: currentDate,
            histoDatevalidation: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of HistoriqueAppelOffresAC', () => {
        const returnedFromService = Object.assign(
          {
            histoacValidation: 'BBBBBB',
            histoacCommentaire: 'BBBBBB',
            histoacFichiervalidation: 'BBBBBB',
            histoacBorderau: 'BBBBBB',
            histoValidation: 'BBBBBB',
            histoCommentaire: 'BBBBBB',
            histoFichiervalidation: 'BBBBBB',
            daoFichier: 'BBBBBB',
            origine: 'BBBBBB',
            histoacDatevalidation: currentDate.format(DATE_FORMAT),
            histoacDatecreationdossier: currentDate.format(DATE_FORMAT),
            histoDatevalidation: currentDate.format(DATE_FORMAT),
            histoacAttribution: 1,
            histoacAc: 1,
            validerparNom: 'BBBBBB',
            validerparPrenom: 'BBBBBB',
            userId: 1,
            autiriteId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            histoacDatevalidation: currentDate,
            histoacDatecreationdossier: currentDate,
            histoDatevalidation: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a HistoriqueAppelOffresAC', () => {
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
