import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';

type EntityResponseType = HttpResponse<IPlisOuverture>;
type EntityArrayResponseType = HttpResponse<IPlisOuverture[]>;

@Injectable({ providedIn: 'root' })
export class PlisOuvertureService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/plis-ouvertures';

  constructor(protected http: HttpClient) {}

  create(plisOuverture: IPlisOuverture): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(plisOuverture);
    return this.http
      .post<IPlisOuverture>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(plisOuverture: IPlisOuverture): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(plisOuverture);
    return this.http
      .put<IPlisOuverture>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IPlisOuverture>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPlisOuverture[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(plisOuverture: IPlisOuverture): IPlisOuverture {
    const copy: IPlisOuverture = Object.assign({}, plisOuverture, {
      dateDepot: plisOuverture.dateDepot && plisOuverture.dateDepot.isValid() ? plisOuverture.dateDepot.format(DATE_FORMAT) : undefined,
      heuredepot: plisOuverture.heuredepot && plisOuverture.heuredepot.isValid() ? plisOuverture.heuredepot.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateDepot = res.body.dateDepot ? moment(res.body.dateDepot) : undefined;
      res.body.heuredepot = res.body.heuredepot ? moment(res.body.heuredepot) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((plisOuverture: IPlisOuverture) => {
        plisOuverture.dateDepot = plisOuverture.dateDepot ? moment(plisOuverture.dateDepot) : undefined;
        plisOuverture.heuredepot = plisOuverture.heuredepot ? moment(plisOuverture.heuredepot) : undefined;
      });
    }
    return res;
  }
}
