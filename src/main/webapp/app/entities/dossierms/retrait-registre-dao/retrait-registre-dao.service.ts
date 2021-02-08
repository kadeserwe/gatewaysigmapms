import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IRetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';

type EntityResponseType = HttpResponse<IRetraitRegistreDAO>;
type EntityArrayResponseType = HttpResponse<IRetraitRegistreDAO[]>;

@Injectable({ providedIn: 'root' })
export class RetraitRegistreDAOService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/retrait-registre-daos';

  constructor(protected http: HttpClient) {}

  create(retraitRegistreDAO: IRetraitRegistreDAO): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(retraitRegistreDAO);
    return this.http
      .post<IRetraitRegistreDAO>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(retraitRegistreDAO: IRetraitRegistreDAO): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(retraitRegistreDAO);
    return this.http
      .put<IRetraitRegistreDAO>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IRetraitRegistreDAO>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IRetraitRegistreDAO[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(retraitRegistreDAO: IRetraitRegistreDAO): IRetraitRegistreDAO {
    const copy: IRetraitRegistreDAO = Object.assign({}, retraitRegistreDAO, {
      dateRetrait:
        retraitRegistreDAO.dateRetrait && retraitRegistreDAO.dateRetrait.isValid()
          ? retraitRegistreDAO.dateRetrait.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateRetrait = res.body.dateRetrait ? moment(res.body.dateRetrait) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((retraitRegistreDAO: IRetraitRegistreDAO) => {
        retraitRegistreDAO.dateRetrait = retraitRegistreDAO.dateRetrait ? moment(retraitRegistreDAO.dateRetrait) : undefined;
      });
    }
    return res;
  }
}
