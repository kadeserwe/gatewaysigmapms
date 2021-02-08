import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TachesEffectueService } from 'app/entities/dossierms/taches-effectue/taches-effectue.service';
import { ITachesEffectue, TachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';

describe('Service Tests', () => {
  describe('TachesEffectue Service', () => {
    let injector: TestBed;
    let service: TachesEffectueService;
    let httpMock: HttpTestingController;
    let elemDefault: ITachesEffectue;
    let expectedResult: ITachesEffectue | ITachesEffectue[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(TachesEffectueService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new TachesEffectue(
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
        0,
        0,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a TachesEffectue', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new TachesEffectue()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a TachesEffectue', () => {
        const returnedFromService = Object.assign(
          {
            allotissement: 1,
            garantie: 1,
            pieceAdministrative: 1,
            critereQualification: 1,
            devise: 1,
            financement: 1,
            registreRetrait: 1,
            registreDepot: 1,
            lotsSoumis: 1,
            commissionsPassation: 1,
            representantsSoumis: 1,
            servicesTechniques: 1,
            observateurs: 1,
            garantieSoum: 1,
            piecesSoumis: 1,
            lectureOffre: 1,
            commissionTecnique: 1,
            document: 1,
            examenGarantie: 1,
            examenExhaustivite: 1,
            examenSignatureOffre: 1,
            examenConformite: 1,
            verificationCritere: 1,
            attributionProvisoire: 1,
            termeReference: 1,
            depotCandidature: 1,
            preselection: 1,
            notification: 1,
            commissionsPassationPI: 1,
            representantsSoumisPI: 1,
            notesTechnique: 1,
            offresFinanciere: 1,
            prixEvalue: 1,
            registreDepotPI: 1,
            critereProvenance: 1,
            procesVerbale: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of TachesEffectue', () => {
        const returnedFromService = Object.assign(
          {
            allotissement: 1,
            garantie: 1,
            pieceAdministrative: 1,
            critereQualification: 1,
            devise: 1,
            financement: 1,
            registreRetrait: 1,
            registreDepot: 1,
            lotsSoumis: 1,
            commissionsPassation: 1,
            representantsSoumis: 1,
            servicesTechniques: 1,
            observateurs: 1,
            garantieSoum: 1,
            piecesSoumis: 1,
            lectureOffre: 1,
            commissionTecnique: 1,
            document: 1,
            examenGarantie: 1,
            examenExhaustivite: 1,
            examenSignatureOffre: 1,
            examenConformite: 1,
            verificationCritere: 1,
            attributionProvisoire: 1,
            termeReference: 1,
            depotCandidature: 1,
            preselection: 1,
            notification: 1,
            commissionsPassationPI: 1,
            representantsSoumisPI: 1,
            notesTechnique: 1,
            offresFinanciere: 1,
            prixEvalue: 1,
            registreDepotPI: 1,
            critereProvenance: 1,
            procesVerbale: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a TachesEffectue', () => {
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
