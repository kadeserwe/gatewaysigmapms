import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CritereQualifiSoumService } from 'app/entities/dossierms/critere-qualifi-soum/critere-qualifi-soum.service';
import { ICritereQualifiSoum, CritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';

describe('Service Tests', () => {
  describe('CritereQualifiSoum Service', () => {
    let injector: TestBed;
    let service: CritereQualifiSoumService;
    let httpMock: HttpTestingController;
    let elemDefault: ICritereQualifiSoum;
    let expectedResult: ICritereQualifiSoum | ICritereQualifiSoum[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(CritereQualifiSoumService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new CritereQualifiSoum(0, 0, 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a CritereQualifiSoum', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new CritereQualifiSoum()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a CritereQualifiSoum', () => {
        const returnedFromService = Object.assign(
          {
            conforme: 1,
            libelle: 'BBBBBB',
            libelleLot: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of CritereQualifiSoum', () => {
        const returnedFromService = Object.assign(
          {
            conforme: 1,
            libelle: 'BBBBBB',
            libelleLot: 'BBBBBB',
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

      it('should delete a CritereQualifiSoum', () => {
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
