import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { MembresCommissionsMarcheService } from 'app/entities/dossierms/membres-commissions-marche/membres-commissions-marche.service';
import { IMembresCommissionsMarche, MembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';

describe('Service Tests', () => {
  describe('MembresCommissionsMarche Service', () => {
    let injector: TestBed;
    let service: MembresCommissionsMarcheService;
    let httpMock: HttpTestingController;
    let elemDefault: IMembresCommissionsMarche;
    let expectedResult: IMembresCommissionsMarche | IMembresCommissionsMarche[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(MembresCommissionsMarcheService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new MembresCommissionsMarche(
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
        'AAAAAAA',
        'image/png',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        currentDate
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateArrete: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a MembresCommissionsMarche', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateArrete: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateArrete: currentDate,
          },
          returnedFromService
        );

        service.create(new MembresCommissionsMarche()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a MembresCommissionsMarche', () => {
        const returnedFromService = Object.assign(
          {
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            fonction: 'BBBBBB',
            telephone: 'BBBBBB',
            email: 'BBBBBB',
            gestion: 'BBBBBB',
            statut: 'BBBBBB',
            typeMembre: 'BBBBBB',
            arrete: 'BBBBBB',
            fichierArrete: 'BBBBBB',
            photo: 'BBBBBB',
            type: 'BBBBBB',
            origine: 'BBBBBB',
            etapePI: 1,
            flagPresident: 1,
            actif: 1,
            position: 1,
            reconduit: 1,
            autoriteId: 1,
            membre: 1,
            dateArrete: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateArrete: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of MembresCommissionsMarche', () => {
        const returnedFromService = Object.assign(
          {
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            fonction: 'BBBBBB',
            telephone: 'BBBBBB',
            email: 'BBBBBB',
            gestion: 'BBBBBB',
            statut: 'BBBBBB',
            typeMembre: 'BBBBBB',
            arrete: 'BBBBBB',
            fichierArrete: 'BBBBBB',
            photo: 'BBBBBB',
            type: 'BBBBBB',
            origine: 'BBBBBB',
            etapePI: 1,
            flagPresident: 1,
            actif: 1,
            position: 1,
            reconduit: 1,
            autoriteId: 1,
            membre: 1,
            dateArrete: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateArrete: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a MembresCommissionsMarche', () => {
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
