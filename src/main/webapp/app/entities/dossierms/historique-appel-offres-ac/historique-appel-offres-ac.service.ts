import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IHistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';

type EntityResponseType = HttpResponse<IHistoriqueAppelOffresAC>;
type EntityArrayResponseType = HttpResponse<IHistoriqueAppelOffresAC[]>;

@Injectable({ providedIn: 'root' })
export class HistoriqueAppelOffresACService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/historique-appel-offres-acs';

  constructor(protected http: HttpClient) {}

  create(historiqueAppelOffresAC: IHistoriqueAppelOffresAC): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(historiqueAppelOffresAC);
    return this.http
      .post<IHistoriqueAppelOffresAC>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(historiqueAppelOffresAC: IHistoriqueAppelOffresAC): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(historiqueAppelOffresAC);
    return this.http
      .put<IHistoriqueAppelOffresAC>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IHistoriqueAppelOffresAC>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IHistoriqueAppelOffresAC[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(historiqueAppelOffresAC: IHistoriqueAppelOffresAC): IHistoriqueAppelOffresAC {
    const copy: IHistoriqueAppelOffresAC = Object.assign({}, historiqueAppelOffresAC, {
      histoacDatevalidation:
        historiqueAppelOffresAC.histoacDatevalidation && historiqueAppelOffresAC.histoacDatevalidation.isValid()
          ? historiqueAppelOffresAC.histoacDatevalidation.format(DATE_FORMAT)
          : undefined,
      histoacDatecreationdossier:
        historiqueAppelOffresAC.histoacDatecreationdossier && historiqueAppelOffresAC.histoacDatecreationdossier.isValid()
          ? historiqueAppelOffresAC.histoacDatecreationdossier.format(DATE_FORMAT)
          : undefined,
      histoDatevalidation:
        historiqueAppelOffresAC.histoDatevalidation && historiqueAppelOffresAC.histoDatevalidation.isValid()
          ? historiqueAppelOffresAC.histoDatevalidation.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.histoacDatevalidation = res.body.histoacDatevalidation ? moment(res.body.histoacDatevalidation) : undefined;
      res.body.histoacDatecreationdossier = res.body.histoacDatecreationdossier ? moment(res.body.histoacDatecreationdossier) : undefined;
      res.body.histoDatevalidation = res.body.histoDatevalidation ? moment(res.body.histoDatevalidation) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((historiqueAppelOffresAC: IHistoriqueAppelOffresAC) => {
        historiqueAppelOffresAC.histoacDatevalidation = historiqueAppelOffresAC.histoacDatevalidation
          ? moment(historiqueAppelOffresAC.histoacDatevalidation)
          : undefined;
        historiqueAppelOffresAC.histoacDatecreationdossier = historiqueAppelOffresAC.histoacDatecreationdossier
          ? moment(historiqueAppelOffresAC.histoacDatecreationdossier)
          : undefined;
        historiqueAppelOffresAC.histoDatevalidation = historiqueAppelOffresAC.histoDatevalidation
          ? moment(historiqueAppelOffresAC.histoDatevalidation)
          : undefined;
      });
    }
    return res;
  }
}
