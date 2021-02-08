import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { ContratService } from 'app/entities/dossierms/contrat/contrat.service';
import { IContrat, Contrat } from 'app/shared/model/dossierms/contrat.model';

describe('Service Tests', () => {
  describe('Contrat Service', () => {
    let injector: TestBed;
    let service: ContratService;
    let httpMock: HttpTestingController;
    let elemDefault: IContrat;
    let expectedResult: IContrat | IContrat[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ContratService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Contrat(
        0,
        0,
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
        0,
        0,
        false,
        false,
        0,
        0,
        0,
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            conDateSignature: currentDate.format(DATE_FORMAT),
            conDateApprobation: currentDate.format(DATE_FORMAT),
            conDateNotification: currentDate.format(DATE_FORMAT),
            conDateRecepProvisoire: currentDate.format(DATE_FORMAT),
            conDateRecepDefinitive: currentDate.format(DATE_FORMAT),
            conDateOrdreDemarrage: currentDate.format(DATE_FORMAT),
            condateAttributionProvisoire: currentDate.format(DATE_FORMAT),
            condateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            conDatePaiement: currentDate.format(DATE_FORMAT),
            dateDemandeImmatriculation: currentDate.format(DATE_FORMAT),
            dateImmatriculation: currentDate.format(DATE_FORMAT),
            datePub: currentDate.format(DATE_FORMAT),
            dateDemandePubContrat: currentDate.format(DATE_FORMAT),
            conDateCreation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateautorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateRejet: currentDate.format(DATE_FORMAT),
            renouvcontDateRetourApprobation: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Contrat', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            conDateSignature: currentDate.format(DATE_FORMAT),
            conDateApprobation: currentDate.format(DATE_FORMAT),
            conDateNotification: currentDate.format(DATE_FORMAT),
            conDateRecepProvisoire: currentDate.format(DATE_FORMAT),
            conDateRecepDefinitive: currentDate.format(DATE_FORMAT),
            conDateOrdreDemarrage: currentDate.format(DATE_FORMAT),
            condateAttributionProvisoire: currentDate.format(DATE_FORMAT),
            condateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            conDatePaiement: currentDate.format(DATE_FORMAT),
            dateDemandeImmatriculation: currentDate.format(DATE_FORMAT),
            dateImmatriculation: currentDate.format(DATE_FORMAT),
            datePub: currentDate.format(DATE_FORMAT),
            dateDemandePubContrat: currentDate.format(DATE_FORMAT),
            conDateCreation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateautorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateRejet: currentDate.format(DATE_FORMAT),
            renouvcontDateRetourApprobation: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            conDateSignature: currentDate,
            conDateApprobation: currentDate,
            conDateNotification: currentDate,
            conDateRecepProvisoire: currentDate,
            conDateRecepDefinitive: currentDate,
            conDateOrdreDemarrage: currentDate,
            condateAttributionProvisoire: currentDate,
            condateAttributionDefinitive: currentDate,
            conDatePaiement: currentDate,
            dateDemandeImmatriculation: currentDate,
            dateImmatriculation: currentDate,
            datePub: currentDate,
            dateDemandePubContrat: currentDate,
            conDateCreation: currentDate,
            renouvcontDateDemandeAutorisation: currentDate,
            renouvcontDateautorisation: currentDate,
            renouvcontDateDemandeExamenJuridique: currentDate,
            renouvcontDateExamenJuridique: currentDate,
            renouvcontDateDemandeApprobation: currentDate,
            renouvcontDateApprobation: currentDate,
            renouvcontDateRejet: currentDate,
            renouvcontDateRetourApprobation: currentDate,
          },
          returnedFromService
        );

        service.create(new Contrat()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Contrat', () => {
        const returnedFromService = Object.assign(
          {
            montant: 1,
            montantVerse: 1,
            conDateSignature: currentDate.format(DATE_FORMAT),
            conDateApprobation: currentDate.format(DATE_FORMAT),
            conDateNotification: currentDate.format(DATE_FORMAT),
            conDateRecepProvisoire: currentDate.format(DATE_FORMAT),
            conDateRecepDefinitive: currentDate.format(DATE_FORMAT),
            conDateOrdreDemarrage: currentDate.format(DATE_FORMAT),
            condateAttributionProvisoire: currentDate.format(DATE_FORMAT),
            condateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            conDatePaiement: currentDate.format(DATE_FORMAT),
            dateDemandeImmatriculation: currentDate.format(DATE_FORMAT),
            dateImmatriculation: currentDate.format(DATE_FORMAT),
            datePub: currentDate.format(DATE_FORMAT),
            dateDemandePubContrat: currentDate.format(DATE_FORMAT),
            conDateCreation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateautorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateRejet: currentDate.format(DATE_FORMAT),
            renouvcontDateRetourApprobation: currentDate.format(DATE_FORMAT),
            conCommentSignature: 'BBBBBB',
            conRefSignature: 'BBBBBB',
            conCommentApprobation: 'BBBBBB',
            conRefApprobation: 'BBBBBB',
            conCommentNotification: 'BBBBBB',
            conRefNotification: 'BBBBBB',
            conFichierRecepProvisoire: 'BBBBBB',
            conCommentRecepProvisoire: 'BBBBBB',
            conFichierRecepDefinitive: 'BBBBBB',
            conCommentRecepDefinitive: 'BBBBBB',
            conFichierOrdreDemarrage: 'BBBBBB',
            conCommentOrdreDemarrage: 'BBBBBB',
            conRefAttributionProvisoire: 'BBBBBB',
            conCommentaireAttributionProvisoire: 'BBBBBB',
            conRefAttributionDefinitive: 'BBBBBB',
            conCommentaireAttributionDefinitive: 'BBBBBB',
            conStatut: 'BBBBBB',
            numMatriculation: 'BBBBBB',
            conCommentaireDmdmat: 'BBBBBB',
            conCommentaireMatriculation: 'BBBBBB',
            concSituation: 'BBBBBB',
            nationnalite: 'BBBBBB',
            fichierImmatricule: 'BBBBBB',
            fichierJustificatif: 'BBBBBB',
            commentairePub: 'BBBBBB',
            fichierContrat: 'BBBBBB',
            conCommentDemandePub: 'BBBBBB',
            renouvcontFichierAutorisationPrealable: 'BBBBBB',
            renouvcontFichierExamenJuridique: 'BBBBBB',
            renouvcontFichierContratSigne: 'BBBBBB',
            renouvcontFichierPageGarde: 'BBBBBB',
            renouvcontFichierPageSignature: 'BBBBBB',
            renouvcontFichierRapportMotivation: 'BBBBBB',
            renouvcontFichierProjetContrat: 'BBBBBB',
            renouvcontCommentAutorisation: 'BBBBBB',
            renouvcontCommentDemandeApprobation: 'BBBBBB',
            renouvcontCommentExamenJuridique: 'BBBBBB',
            autoriteId: 1,
            serviceId: 1,
            modePassationId: 1,
            typeMarcheId: 1,
            immatriculation: 1,
            delai: 1,
            renouvcontImmatStatut: true,
            renouvcontPubStatut: true,
            renouvcontAutorisationStatut: 1,
            renouvcontExamenJuridiqueStatut: 1,
            renouvcontApprobationStatut: 1,
            etatContratdebase: 'BBBBBB',
            libelleLot: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            conDateSignature: currentDate,
            conDateApprobation: currentDate,
            conDateNotification: currentDate,
            conDateRecepProvisoire: currentDate,
            conDateRecepDefinitive: currentDate,
            conDateOrdreDemarrage: currentDate,
            condateAttributionProvisoire: currentDate,
            condateAttributionDefinitive: currentDate,
            conDatePaiement: currentDate,
            dateDemandeImmatriculation: currentDate,
            dateImmatriculation: currentDate,
            datePub: currentDate,
            dateDemandePubContrat: currentDate,
            conDateCreation: currentDate,
            renouvcontDateDemandeAutorisation: currentDate,
            renouvcontDateautorisation: currentDate,
            renouvcontDateDemandeExamenJuridique: currentDate,
            renouvcontDateExamenJuridique: currentDate,
            renouvcontDateDemandeApprobation: currentDate,
            renouvcontDateApprobation: currentDate,
            renouvcontDateRejet: currentDate,
            renouvcontDateRetourApprobation: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Contrat', () => {
        const returnedFromService = Object.assign(
          {
            montant: 1,
            montantVerse: 1,
            conDateSignature: currentDate.format(DATE_FORMAT),
            conDateApprobation: currentDate.format(DATE_FORMAT),
            conDateNotification: currentDate.format(DATE_FORMAT),
            conDateRecepProvisoire: currentDate.format(DATE_FORMAT),
            conDateRecepDefinitive: currentDate.format(DATE_FORMAT),
            conDateOrdreDemarrage: currentDate.format(DATE_FORMAT),
            condateAttributionProvisoire: currentDate.format(DATE_FORMAT),
            condateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            conDatePaiement: currentDate.format(DATE_FORMAT),
            dateDemandeImmatriculation: currentDate.format(DATE_FORMAT),
            dateImmatriculation: currentDate.format(DATE_FORMAT),
            datePub: currentDate.format(DATE_FORMAT),
            dateDemandePubContrat: currentDate.format(DATE_FORMAT),
            conDateCreation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeAutorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateautorisation: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateExamenJuridique: currentDate.format(DATE_FORMAT),
            renouvcontDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateApprobation: currentDate.format(DATE_FORMAT),
            renouvcontDateRejet: currentDate.format(DATE_FORMAT),
            renouvcontDateRetourApprobation: currentDate.format(DATE_FORMAT),
            conCommentSignature: 'BBBBBB',
            conRefSignature: 'BBBBBB',
            conCommentApprobation: 'BBBBBB',
            conRefApprobation: 'BBBBBB',
            conCommentNotification: 'BBBBBB',
            conRefNotification: 'BBBBBB',
            conFichierRecepProvisoire: 'BBBBBB',
            conCommentRecepProvisoire: 'BBBBBB',
            conFichierRecepDefinitive: 'BBBBBB',
            conCommentRecepDefinitive: 'BBBBBB',
            conFichierOrdreDemarrage: 'BBBBBB',
            conCommentOrdreDemarrage: 'BBBBBB',
            conRefAttributionProvisoire: 'BBBBBB',
            conCommentaireAttributionProvisoire: 'BBBBBB',
            conRefAttributionDefinitive: 'BBBBBB',
            conCommentaireAttributionDefinitive: 'BBBBBB',
            conStatut: 'BBBBBB',
            numMatriculation: 'BBBBBB',
            conCommentaireDmdmat: 'BBBBBB',
            conCommentaireMatriculation: 'BBBBBB',
            concSituation: 'BBBBBB',
            nationnalite: 'BBBBBB',
            fichierImmatricule: 'BBBBBB',
            fichierJustificatif: 'BBBBBB',
            commentairePub: 'BBBBBB',
            fichierContrat: 'BBBBBB',
            conCommentDemandePub: 'BBBBBB',
            renouvcontFichierAutorisationPrealable: 'BBBBBB',
            renouvcontFichierExamenJuridique: 'BBBBBB',
            renouvcontFichierContratSigne: 'BBBBBB',
            renouvcontFichierPageGarde: 'BBBBBB',
            renouvcontFichierPageSignature: 'BBBBBB',
            renouvcontFichierRapportMotivation: 'BBBBBB',
            renouvcontFichierProjetContrat: 'BBBBBB',
            renouvcontCommentAutorisation: 'BBBBBB',
            renouvcontCommentDemandeApprobation: 'BBBBBB',
            renouvcontCommentExamenJuridique: 'BBBBBB',
            autoriteId: 1,
            serviceId: 1,
            modePassationId: 1,
            typeMarcheId: 1,
            immatriculation: 1,
            delai: 1,
            renouvcontImmatStatut: true,
            renouvcontPubStatut: true,
            renouvcontAutorisationStatut: 1,
            renouvcontExamenJuridiqueStatut: 1,
            renouvcontApprobationStatut: 1,
            etatContratdebase: 'BBBBBB',
            libelleLot: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            conDateSignature: currentDate,
            conDateApprobation: currentDate,
            conDateNotification: currentDate,
            conDateRecepProvisoire: currentDate,
            conDateRecepDefinitive: currentDate,
            conDateOrdreDemarrage: currentDate,
            condateAttributionProvisoire: currentDate,
            condateAttributionDefinitive: currentDate,
            conDatePaiement: currentDate,
            dateDemandeImmatriculation: currentDate,
            dateImmatriculation: currentDate,
            datePub: currentDate,
            dateDemandePubContrat: currentDate,
            conDateCreation: currentDate,
            renouvcontDateDemandeAutorisation: currentDate,
            renouvcontDateautorisation: currentDate,
            renouvcontDateDemandeExamenJuridique: currentDate,
            renouvcontDateExamenJuridique: currentDate,
            renouvcontDateDemandeApprobation: currentDate,
            renouvcontDateApprobation: currentDate,
            renouvcontDateRejet: currentDate,
            renouvcontDateRetourApprobation: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Contrat', () => {
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
