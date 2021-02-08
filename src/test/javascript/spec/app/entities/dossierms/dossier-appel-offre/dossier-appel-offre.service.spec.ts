import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IDossierAppelOffre, DossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';

describe('Service Tests', () => {
  describe('DossierAppelOffre Service', () => {
    let injector: TestBed;
    let service: DossierAppelOffreService;
    let httpMock: HttpTestingController;
    let elemDefault: IDossierAppelOffre;
    let expectedResult: IDossierAppelOffre | IDossierAppelOffre[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DossierAppelOffreService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new DossierAppelOffre(
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
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        currentDate,
        currentDate,
        currentDate,
        'AAAAAAA',
        0,
        0,
        0,
        0,
        'AAAAAAA',
        currentDate,
        currentDate,
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        currentDate,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dosDateDebutRetrait: currentDate.format(DATE_FORMAT),
            dosDateLimiteDepot: currentDate.format(DATE_FORMAT),
            dosHeurelimitedepot: currentDate.format(DATE_FORMAT),
            dosDateCreation: currentDate.format(DATE_FORMAT),
            dosDateRejet: currentDate.format(DATE_FORMAT),
            dosDatePublicationProvisoire: currentDate.format(DATE_FORMAT),
            dosDatePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandePublication: currentDate.format(DATE_FORMAT),
            dosDateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            dosHeureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
            dosDatePublication: currentDate.format(DATE_FORMAT),
            dateRemiseDossierTechnique: currentDate.format(DATE_FORMAT),
            dateLimiteDossierTechnique: currentDate.format(DATE_FORMAT),
            dosDateMiseValidationAttribution: currentDate.format(DATE_FORMAT),
            dosDateSignature: currentDate.format(DATE_FORMAT),
            dosDateMiseValidationSignature: currentDate.format(DATE_FORMAT),
            dosDateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            dosDateNotification: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DossierAppelOffre', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dosDateDebutRetrait: currentDate.format(DATE_FORMAT),
            dosDateLimiteDepot: currentDate.format(DATE_FORMAT),
            dosHeurelimitedepot: currentDate.format(DATE_FORMAT),
            dosDateCreation: currentDate.format(DATE_FORMAT),
            dosDateRejet: currentDate.format(DATE_FORMAT),
            dosDatePublicationProvisoire: currentDate.format(DATE_FORMAT),
            dosDatePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandePublication: currentDate.format(DATE_FORMAT),
            dosDateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            dosHeureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
            dosDatePublication: currentDate.format(DATE_FORMAT),
            dateRemiseDossierTechnique: currentDate.format(DATE_FORMAT),
            dateLimiteDossierTechnique: currentDate.format(DATE_FORMAT),
            dosDateMiseValidationAttribution: currentDate.format(DATE_FORMAT),
            dosDateSignature: currentDate.format(DATE_FORMAT),
            dosDateMiseValidationSignature: currentDate.format(DATE_FORMAT),
            dosDateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            dosDateNotification: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dosDateDebutRetrait: currentDate,
            dosDateLimiteDepot: currentDate,
            dosHeurelimitedepot: currentDate,
            dosDateCreation: currentDate,
            dosDateRejet: currentDate,
            dosDatePublicationProvisoire: currentDate,
            dosDatePublicationDefinitive: currentDate,
            dosDateDemandePublication: currentDate,
            dosDateOuvertueDesplis: currentDate,
            dosHeureOuvertureDesPlis: currentDate,
            dosDatePublication: currentDate,
            dateRemiseDossierTechnique: currentDate,
            dateLimiteDossierTechnique: currentDate,
            dosDateMiseValidationAttribution: currentDate,
            dosDateSignature: currentDate,
            dosDateMiseValidationSignature: currentDate,
            dosDateAttributionDefinitive: currentDate,
            dosDateDemandeApprobation: currentDate,
            dosDateNotification: currentDate,
          },
          returnedFromService
        );

        service.create(new DossierAppelOffre()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DossierAppelOffre', () => {
        const returnedFromService = Object.assign(
          {
            dosLieuDepotDossier: 'BBBBBB',
            dosReference: 'BBBBBB',
            dosAdresseRetrait: 'BBBBBB',
            dosConditionAcquistion: 'BBBBBB',
            dosAllotissement: 'BBBBBB',
            dosLotDivisible: 'BBBBBB',
            dosCommentaireMiseValidation: 'BBBBBB',
            dosCommentaireValidation: 'BBBBBB',
            dosFichierValidation: 'BBBBBB',
            dosCommentairePublicationProvisoire: 'BBBBBB',
            dosCommentairesPublicationDefinitive: 'BBBBBB',
            dosCommentairePublication: 'BBBBBB',
            dosCommentSignature: 'BBBBBB',
            dosRefSignature: 'BBBBBB',
            dosCommentApprobation: 'BBBBBB',
            dosRefApprobation: 'BBBBBB',
            dosDateDebutRetrait: currentDate.format(DATE_FORMAT),
            dosDateLimiteDepot: currentDate.format(DATE_FORMAT),
            dosHeurelimitedepot: currentDate.format(DATE_FORMAT),
            dosDateCreation: currentDate.format(DATE_FORMAT),
            dosDateRejet: currentDate.format(DATE_FORMAT),
            dosDatePublicationProvisoire: currentDate.format(DATE_FORMAT),
            dosDatePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandePublication: currentDate.format(DATE_FORMAT),
            dosCommentaireDemandePublication: 'BBBBBB',
            dosFichierDemandePublication: 'BBBBBB',
            dosLieuAcquisitionDAO: 'BBBBBB',
            telechargerDAO: 1,
            dosDateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            dosHeureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
            dosDatePublication: currentDate.format(DATE_FORMAT),
            dosFicchierPublication: 'BBBBBB',
            autiriteId: 1,
            dosMontantGarantie: 1,
            dosMontantDao: 1,
            dosMontantEstime: 1,
            dosIncidents: 'BBBBBB',
            dateRemiseDossierTechnique: currentDate.format(DATE_FORMAT),
            dateLimiteDossierTechnique: currentDate.format(DATE_FORMAT),
            commentaireDelaiTechnique: 'BBBBBB',
            dosDateMiseValidationAttribution: currentDate.format(DATE_FORMAT),
            dosEtatValidation: 'BBBBBB',
            dosBordereau: 'BBBBBB',
            dosFichierMiseValidationPrequalif: 'BBBBBB',
            dosfichierSignature: 'BBBBBB',
            dosDateSignature: currentDate.format(DATE_FORMAT),
            dosDateMiseValidationSignature: currentDate.format(DATE_FORMAT),
            dosDateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            dosCommentDemandeApprobation: 'BBBBBB',
            fichierApprobation: 'BBBBBB',
            dosDateNotification: currentDate.format(DATE_FORMAT),
            dosCommentNotification: 'BBBBBB',
            dosRefNotification: 'BBBBBB',
            dosFichierNotification: 'BBBBBB',
            dosCommentaireAttributionDefinitive: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dosDateDebutRetrait: currentDate,
            dosDateLimiteDepot: currentDate,
            dosHeurelimitedepot: currentDate,
            dosDateCreation: currentDate,
            dosDateRejet: currentDate,
            dosDatePublicationProvisoire: currentDate,
            dosDatePublicationDefinitive: currentDate,
            dosDateDemandePublication: currentDate,
            dosDateOuvertueDesplis: currentDate,
            dosHeureOuvertureDesPlis: currentDate,
            dosDatePublication: currentDate,
            dateRemiseDossierTechnique: currentDate,
            dateLimiteDossierTechnique: currentDate,
            dosDateMiseValidationAttribution: currentDate,
            dosDateSignature: currentDate,
            dosDateMiseValidationSignature: currentDate,
            dosDateAttributionDefinitive: currentDate,
            dosDateDemandeApprobation: currentDate,
            dosDateNotification: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DossierAppelOffre', () => {
        const returnedFromService = Object.assign(
          {
            dosLieuDepotDossier: 'BBBBBB',
            dosReference: 'BBBBBB',
            dosAdresseRetrait: 'BBBBBB',
            dosConditionAcquistion: 'BBBBBB',
            dosAllotissement: 'BBBBBB',
            dosLotDivisible: 'BBBBBB',
            dosCommentaireMiseValidation: 'BBBBBB',
            dosCommentaireValidation: 'BBBBBB',
            dosFichierValidation: 'BBBBBB',
            dosCommentairePublicationProvisoire: 'BBBBBB',
            dosCommentairesPublicationDefinitive: 'BBBBBB',
            dosCommentairePublication: 'BBBBBB',
            dosCommentSignature: 'BBBBBB',
            dosRefSignature: 'BBBBBB',
            dosCommentApprobation: 'BBBBBB',
            dosRefApprobation: 'BBBBBB',
            dosDateDebutRetrait: currentDate.format(DATE_FORMAT),
            dosDateLimiteDepot: currentDate.format(DATE_FORMAT),
            dosHeurelimitedepot: currentDate.format(DATE_FORMAT),
            dosDateCreation: currentDate.format(DATE_FORMAT),
            dosDateRejet: currentDate.format(DATE_FORMAT),
            dosDatePublicationProvisoire: currentDate.format(DATE_FORMAT),
            dosDatePublicationDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandePublication: currentDate.format(DATE_FORMAT),
            dosCommentaireDemandePublication: 'BBBBBB',
            dosFichierDemandePublication: 'BBBBBB',
            dosLieuAcquisitionDAO: 'BBBBBB',
            telechargerDAO: 1,
            dosDateOuvertueDesplis: currentDate.format(DATE_FORMAT),
            dosHeureOuvertureDesPlis: currentDate.format(DATE_FORMAT),
            dosDatePublication: currentDate.format(DATE_FORMAT),
            dosFicchierPublication: 'BBBBBB',
            autiriteId: 1,
            dosMontantGarantie: 1,
            dosMontantDao: 1,
            dosMontantEstime: 1,
            dosIncidents: 'BBBBBB',
            dateRemiseDossierTechnique: currentDate.format(DATE_FORMAT),
            dateLimiteDossierTechnique: currentDate.format(DATE_FORMAT),
            commentaireDelaiTechnique: 'BBBBBB',
            dosDateMiseValidationAttribution: currentDate.format(DATE_FORMAT),
            dosEtatValidation: 'BBBBBB',
            dosBordereau: 'BBBBBB',
            dosFichierMiseValidationPrequalif: 'BBBBBB',
            dosfichierSignature: 'BBBBBB',
            dosDateSignature: currentDate.format(DATE_FORMAT),
            dosDateMiseValidationSignature: currentDate.format(DATE_FORMAT),
            dosDateAttributionDefinitive: currentDate.format(DATE_FORMAT),
            dosDateDemandeApprobation: currentDate.format(DATE_FORMAT),
            dosCommentDemandeApprobation: 'BBBBBB',
            fichierApprobation: 'BBBBBB',
            dosDateNotification: currentDate.format(DATE_FORMAT),
            dosCommentNotification: 'BBBBBB',
            dosRefNotification: 'BBBBBB',
            dosFichierNotification: 'BBBBBB',
            dosCommentaireAttributionDefinitive: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dosDateDebutRetrait: currentDate,
            dosDateLimiteDepot: currentDate,
            dosHeurelimitedepot: currentDate,
            dosDateCreation: currentDate,
            dosDateRejet: currentDate,
            dosDatePublicationProvisoire: currentDate,
            dosDatePublicationDefinitive: currentDate,
            dosDateDemandePublication: currentDate,
            dosDateOuvertueDesplis: currentDate,
            dosHeureOuvertureDesPlis: currentDate,
            dosDatePublication: currentDate,
            dateRemiseDossierTechnique: currentDate,
            dateLimiteDossierTechnique: currentDate,
            dosDateMiseValidationAttribution: currentDate,
            dosDateSignature: currentDate,
            dosDateMiseValidationSignature: currentDate,
            dosDateAttributionDefinitive: currentDate,
            dosDateDemandeApprobation: currentDate,
            dosDateNotification: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a DossierAppelOffre', () => {
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
