import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { LotsSoumissionnaireService } from 'app/entities/dossierms/lots-soumissionnaire/lots-soumissionnaire.service';
import { ILotsSoumissionnaire, LotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';

describe('Service Tests', () => {
  describe('LotsSoumissionnaire Service', () => {
    let injector: TestBed;
    let service: LotsSoumissionnaireService;
    let httpMock: HttpTestingController;
    let elemDefault: ILotsSoumissionnaire;
    let expectedResult: ILotsSoumissionnaire | ILotsSoumissionnaire[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(LotsSoumissionnaireService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new LotsSoumissionnaire(
        0,
        'AAAAAAA',
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
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        currentDate,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateDepot: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a LotsSoumissionnaire', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateDepot: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateDepot: currentDate,
          },
          returnedFromService
        );

        service.create(new LotsSoumissionnaire()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a LotsSoumissionnaire', () => {
        const returnedFromService = Object.assign(
          {
            raisonsociale: 'BBBBBB',
            numero: 'BBBBBB',
            email: 'BBBBBB',
            commentaire: 'BBBBBB',
            lotsoumis: 'BBBBBB',
            lotrecu: 'BBBBBB',
            libelle: 'BBBBBB',
            elimine: 'BBBBBB',
            montantOffert: 1,
            montantDefinitif: 1,
            montantGarantie: 1,
            montantTVA: 1,
            montantDouane: 1,
            montantTTC: 1,
            rabais: 1,
            rang: 1,
            scoreTechnique: 1,
            scoreFinancier: 1,
            prixEvalue: 1,
            scoreTechniquePondere: 1,
            scoreFinancierPondere: 1,
            scoreFinal: 1,
            dateDepot: currentDate.format(DATE_FORMAT),
            classementGeneral: 1,
            classemenTechnique: 1,
            etatPreselection: 1,
            etatExamenPreliminaire: 1,
            critereQualification: 1,
            attributaireProvisoire: 1,
            plilValide: 1,
            lettreSoumission: 1,
            offreTechnique: 1,
            offreFinanciere: 1,
            plinumero: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateDepot: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of LotsSoumissionnaire', () => {
        const returnedFromService = Object.assign(
          {
            raisonsociale: 'BBBBBB',
            numero: 'BBBBBB',
            email: 'BBBBBB',
            commentaire: 'BBBBBB',
            lotsoumis: 'BBBBBB',
            lotrecu: 'BBBBBB',
            libelle: 'BBBBBB',
            elimine: 'BBBBBB',
            montantOffert: 1,
            montantDefinitif: 1,
            montantGarantie: 1,
            montantTVA: 1,
            montantDouane: 1,
            montantTTC: 1,
            rabais: 1,
            rang: 1,
            scoreTechnique: 1,
            scoreFinancier: 1,
            prixEvalue: 1,
            scoreTechniquePondere: 1,
            scoreFinancierPondere: 1,
            scoreFinal: 1,
            dateDepot: currentDate.format(DATE_FORMAT),
            classementGeneral: 1,
            classemenTechnique: 1,
            etatPreselection: 1,
            etatExamenPreliminaire: 1,
            critereQualification: 1,
            attributaireProvisoire: 1,
            plilValide: 1,
            lettreSoumission: 1,
            offreTechnique: 1,
            offreFinanciere: 1,
            plinumero: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateDepot: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a LotsSoumissionnaire', () => {
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
