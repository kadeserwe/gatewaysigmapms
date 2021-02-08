import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { AppelOffreService } from 'app/entities/dossierms/appel-offre/appel-offre.service';
import { IAppelOffre, AppelOffre } from 'app/shared/model/dossierms/appel-offre.model';

describe('Service Tests', () => {
  describe('AppelOffre Service', () => {
    let injector: TestBed;
    let service: AppelOffreService;
    let httpMock: HttpTestingController;
    let elemDefault: IAppelOffre;
    let expectedResult: IAppelOffre | IAppelOffre[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(AppelOffreService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new AppelOffre(
        0,
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
        'AAAAAAA',
        'AAAAAAA',
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
            apoDatecreation: currentDate.format(DATE_FORMAT),
            apoDateAutorisation: currentDate.format(DATE_FORMAT),
            apoDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            apoDateRejet: currentDate.format(DATE_FORMAT),
            apoDateMiseAutorisation: currentDate.format(DATE_FORMAT),
            dateStopProcedure: currentDate.format(DATE_FORMAT),
            dateAffectationDossier: currentDate.format(DATE_FORMAT),
            apoDatePVOuverturepli: currentDate.format(DATE_FORMAT),
            apoDateVersement: currentDate.format(DATE_FORMAT),
            datePubListeRestreinte: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a AppelOffre', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            apoDatecreation: currentDate.format(DATE_FORMAT),
            apoDateAutorisation: currentDate.format(DATE_FORMAT),
            apoDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            apoDateRejet: currentDate.format(DATE_FORMAT),
            apoDateMiseAutorisation: currentDate.format(DATE_FORMAT),
            dateStopProcedure: currentDate.format(DATE_FORMAT),
            dateAffectationDossier: currentDate.format(DATE_FORMAT),
            apoDatePVOuverturepli: currentDate.format(DATE_FORMAT),
            apoDateVersement: currentDate.format(DATE_FORMAT),
            datePubListeRestreinte: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            apoDatecreation: currentDate,
            apoDateAutorisation: currentDate,
            apoDateDemandeAutorisation: currentDate,
            apoDateRejet: currentDate,
            apoDateMiseAutorisation: currentDate,
            dateStopProcedure: currentDate,
            dateAffectationDossier: currentDate,
            apoDatePVOuverturepli: currentDate,
            apoDateVersement: currentDate,
            datePubListeRestreinte: currentDate,
          },
          returnedFromService
        );

        service.create(new AppelOffre()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a AppelOffre', () => {
        const returnedFromService = Object.assign(
          {
            apoDatecreation: currentDate.format(DATE_FORMAT),
            apoDateAutorisation: currentDate.format(DATE_FORMAT),
            apoDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            apoDateRejet: currentDate.format(DATE_FORMAT),
            apoDateMiseAutorisation: currentDate.format(DATE_FORMAT),
            dateStopProcedure: currentDate.format(DATE_FORMAT),
            dateAffectationDossier: currentDate.format(DATE_FORMAT),
            apoDatePVOuverturepli: currentDate.format(DATE_FORMAT),
            apoDateVersement: currentDate.format(DATE_FORMAT),
            datePubListeRestreinte: currentDate.format(DATE_FORMAT),
            apoProjet: 'BBBBBB',
            apoObjet: 'BBBBBB',
            apoReference: 'BBBBBB',
            apoNumeroPretCredit: 'BBBBBB',
            apoCommentaireAutorisation: 'BBBBBB',
            apoFichierMiseAutorisation: 'BBBBBB',
            numeroMarche: 'BBBBBB',
            motifStopProcedure: 'BBBBBB',
            apoFichierPV: 'BBBBBB',
            apoFichierValidation: 'BBBBBB',
            apoAutorisationPrealable: 'BBBBBB',
            apoFichierAutorisationPrealable: 'BBBBBB',
            apoReferenceRequeteAc: 'BBBBBB',
            apoRapportSpecial: 'BBBBBB',
            apoReferenceCommunication: 'BBBBBB',
            apoReleveConseil: 'BBBBBB',
            apoFichierRapportSpecial: 'BBBBBB',
            apoFichierReleveConseil: 'BBBBBB',
            pubListeRestreinte: 'BBBBBB',
            fichierListeRestreinte: 'BBBBBB',
            apoMontantEstime: 1,
            apoMontantVersement: 1,
            apoResponsableDCMP: 1,
            etatSeuil: 1,
            apoStatut: 'BBBBBB',
            apoValide: 'BBBBBB',
            apoNbreDAO: 1,
            apoNbreDC: 1,
            apoEtatValidation: 1,
            autiriteId: 1,
            realisationId: 1,
            modepassationId: 1,
            typemarcheId: 1,
            modeselectionId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            apoDatecreation: currentDate,
            apoDateAutorisation: currentDate,
            apoDateDemandeAutorisation: currentDate,
            apoDateRejet: currentDate,
            apoDateMiseAutorisation: currentDate,
            dateStopProcedure: currentDate,
            dateAffectationDossier: currentDate,
            apoDatePVOuverturepli: currentDate,
            apoDateVersement: currentDate,
            datePubListeRestreinte: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of AppelOffre', () => {
        const returnedFromService = Object.assign(
          {
            apoDatecreation: currentDate.format(DATE_FORMAT),
            apoDateAutorisation: currentDate.format(DATE_FORMAT),
            apoDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            apoDateRejet: currentDate.format(DATE_FORMAT),
            apoDateMiseAutorisation: currentDate.format(DATE_FORMAT),
            dateStopProcedure: currentDate.format(DATE_FORMAT),
            dateAffectationDossier: currentDate.format(DATE_FORMAT),
            apoDatePVOuverturepli: currentDate.format(DATE_FORMAT),
            apoDateVersement: currentDate.format(DATE_FORMAT),
            datePubListeRestreinte: currentDate.format(DATE_FORMAT),
            apoProjet: 'BBBBBB',
            apoObjet: 'BBBBBB',
            apoReference: 'BBBBBB',
            apoNumeroPretCredit: 'BBBBBB',
            apoCommentaireAutorisation: 'BBBBBB',
            apoFichierMiseAutorisation: 'BBBBBB',
            numeroMarche: 'BBBBBB',
            motifStopProcedure: 'BBBBBB',
            apoFichierPV: 'BBBBBB',
            apoFichierValidation: 'BBBBBB',
            apoAutorisationPrealable: 'BBBBBB',
            apoFichierAutorisationPrealable: 'BBBBBB',
            apoReferenceRequeteAc: 'BBBBBB',
            apoRapportSpecial: 'BBBBBB',
            apoReferenceCommunication: 'BBBBBB',
            apoReleveConseil: 'BBBBBB',
            apoFichierRapportSpecial: 'BBBBBB',
            apoFichierReleveConseil: 'BBBBBB',
            pubListeRestreinte: 'BBBBBB',
            fichierListeRestreinte: 'BBBBBB',
            apoMontantEstime: 1,
            apoMontantVersement: 1,
            apoResponsableDCMP: 1,
            etatSeuil: 1,
            apoStatut: 'BBBBBB',
            apoValide: 'BBBBBB',
            apoNbreDAO: 1,
            apoNbreDC: 1,
            apoEtatValidation: 1,
            autiriteId: 1,
            realisationId: 1,
            modepassationId: 1,
            typemarcheId: 1,
            modeselectionId: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            apoDatecreation: currentDate,
            apoDateAutorisation: currentDate,
            apoDateDemandeAutorisation: currentDate,
            apoDateRejet: currentDate,
            apoDateMiseAutorisation: currentDate,
            dateStopProcedure: currentDate,
            dateAffectationDossier: currentDate,
            apoDatePVOuverturepli: currentDate,
            apoDateVersement: currentDate,
            datePubListeRestreinte: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a AppelOffre', () => {
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
