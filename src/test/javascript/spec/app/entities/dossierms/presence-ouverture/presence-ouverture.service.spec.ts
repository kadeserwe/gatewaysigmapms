import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PresenceOuvertureService } from 'app/entities/dossierms/presence-ouverture/presence-ouverture.service';
import { IPresenceOuverture, PresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';

describe('Service Tests', () => {
  describe('PresenceOuverture Service', () => {
    let injector: TestBed;
    let service: PresenceOuvertureService;
    let httpMock: HttpTestingController;
    let elemDefault: IPresenceOuverture;
    let expectedResult: IPresenceOuverture | IPresenceOuverture[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(PresenceOuvertureService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new PresenceOuverture(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a PresenceOuverture', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new PresenceOuverture()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a PresenceOuverture', () => {
        const returnedFromService = Object.assign(
          {
            supplementaire: 'BBBBBB',
            email: 'BBBBBB',
            telephone: 'BBBBBB',
            nomRepresentant: 'BBBBBB',
            prenomRepresentant: 'BBBBBB',
            nomStructure: 'BBBBBB',
            qualite: 'BBBBBB',
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

      it('should return a list of PresenceOuverture', () => {
        const returnedFromService = Object.assign(
          {
            supplementaire: 'BBBBBB',
            email: 'BBBBBB',
            telephone: 'BBBBBB',
            nomRepresentant: 'BBBBBB',
            prenomRepresentant: 'BBBBBB',
            nomStructure: 'BBBBBB',
            qualite: 'BBBBBB',
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

      it('should delete a PresenceOuverture', () => {
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
