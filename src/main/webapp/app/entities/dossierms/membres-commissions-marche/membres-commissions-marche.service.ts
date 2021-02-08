import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IMembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';

type EntityResponseType = HttpResponse<IMembresCommissionsMarche>;
type EntityArrayResponseType = HttpResponse<IMembresCommissionsMarche[]>;

@Injectable({ providedIn: 'root' })
export class MembresCommissionsMarcheService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/membres-commissions-marches';

  constructor(protected http: HttpClient) {}

  create(membresCommissionsMarche: IMembresCommissionsMarche): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(membresCommissionsMarche);
    return this.http
      .post<IMembresCommissionsMarche>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(membresCommissionsMarche: IMembresCommissionsMarche): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(membresCommissionsMarche);
    return this.http
      .put<IMembresCommissionsMarche>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IMembresCommissionsMarche>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IMembresCommissionsMarche[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(membresCommissionsMarche: IMembresCommissionsMarche): IMembresCommissionsMarche {
    const copy: IMembresCommissionsMarche = Object.assign({}, membresCommissionsMarche, {
      dateArrete:
        membresCommissionsMarche.dateArrete && membresCommissionsMarche.dateArrete.isValid()
          ? membresCommissionsMarche.dateArrete.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateArrete = res.body.dateArrete ? moment(res.body.dateArrete) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((membresCommissionsMarche: IMembresCommissionsMarche) => {
        membresCommissionsMarche.dateArrete = membresCommissionsMarche.dateArrete ? moment(membresCommissionsMarche.dateArrete) : undefined;
      });
    }
    return res;
  }
}
