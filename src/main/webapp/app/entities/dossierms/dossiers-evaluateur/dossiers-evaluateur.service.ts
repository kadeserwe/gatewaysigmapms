import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDossiersEvaluateur } from 'app/shared/model/dossierms/dossiers-evaluateur.model';

type EntityResponseType = HttpResponse<IDossiersEvaluateur>;
type EntityArrayResponseType = HttpResponse<IDossiersEvaluateur[]>;

@Injectable({ providedIn: 'root' })
export class DossiersEvaluateurService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/dossiers-evaluateurs';

  constructor(protected http: HttpClient) {}

  create(dossiersEvaluateur: IDossiersEvaluateur): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dossiersEvaluateur);
    return this.http
      .post<IDossiersEvaluateur>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(dossiersEvaluateur: IDossiersEvaluateur): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dossiersEvaluateur);
    return this.http
      .put<IDossiersEvaluateur>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDossiersEvaluateur>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDossiersEvaluateur[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(dossiersEvaluateur: IDossiersEvaluateur): IDossiersEvaluateur {
    const copy: IDossiersEvaluateur = Object.assign({}, dossiersEvaluateur, {
      dateRemise:
        dossiersEvaluateur.dateRemise && dossiersEvaluateur.dateRemise.isValid()
          ? dossiersEvaluateur.dateRemise.format(DATE_FORMAT)
          : undefined,
      dateLimite:
        dossiersEvaluateur.dateLimite && dossiersEvaluateur.dateLimite.isValid()
          ? dossiersEvaluateur.dateLimite.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateRemise = res.body.dateRemise ? moment(res.body.dateRemise) : undefined;
      res.body.dateLimite = res.body.dateLimite ? moment(res.body.dateLimite) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((dossiersEvaluateur: IDossiersEvaluateur) => {
        dossiersEvaluateur.dateRemise = dossiersEvaluateur.dateRemise ? moment(dossiersEvaluateur.dateRemise) : undefined;
        dossiersEvaluateur.dateLimite = dossiersEvaluateur.dateLimite ? moment(dossiersEvaluateur.dateLimite) : undefined;
      });
    }
    return res;
  }
}
