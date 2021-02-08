import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IRepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';

type EntityResponseType = HttpResponse<IRepresentantServTech>;
type EntityArrayResponseType = HttpResponse<IRepresentantServTech[]>;

@Injectable({ providedIn: 'root' })
export class RepresentantServTechService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/representant-serv-teches';

  constructor(protected http: HttpClient) {}

  create(representantServTech: IRepresentantServTech): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(representantServTech);
    return this.http
      .post<IRepresentantServTech>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(representantServTech: IRepresentantServTech): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(representantServTech);
    return this.http
      .put<IRepresentantServTech>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IRepresentantServTech>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IRepresentantServTech[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(representantServTech: IRepresentantServTech): IRepresentantServTech {
    const copy: IRepresentantServTech = Object.assign({}, representantServTech, {
      dateConvocation:
        representantServTech.dateConvocation && representantServTech.dateConvocation.isValid()
          ? representantServTech.dateConvocation.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateConvocation = res.body.dateConvocation ? moment(res.body.dateConvocation) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((representantServTech: IRepresentantServTech) => {
        representantServTech.dateConvocation = representantServTech.dateConvocation
          ? moment(representantServTech.dateConvocation)
          : undefined;
      });
    }
    return res;
  }
}
