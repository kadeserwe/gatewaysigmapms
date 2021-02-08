import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IAvisAttribution } from 'app/shared/model/dossierms/avis-attribution.model';

type EntityResponseType = HttpResponse<IAvisAttribution>;
type EntityArrayResponseType = HttpResponse<IAvisAttribution[]>;

@Injectable({ providedIn: 'root' })
export class AvisAttributionService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/avis-attributions';

  constructor(protected http: HttpClient) {}

  create(avisAttribution: IAvisAttribution): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(avisAttribution);
    return this.http
      .post<IAvisAttribution>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(avisAttribution: IAvisAttribution): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(avisAttribution);
    return this.http
      .put<IAvisAttribution>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAvisAttribution>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAvisAttribution[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(avisAttribution: IAvisAttribution): IAvisAttribution {
    const copy: IAvisAttribution = Object.assign({}, avisAttribution, {
      attriDate:
        avisAttribution.attriDate && avisAttribution.attriDate.isValid() ? avisAttribution.attriDate.format(DATE_FORMAT) : undefined,
      attridatepublication:
        avisAttribution.attridatepublication && avisAttribution.attridatepublication.isValid()
          ? avisAttribution.attridatepublication.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.attriDate = res.body.attriDate ? moment(res.body.attriDate) : undefined;
      res.body.attridatepublication = res.body.attridatepublication ? moment(res.body.attridatepublication) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((avisAttribution: IAvisAttribution) => {
        avisAttribution.attriDate = avisAttribution.attriDate ? moment(avisAttribution.attriDate) : undefined;
        avisAttribution.attridatepublication = avisAttribution.attridatepublication
          ? moment(avisAttribution.attridatepublication)
          : undefined;
      });
    }
    return res;
  }
}
