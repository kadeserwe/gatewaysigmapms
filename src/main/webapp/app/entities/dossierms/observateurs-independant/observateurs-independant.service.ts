import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IObservateursIndependant } from 'app/shared/model/dossierms/observateurs-independant.model';

type EntityResponseType = HttpResponse<IObservateursIndependant>;
type EntityArrayResponseType = HttpResponse<IObservateursIndependant[]>;

@Injectable({ providedIn: 'root' })
export class ObservateursIndependantService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/observateurs-independants';

  constructor(protected http: HttpClient) {}

  create(observateursIndependant: IObservateursIndependant): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(observateursIndependant);
    return this.http
      .post<IObservateursIndependant>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(observateursIndependant: IObservateursIndependant): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(observateursIndependant);
    return this.http
      .put<IObservateursIndependant>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IObservateursIndependant>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IObservateursIndependant[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(observateursIndependant: IObservateursIndependant): IObservateursIndependant {
    const copy: IObservateursIndependant = Object.assign({}, observateursIndependant, {
      dateConvocation:
        observateursIndependant.dateConvocation && observateursIndependant.dateConvocation.isValid()
          ? observateursIndependant.dateConvocation.format(DATE_FORMAT)
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
      res.body.forEach((observateursIndependant: IObservateursIndependant) => {
        observateursIndependant.dateConvocation = observateursIndependant.dateConvocation
          ? moment(observateursIndependant.dateConvocation)
          : undefined;
      });
    }
    return res;
  }
}
