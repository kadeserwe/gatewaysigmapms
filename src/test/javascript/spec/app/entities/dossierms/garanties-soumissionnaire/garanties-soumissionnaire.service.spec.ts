import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GarantiesSoumissionnaireService } from 'app/entities/dossierms/garanties-soumissionnaire/garanties-soumissionnaire.service';
import { IGarantiesSoumissionnaire, GarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';

describe('Service Tests', () => {
  describe('GarantiesSoumissionnaire Service', () => {
    let injector: TestBed;
    let service: GarantiesSoumissionnaireService;
    let httpMock: HttpTestingController;
    let elemDefault: IGarantiesSoumissionnaire;
    let expectedResult: IGarantiesSoumissionnaire | IGarantiesSoumissionnaire[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(GarantiesSoumissionnaireService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new GarantiesSoumissionnaire(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a GarantiesSoumissionnaire', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new GarantiesSoumissionnaire()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a GarantiesSoumissionnaire', () => {
        const returnedFromService = Object.assign(
          {
            fournie: 'BBBBBB',
            libelle: 'BBBBBB',
            observations: 'BBBBBB',
            libellelot: 'BBBBBB',
            montant: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of GarantiesSoumissionnaire', () => {
        const returnedFromService = Object.assign(
          {
            fournie: 'BBBBBB',
            libelle: 'BBBBBB',
            observations: 'BBBBBB',
            libellelot: 'BBBBBB',
            montant: 1,
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

      it('should delete a GarantiesSoumissionnaire', () => {
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
