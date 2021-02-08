import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { IPlisOuverture, PlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';

describe('Service Tests', () => {
  describe('PlisOuverture Service', () => {
    let injector: TestBed;
    let service: PlisOuvertureService;
    let httpMock: HttpTestingController;
    let elemDefault: IPlisOuverture;
    let expectedResult: IPlisOuverture | IPlisOuverture[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(PlisOuvertureService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new PlisOuverture(
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
        0,
        0,
        0,
        0,
        0,
        0,
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
            heuredepot: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a PlisOuverture', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateDepot: currentDate.format(DATE_FORMAT),
            heuredepot: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateDepot: currentDate,
            heuredepot: currentDate,
          },
          returnedFromService
        );

        service.create(new PlisOuverture()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a PlisOuverture', () => {
        const returnedFromService = Object.assign(
          {
            raisonSociale: 'BBBBBB',
            adresseMail: 'BBBBBB',
            commentaire: 'BBBBBB',
            rang: 'BBBBBB',
            ninea: 'BBBBBB',
            natCode: 'BBBBBB',
            monCode: 'BBBBBB',
            pvOffreFinanciere: 'BBBBBB',
            negociation: 'BBBBBB',
            montantOffert: 1,
            scoreFinancier: 1,
            prixEvalue: 1,
            scoreTechniquePondere: 1,
            scoreFinancierPondere: 1,
            scoreFinal: 1,
            montantDefinitif: 1,
            montantTVA: 1,
            montantDouane: 1,
            dateDepot: currentDate.format(DATE_FORMAT),
            heuredepot: currentDate.format(DATE_FORMAT),
            rabais: 1,
            scoreTechnique: 1,
            seuilAtteint: 1,
            classemenTechnique: 1,
            classementGeneral: 1,
            candidatRestreintID: 1,
            etatPreselection: 1,
            etatExamenPreliminaire: 1,
            critereQualification: 1,
            attributaireProvisoire: 1,
            offreTechnique: 1,
            offreFinanciere: 1,
            lettreSoumission: 1,
            valide: 1,
            numero: 1,
            garantie: 1,
            pieceRequise: 1,
            observationsOffres: 'BBBBBB',
            observationsCandidats: 'BBBBBB',
            modeReception: 'BBBBBB',
            notifie: 'BBBBBB',
            signatureOffre: 'BBBBBB',
            exhaustivite: 'BBBBBB',
            garantieSoumission: 'BBBBBB',
            conformite: 'BBBBBB',
            critereProvenance: 'BBBBBB',
            notePreselectionne: 1,
            autoriteId: 1,
            ajustement: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateDepot: currentDate,
            heuredepot: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of PlisOuverture', () => {
        const returnedFromService = Object.assign(
          {
            raisonSociale: 'BBBBBB',
            adresseMail: 'BBBBBB',
            commentaire: 'BBBBBB',
            rang: 'BBBBBB',
            ninea: 'BBBBBB',
            natCode: 'BBBBBB',
            monCode: 'BBBBBB',
            pvOffreFinanciere: 'BBBBBB',
            negociation: 'BBBBBB',
            montantOffert: 1,
            scoreFinancier: 1,
            prixEvalue: 1,
            scoreTechniquePondere: 1,
            scoreFinancierPondere: 1,
            scoreFinal: 1,
            montantDefinitif: 1,
            montantTVA: 1,
            montantDouane: 1,
            dateDepot: currentDate.format(DATE_FORMAT),
            heuredepot: currentDate.format(DATE_FORMAT),
            rabais: 1,
            scoreTechnique: 1,
            seuilAtteint: 1,
            classemenTechnique: 1,
            classementGeneral: 1,
            candidatRestreintID: 1,
            etatPreselection: 1,
            etatExamenPreliminaire: 1,
            critereQualification: 1,
            attributaireProvisoire: 1,
            offreTechnique: 1,
            offreFinanciere: 1,
            lettreSoumission: 1,
            valide: 1,
            numero: 1,
            garantie: 1,
            pieceRequise: 1,
            observationsOffres: 'BBBBBB',
            observationsCandidats: 'BBBBBB',
            modeReception: 'BBBBBB',
            notifie: 'BBBBBB',
            signatureOffre: 'BBBBBB',
            exhaustivite: 'BBBBBB',
            garantieSoumission: 'BBBBBB',
            conformite: 'BBBBBB',
            critereProvenance: 'BBBBBB',
            notePreselectionne: 1,
            autoriteId: 1,
            ajustement: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateDepot: currentDate,
            heuredepot: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a PlisOuverture', () => {
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
