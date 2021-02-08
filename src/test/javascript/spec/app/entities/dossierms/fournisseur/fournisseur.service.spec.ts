import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FournisseurService } from 'app/entities/dossierms/fournisseur/fournisseur.service';
import { IFournisseur, Fournisseur } from 'app/shared/model/dossierms/fournisseur.model';

describe('Service Tests', () => {
  describe('Fournisseur Service', () => {
    let injector: TestBed;
    let service: FournisseurService;
    let httpMock: HttpTestingController;
    let elemDefault: IFournisseur;
    let expectedResult: IFournisseur | IFournisseur[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(FournisseurService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Fournisseur(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
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
        'AAAAAAA'
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

      it('should create a Fournisseur', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new Fournisseur()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Fournisseur', () => {
        const returnedFromService = Object.assign(
          {
            nom: 'BBBBBB',
            adresse: 'BBBBBB',
            email: 'BBBBBB',
            telephone: 1,
            numeroRegistreCommerce: 1,
            piecejointe: 'BBBBBB',
            code: 'BBBBBB',
            activite: 'BBBBBB',
            adressecomptable: 'BBBBBB',
            adressedirigeant: 'BBBBBB',
            autredenomination: 'BBBBBB',
            autreformejuridique: 'BBBBBB',
            bpcomptable: 'BBBBBB',
            bpdeux: 'BBBBBB',
            bptrois: 'BBBBBB',
            bpun: 'BBBBBB',
            bpsecondaire: 'BBBBBB',
            centreimpot: 'BBBBBB',
            comptable: 'BBBBBB',
            dirigeant: 'BBBBBB',
            enseigne: 'BBBBBB',
            etssecondaire: 'BBBBBB',
            insae: 'BBBBBB',
            formejuridique: 'BBBBBB',
            proprietairesiege: 'BBBBBB',
            quartier: 'BBBBBB',
            numeroenregistrement: 'BBBBBB',
            serviceencharge: 'BBBBBB',
            siege: 'BBBBBB',
            sigle: 'BBBBBB',
            telcomptable: 'BBBBBB',
            teldeux: 'BBBBBB',
            teldirigeant: 'BBBBBB',
            telsecondaire: 'BBBBBB',
            teltrois: 'BBBBBB',
            telun: 'BBBBBB',
            ville: 'BBBBBB',
            typedge: 'BBBBBB',
            type: 'BBBBBB',
            utilisateurLogin: 'BBBBBB',
            fax: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Fournisseur', () => {
        const returnedFromService = Object.assign(
          {
            nom: 'BBBBBB',
            adresse: 'BBBBBB',
            email: 'BBBBBB',
            telephone: 1,
            numeroRegistreCommerce: 1,
            piecejointe: 'BBBBBB',
            code: 'BBBBBB',
            activite: 'BBBBBB',
            adressecomptable: 'BBBBBB',
            adressedirigeant: 'BBBBBB',
            autredenomination: 'BBBBBB',
            autreformejuridique: 'BBBBBB',
            bpcomptable: 'BBBBBB',
            bpdeux: 'BBBBBB',
            bptrois: 'BBBBBB',
            bpun: 'BBBBBB',
            bpsecondaire: 'BBBBBB',
            centreimpot: 'BBBBBB',
            comptable: 'BBBBBB',
            dirigeant: 'BBBBBB',
            enseigne: 'BBBBBB',
            etssecondaire: 'BBBBBB',
            insae: 'BBBBBB',
            formejuridique: 'BBBBBB',
            proprietairesiege: 'BBBBBB',
            quartier: 'BBBBBB',
            numeroenregistrement: 'BBBBBB',
            serviceencharge: 'BBBBBB',
            siege: 'BBBBBB',
            sigle: 'BBBBBB',
            telcomptable: 'BBBBBB',
            teldeux: 'BBBBBB',
            teldirigeant: 'BBBBBB',
            telsecondaire: 'BBBBBB',
            teltrois: 'BBBBBB',
            telun: 'BBBBBB',
            ville: 'BBBBBB',
            typedge: 'BBBBBB',
            type: 'BBBBBB',
            utilisateurLogin: 'BBBBBB',
            fax: 'BBBBBB',
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

      it('should delete a Fournisseur', () => {
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
