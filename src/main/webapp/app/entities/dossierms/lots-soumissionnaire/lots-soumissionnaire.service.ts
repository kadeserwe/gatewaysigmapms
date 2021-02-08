import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ILotsSoumissionnaire } from 'app/shared/model/dossierms/lots-soumissionnaire.model';

type EntityResponseType = HttpResponse<ILotsSoumissionnaire>;
type EntityArrayResponseType = HttpResponse<ILotsSoumissionnaire[]>;

@Injectable({ providedIn: 'root' })
export class LotsSoumissionnaireService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/lots-soumissionnaires';

  constructor(protected http: HttpClient) {}

  create(lotsSoumissionnaire: ILotsSoumissionnaire): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(lotsSoumissionnaire);
    return this.http
      .post<ILotsSoumissionnaire>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(lotsSoumissionnaire: ILotsSoumissionnaire): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(lotsSoumissionnaire);
    return this.http
      .put<ILotsSoumissionnaire>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ILotsSoumissionnaire>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ILotsSoumissionnaire[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(lotsSoumissionnaire: ILotsSoumissionnaire): ILotsSoumissionnaire {
    const copy: ILotsSoumissionnaire = Object.assign({}, lotsSoumissionnaire, {
      dateDepot:
        lotsSoumissionnaire.dateDepot && lotsSoumissionnaire.dateDepot.isValid()
          ? lotsSoumissionnaire.dateDepot.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateDepot = res.body.dateDepot ? moment(res.body.dateDepot) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((lotsSoumissionnaire: ILotsSoumissionnaire) => {
        lotsSoumissionnaire.dateDepot = lotsSoumissionnaire.dateDepot ? moment(lotsSoumissionnaire.dateDepot) : undefined;
      });
    }
    return res;
  }
}
