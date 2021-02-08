import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DossiersCommissionsMarcheService } from 'app/entities/dossierms/dossiers-commissions-marche/dossiers-commissions-marche.service';
import { IDossiersCommissionsMarche, DossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';

describe('Service Tests', () => {
  describe('DossiersCommissionsMarche Service', () => {
    let injector: TestBed;
    let service: DossiersCommissionsMarcheService;
    let httpMock: HttpTestingController;
    let elemDefault: IDossiersCommissionsMarche;
    let expectedResult: IDossiersCommissionsMarche | IDossiersCommissionsMarche[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(DossiersCommissionsMarcheService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new DossiersCommissionsMarche(0, 0, 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a DossiersCommissionsMarche', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new DossiersCommissionsMarche()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a DossiersCommissionsMarche', () => {
        const returnedFromService = Object.assign(
          {
            flagPresenceEvaluation: 1,
            etapePI: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of DossiersCommissionsMarche', () => {
        const returnedFromService = Object.assign(
          {
            flagPresenceEvaluation: 1,
            etapePI: 1,
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

      it('should delete a DossiersCommissionsMarche', () => {
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
