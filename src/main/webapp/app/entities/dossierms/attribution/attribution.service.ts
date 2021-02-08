import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IAttribution } from 'app/shared/model/dossierms/attribution.model';

type EntityResponseType = HttpResponse<IAttribution>;
type EntityArrayResponseType = HttpResponse<IAttribution[]>;

@Injectable({ providedIn: 'root' })
export class AttributionService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/attributions';

  constructor(protected http: HttpClient) {}

  create(attribution: IAttribution): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(attribution);
    return this.http
      .post<IAttribution>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(attribution: IAttribution): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(attribution);
    return this.http
      .put<IAttribution>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAttribution>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAttribution[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(attribution: IAttribution): IAttribution {
    const copy: IAttribution = Object.assign({}, attribution, {
      datePublicationProvisoire:
        attribution.datePublicationProvisoire && attribution.datePublicationProvisoire.isValid()
          ? attribution.datePublicationProvisoire.format(DATE_FORMAT)
          : undefined,
      datePublicationDefinitive:
        attribution.datePublicationDefinitive && attribution.datePublicationDefinitive.isValid()
          ? attribution.datePublicationDefinitive.format(DATE_FORMAT)
          : undefined,
      dateattribution:
        attribution.dateattribution && attribution.dateattribution.isValid() ? attribution.dateattribution.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.datePublicationProvisoire = res.body.datePublicationProvisoire ? moment(res.body.datePublicationProvisoire) : undefined;
      res.body.datePublicationDefinitive = res.body.datePublicationDefinitive ? moment(res.body.datePublicationDefinitive) : undefined;
      res.body.dateattribution = res.body.dateattribution ? moment(res.body.dateattribution) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((attribution: IAttribution) => {
        attribution.datePublicationProvisoire = attribution.datePublicationProvisoire
          ? moment(attribution.datePublicationProvisoire)
          : undefined;
        attribution.datePublicationDefinitive = attribution.datePublicationDefinitive
          ? moment(attribution.datePublicationDefinitive)
          : undefined;
        attribution.dateattribution = attribution.dateattribution ? moment(attribution.dateattribution) : undefined;
      });
    }
    return res;
  }
}
