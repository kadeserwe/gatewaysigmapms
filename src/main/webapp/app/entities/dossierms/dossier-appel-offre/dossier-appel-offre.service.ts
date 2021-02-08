import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';

type EntityResponseType = HttpResponse<IDossierAppelOffre>;
type EntityArrayResponseType = HttpResponse<IDossierAppelOffre[]>;

@Injectable({ providedIn: 'root' })
export class DossierAppelOffreService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/dossier-appel-offres';

  constructor(protected http: HttpClient) {}

  create(dossierAppelOffre: IDossierAppelOffre): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dossierAppelOffre);
    return this.http
      .post<IDossierAppelOffre>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(dossierAppelOffre: IDossierAppelOffre): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dossierAppelOffre);
    return this.http
      .put<IDossierAppelOffre>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDossierAppelOffre>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDossierAppelOffre[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(dossierAppelOffre: IDossierAppelOffre): IDossierAppelOffre {
    const copy: IDossierAppelOffre = Object.assign({}, dossierAppelOffre, {
      dosDateDebutRetrait:
        dossierAppelOffre.dosDateDebutRetrait && dossierAppelOffre.dosDateDebutRetrait.isValid()
          ? dossierAppelOffre.dosDateDebutRetrait.format(DATE_FORMAT)
          : undefined,
      dosDateLimiteDepot:
        dossierAppelOffre.dosDateLimiteDepot && dossierAppelOffre.dosDateLimiteDepot.isValid()
          ? dossierAppelOffre.dosDateLimiteDepot.format(DATE_FORMAT)
          : undefined,
      dosHeurelimitedepot:
        dossierAppelOffre.dosHeurelimitedepot && dossierAppelOffre.dosHeurelimitedepot.isValid()
          ? dossierAppelOffre.dosHeurelimitedepot.format(DATE_FORMAT)
          : undefined,
      dosDateCreation:
        dossierAppelOffre.dosDateCreation && dossierAppelOffre.dosDateCreation.isValid()
          ? dossierAppelOffre.dosDateCreation.format(DATE_FORMAT)
          : undefined,
      dosDateRejet:
        dossierAppelOffre.dosDateRejet && dossierAppelOffre.dosDateRejet.isValid()
          ? dossierAppelOffre.dosDateRejet.format(DATE_FORMAT)
          : undefined,
      dosDatePublicationProvisoire:
        dossierAppelOffre.dosDatePublicationProvisoire && dossierAppelOffre.dosDatePublicationProvisoire.isValid()
          ? dossierAppelOffre.dosDatePublicationProvisoire.format(DATE_FORMAT)
          : undefined,
      dosDatePublicationDefinitive:
        dossierAppelOffre.dosDatePublicationDefinitive && dossierAppelOffre.dosDatePublicationDefinitive.isValid()
          ? dossierAppelOffre.dosDatePublicationDefinitive.format(DATE_FORMAT)
          : undefined,
      dosDateDemandePublication:
        dossierAppelOffre.dosDateDemandePublication && dossierAppelOffre.dosDateDemandePublication.isValid()
          ? dossierAppelOffre.dosDateDemandePublication.format(DATE_FORMAT)
          : undefined,
      dosDateOuvertueDesplis:
        dossierAppelOffre.dosDateOuvertueDesplis && dossierAppelOffre.dosDateOuvertueDesplis.isValid()
          ? dossierAppelOffre.dosDateOuvertueDesplis.format(DATE_FORMAT)
          : undefined,
      dosHeureOuvertureDesPlis:
        dossierAppelOffre.dosHeureOuvertureDesPlis && dossierAppelOffre.dosHeureOuvertureDesPlis.isValid()
          ? dossierAppelOffre.dosHeureOuvertureDesPlis.format(DATE_FORMAT)
          : undefined,
      dosDatePublication:
        dossierAppelOffre.dosDatePublication && dossierAppelOffre.dosDatePublication.isValid()
          ? dossierAppelOffre.dosDatePublication.format(DATE_FORMAT)
          : undefined,
      dateRemiseDossierTechnique:
        dossierAppelOffre.dateRemiseDossierTechnique && dossierAppelOffre.dateRemiseDossierTechnique.isValid()
          ? dossierAppelOffre.dateRemiseDossierTechnique.format(DATE_FORMAT)
          : undefined,
      dateLimiteDossierTechnique:
        dossierAppelOffre.dateLimiteDossierTechnique && dossierAppelOffre.dateLimiteDossierTechnique.isValid()
          ? dossierAppelOffre.dateLimiteDossierTechnique.format(DATE_FORMAT)
          : undefined,
      dosDateMiseValidationAttribution:
        dossierAppelOffre.dosDateMiseValidationAttribution && dossierAppelOffre.dosDateMiseValidationAttribution.isValid()
          ? dossierAppelOffre.dosDateMiseValidationAttribution.format(DATE_FORMAT)
          : undefined,
      dosDateSignature:
        dossierAppelOffre.dosDateSignature && dossierAppelOffre.dosDateSignature.isValid()
          ? dossierAppelOffre.dosDateSignature.format(DATE_FORMAT)
          : undefined,
      dosDateMiseValidationSignature:
        dossierAppelOffre.dosDateMiseValidationSignature && dossierAppelOffre.dosDateMiseValidationSignature.isValid()
          ? dossierAppelOffre.dosDateMiseValidationSignature.format(DATE_FORMAT)
          : undefined,
      dosDateAttributionDefinitive:
        dossierAppelOffre.dosDateAttributionDefinitive && dossierAppelOffre.dosDateAttributionDefinitive.isValid()
          ? dossierAppelOffre.dosDateAttributionDefinitive.format(DATE_FORMAT)
          : undefined,
      dosDateDemandeApprobation:
        dossierAppelOffre.dosDateDemandeApprobation && dossierAppelOffre.dosDateDemandeApprobation.isValid()
          ? dossierAppelOffre.dosDateDemandeApprobation.format(DATE_FORMAT)
          : undefined,
      dosDateNotification:
        dossierAppelOffre.dosDateNotification && dossierAppelOffre.dosDateNotification.isValid()
          ? dossierAppelOffre.dosDateNotification.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dosDateDebutRetrait = res.body.dosDateDebutRetrait ? moment(res.body.dosDateDebutRetrait) : undefined;
      res.body.dosDateLimiteDepot = res.body.dosDateLimiteDepot ? moment(res.body.dosDateLimiteDepot) : undefined;
      res.body.dosHeurelimitedepot = res.body.dosHeurelimitedepot ? moment(res.body.dosHeurelimitedepot) : undefined;
      res.body.dosDateCreation = res.body.dosDateCreation ? moment(res.body.dosDateCreation) : undefined;
      res.body.dosDateRejet = res.body.dosDateRejet ? moment(res.body.dosDateRejet) : undefined;
      res.body.dosDatePublicationProvisoire = res.body.dosDatePublicationProvisoire
        ? moment(res.body.dosDatePublicationProvisoire)
        : undefined;
      res.body.dosDatePublicationDefinitive = res.body.dosDatePublicationDefinitive
        ? moment(res.body.dosDatePublicationDefinitive)
        : undefined;
      res.body.dosDateDemandePublication = res.body.dosDateDemandePublication ? moment(res.body.dosDateDemandePublication) : undefined;
      res.body.dosDateOuvertueDesplis = res.body.dosDateOuvertueDesplis ? moment(res.body.dosDateOuvertueDesplis) : undefined;
      res.body.dosHeureOuvertureDesPlis = res.body.dosHeureOuvertureDesPlis ? moment(res.body.dosHeureOuvertureDesPlis) : undefined;
      res.body.dosDatePublication = res.body.dosDatePublication ? moment(res.body.dosDatePublication) : undefined;
      res.body.dateRemiseDossierTechnique = res.body.dateRemiseDossierTechnique ? moment(res.body.dateRemiseDossierTechnique) : undefined;
      res.body.dateLimiteDossierTechnique = res.body.dateLimiteDossierTechnique ? moment(res.body.dateLimiteDossierTechnique) : undefined;
      res.body.dosDateMiseValidationAttribution = res.body.dosDateMiseValidationAttribution
        ? moment(res.body.dosDateMiseValidationAttribution)
        : undefined;
      res.body.dosDateSignature = res.body.dosDateSignature ? moment(res.body.dosDateSignature) : undefined;
      res.body.dosDateMiseValidationSignature = res.body.dosDateMiseValidationSignature
        ? moment(res.body.dosDateMiseValidationSignature)
        : undefined;
      res.body.dosDateAttributionDefinitive = res.body.dosDateAttributionDefinitive
        ? moment(res.body.dosDateAttributionDefinitive)
        : undefined;
      res.body.dosDateDemandeApprobation = res.body.dosDateDemandeApprobation ? moment(res.body.dosDateDemandeApprobation) : undefined;
      res.body.dosDateNotification = res.body.dosDateNotification ? moment(res.body.dosDateNotification) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((dossierAppelOffre: IDossierAppelOffre) => {
        dossierAppelOffre.dosDateDebutRetrait = dossierAppelOffre.dosDateDebutRetrait
          ? moment(dossierAppelOffre.dosDateDebutRetrait)
          : undefined;
        dossierAppelOffre.dosDateLimiteDepot = dossierAppelOffre.dosDateLimiteDepot
          ? moment(dossierAppelOffre.dosDateLimiteDepot)
          : undefined;
        dossierAppelOffre.dosHeurelimitedepot = dossierAppelOffre.dosHeurelimitedepot
          ? moment(dossierAppelOffre.dosHeurelimitedepot)
          : undefined;
        dossierAppelOffre.dosDateCreation = dossierAppelOffre.dosDateCreation ? moment(dossierAppelOffre.dosDateCreation) : undefined;
        dossierAppelOffre.dosDateRejet = dossierAppelOffre.dosDateRejet ? moment(dossierAppelOffre.dosDateRejet) : undefined;
        dossierAppelOffre.dosDatePublicationProvisoire = dossierAppelOffre.dosDatePublicationProvisoire
          ? moment(dossierAppelOffre.dosDatePublicationProvisoire)
          : undefined;
        dossierAppelOffre.dosDatePublicationDefinitive = dossierAppelOffre.dosDatePublicationDefinitive
          ? moment(dossierAppelOffre.dosDatePublicationDefinitive)
          : undefined;
        dossierAppelOffre.dosDateDemandePublication = dossierAppelOffre.dosDateDemandePublication
          ? moment(dossierAppelOffre.dosDateDemandePublication)
          : undefined;
        dossierAppelOffre.dosDateOuvertueDesplis = dossierAppelOffre.dosDateOuvertueDesplis
          ? moment(dossierAppelOffre.dosDateOuvertueDesplis)
          : undefined;
        dossierAppelOffre.dosHeureOuvertureDesPlis = dossierAppelOffre.dosHeureOuvertureDesPlis
          ? moment(dossierAppelOffre.dosHeureOuvertureDesPlis)
          : undefined;
        dossierAppelOffre.dosDatePublication = dossierAppelOffre.dosDatePublication
          ? moment(dossierAppelOffre.dosDatePublication)
          : undefined;
        dossierAppelOffre.dateRemiseDossierTechnique = dossierAppelOffre.dateRemiseDossierTechnique
          ? moment(dossierAppelOffre.dateRemiseDossierTechnique)
          : undefined;
        dossierAppelOffre.dateLimiteDossierTechnique = dossierAppelOffre.dateLimiteDossierTechnique
          ? moment(dossierAppelOffre.dateLimiteDossierTechnique)
          : undefined;
        dossierAppelOffre.dosDateMiseValidationAttribution = dossierAppelOffre.dosDateMiseValidationAttribution
          ? moment(dossierAppelOffre.dosDateMiseValidationAttribution)
          : undefined;
        dossierAppelOffre.dosDateSignature = dossierAppelOffre.dosDateSignature ? moment(dossierAppelOffre.dosDateSignature) : undefined;
        dossierAppelOffre.dosDateMiseValidationSignature = dossierAppelOffre.dosDateMiseValidationSignature
          ? moment(dossierAppelOffre.dosDateMiseValidationSignature)
          : undefined;
        dossierAppelOffre.dosDateAttributionDefinitive = dossierAppelOffre.dosDateAttributionDefinitive
          ? moment(dossierAppelOffre.dosDateAttributionDefinitive)
          : undefined;
        dossierAppelOffre.dosDateDemandeApprobation = dossierAppelOffre.dosDateDemandeApprobation
          ? moment(dossierAppelOffre.dosDateDemandeApprobation)
          : undefined;
        dossierAppelOffre.dosDateNotification = dossierAppelOffre.dosDateNotification
          ? moment(dossierAppelOffre.dosDateNotification)
          : undefined;
      });
    }
    return res;
  }
}
