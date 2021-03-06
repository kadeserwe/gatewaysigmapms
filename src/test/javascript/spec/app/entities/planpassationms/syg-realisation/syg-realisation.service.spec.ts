import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SygRealisationService } from 'app/entities/planpassationms/syg-realisation/syg-realisation.service';
import { ISygRealisation, SygRealisation } from 'app/shared/model/planpassationms/syg-realisation.model';

describe('Service Tests', () => {
  describe('SygRealisation Service', () => {
    let injector: TestBed;
    let service: SygRealisationService;
    let httpMock: HttpTestingController;
    let elemDefault: ISygRealisation;
    let expectedResult: ISygRealisation | ISygRealisation[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(SygRealisationService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new SygRealisation(
        0,
        'AAAAAAA',
        currentDate,
        0,
        'AAAAAAA',
        0,
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        currentDate
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateAttribution: currentDate.format(DATE_FORMAT),
            dateReceptionDossier: currentDate.format(DATE_FORMAT),
            dateNonObjection: currentDate.format(DATE_FORMAT),
            dateAutorisation: currentDate.format(DATE_FORMAT),
            dateRecepNonObjection: currentDate.format(DATE_FORMAT),
            dateRecepDossCorrige: currentDate.format(DATE_FORMAT),
            datePubParPrmp: currentDate.format(DATE_FORMAT),
            dateOuverturePlis: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectOcmp: currentDate.format(DATE_FORMAT),
            dateRecepRapportEva: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectPtf: currentDate.format(DATE_FORMAT),
            dateExamenJuridique: currentDate.format(DATE_FORMAT),
            dateNotifContrat: currentDate.format(DATE_FORMAT),
            dateApprobationContrat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a SygRealisation', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateAttribution: currentDate.format(DATE_FORMAT),
            dateReceptionDossier: currentDate.format(DATE_FORMAT),
            dateNonObjection: currentDate.format(DATE_FORMAT),
            dateAutorisation: currentDate.format(DATE_FORMAT),
            dateRecepNonObjection: currentDate.format(DATE_FORMAT),
            dateRecepDossCorrige: currentDate.format(DATE_FORMAT),
            datePubParPrmp: currentDate.format(DATE_FORMAT),
            dateOuverturePlis: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectOcmp: currentDate.format(DATE_FORMAT),
            dateRecepRapportEva: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectPtf: currentDate.format(DATE_FORMAT),
            dateExamenJuridique: currentDate.format(DATE_FORMAT),
            dateNotifContrat: currentDate.format(DATE_FORMAT),
            dateApprobationContrat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateAttribution: currentDate,
            dateReceptionDossier: currentDate,
            dateNonObjection: currentDate,
            dateAutorisation: currentDate,
            dateRecepNonObjection: currentDate,
            dateRecepDossCorrige: currentDate,
            datePubParPrmp: currentDate,
            dateOuverturePlis: currentDate,
            dateRecepNonObjectOcmp: currentDate,
            dateRecepRapportEva: currentDate,
            dateRecepNonObjectPtf: currentDate,
            dateExamenJuridique: currentDate,
            dateNotifContrat: currentDate,
            dateApprobationContrat: currentDate,
          },
          returnedFromService
        );

        service.create(new SygRealisation()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a SygRealisation', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            dateAttribution: currentDate.format(DATE_FORMAT),
            delaiexecution: 1,
            objet: 'BBBBBB',
            montant: 1,
            examenDncmp: 1,
            examenPtf: 1,
            chapitreImputation: 'BBBBBB',
            autorisationEngagement: 'BBBBBB',
            dateReceptionDossier: currentDate.format(DATE_FORMAT),
            dateNonObjection: currentDate.format(DATE_FORMAT),
            dateAutorisation: currentDate.format(DATE_FORMAT),
            dateRecepNonObjection: currentDate.format(DATE_FORMAT),
            dateRecepDossCorrige: currentDate.format(DATE_FORMAT),
            datePubParPrmp: currentDate.format(DATE_FORMAT),
            dateOuverturePlis: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectOcmp: currentDate.format(DATE_FORMAT),
            dateRecepRapportEva: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectPtf: currentDate.format(DATE_FORMAT),
            dateExamenJuridique: currentDate.format(DATE_FORMAT),
            dateNotifContrat: currentDate.format(DATE_FORMAT),
            dateApprobationContrat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateAttribution: currentDate,
            dateReceptionDossier: currentDate,
            dateNonObjection: currentDate,
            dateAutorisation: currentDate,
            dateRecepNonObjection: currentDate,
            dateRecepDossCorrige: currentDate,
            datePubParPrmp: currentDate,
            dateOuverturePlis: currentDate,
            dateRecepNonObjectOcmp: currentDate,
            dateRecepRapportEva: currentDate,
            dateRecepNonObjectPtf: currentDate,
            dateExamenJuridique: currentDate,
            dateNotifContrat: currentDate,
            dateApprobationContrat: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of SygRealisation', () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            dateAttribution: currentDate.format(DATE_FORMAT),
            delaiexecution: 1,
            objet: 'BBBBBB',
            montant: 1,
            examenDncmp: 1,
            examenPtf: 1,
            chapitreImputation: 'BBBBBB',
            autorisationEngagement: 'BBBBBB',
            dateReceptionDossier: currentDate.format(DATE_FORMAT),
            dateNonObjection: currentDate.format(DATE_FORMAT),
            dateAutorisation: currentDate.format(DATE_FORMAT),
            dateRecepNonObjection: currentDate.format(DATE_FORMAT),
            dateRecepDossCorrige: currentDate.format(DATE_FORMAT),
            datePubParPrmp: currentDate.format(DATE_FORMAT),
            dateOuverturePlis: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectOcmp: currentDate.format(DATE_FORMAT),
            dateRecepRapportEva: currentDate.format(DATE_FORMAT),
            dateRecepNonObjectPtf: currentDate.format(DATE_FORMAT),
            dateExamenJuridique: currentDate.format(DATE_FORMAT),
            dateNotifContrat: currentDate.format(DATE_FORMAT),
            dateApprobationContrat: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateAttribution: currentDate,
            dateReceptionDossier: currentDate,
            dateNonObjection: currentDate,
            dateAutorisation: currentDate,
            dateRecepNonObjection: currentDate,
            dateRecepDossCorrige: currentDate,
            datePubParPrmp: currentDate,
            dateOuverturePlis: currentDate,
            dateRecepNonObjectOcmp: currentDate,
            dateRecepRapportEva: currentDate,
            dateRecepNonObjectPtf: currentDate,
            dateExamenJuridique: currentDate,
            dateNotifContrat: currentDate,
            dateApprobationContrat: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a SygRealisation', () => {
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
