import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { DocumentService } from 'app/entities/dossierms/document/document.service';
import { IDocument, Document } from 'app/shared/model/dossierms/document.model';

describe('Service Tests', () => {
  describe('Document Service', () => {
    let injector: TestBed;
    let service: DocumentService;
    let httpMock: HttpTestingController;
    let elemDefault: IDocument;
    let expectedResult: IDocument | IDocument[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DocumentService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Document(
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
        'AAAAAAA',
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            date: currentDate.format(DATE_FORMAT),
            heure: currentDate.format(DATE_FORMAT),
            dateDemandePublication: currentDate.format(DATE_FORMAT),
            dateLimiteDepot: currentDate.format(DATE_FORMAT),
            heureLimiteDepot: currentDate.format(DATE_FORMAT),
            dateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            heureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Document', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            date: currentDate.format(DATE_FORMAT),
            heure: currentDate.format(DATE_FORMAT),
            dateDemandePublication: currentDate.format(DATE_FORMAT),
            dateLimiteDepot: currentDate.format(DATE_FORMAT),
            heureLimiteDepot: currentDate.format(DATE_FORMAT),
            dateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            heureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            date: currentDate,
            heure: currentDate,
            dateDemandePublication: currentDate,
            dateLimiteDepot: currentDate,
            heureLimiteDepot: currentDate,
            dateOuvertueDesplis: currentDate,
            heureOuvertureDesPlis: currentDate,
          },
          returnedFromService
        );

        service.create(new Document()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Document', () => {
        const returnedFromService = Object.assign(
          {
            typeDocument: 'BBBBBB',
            textPVOuverture: 'BBBBBB',
            nomFichier: 'BBBBBB',
            libelle: 'BBBBBB',
            reference: 'BBBBBB',
            objet: 'BBBBBB',
            origine: 'BBBBBB',
            lieuAcquisitionDAO: 'BBBBBB',
            fichierDemandePublication: 'BBBBBB',
            fichierDC: 'BBBBBB',
            fichierAR: 'BBBBBB',
            date: currentDate.format(DATE_FORMAT),
            heure: currentDate.format(DATE_FORMAT),
            dateDemandePublication: currentDate.format(DATE_FORMAT),
            dateLimiteDepot: currentDate.format(DATE_FORMAT),
            heureLimiteDepot: currentDate.format(DATE_FORMAT),
            dateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            heureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
            autoriteId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            date: currentDate,
            heure: currentDate,
            dateDemandePublication: currentDate,
            dateLimiteDepot: currentDate,
            heureLimiteDepot: currentDate,
            dateOuvertueDesplis: currentDate,
            heureOuvertureDesPlis: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Document', () => {
        const returnedFromService = Object.assign(
          {
            typeDocument: 'BBBBBB',
            textPVOuverture: 'BBBBBB',
            nomFichier: 'BBBBBB',
            libelle: 'BBBBBB',
            reference: 'BBBBBB',
            objet: 'BBBBBB',
            origine: 'BBBBBB',
            lieuAcquisitionDAO: 'BBBBBB',
            fichierDemandePublication: 'BBBBBB',
            fichierDC: 'BBBBBB',
            fichierAR: 'BBBBBB',
            date: currentDate.format(DATE_FORMAT),
            heure: currentDate.format(DATE_FORMAT),
            dateDemandePublication: currentDate.format(DATE_FORMAT),
            dateLimiteDepot: currentDate.format(DATE_FORMAT),
            heureLimiteDepot: currentDate.format(DATE_FORMAT),
            dateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            heureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
            autoriteId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            date: currentDate,
            heure: currentDate,
            dateDemandePublication: currentDate,
            dateLimiteDepot: currentDate,
            heureLimiteDepot: currentDate,
            dateOuvertueDesplis: currentDate,
            heureOuvertureDesPlis: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Document', () => {
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
