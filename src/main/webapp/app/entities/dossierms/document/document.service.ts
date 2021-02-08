import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDocument } from 'app/shared/model/dossierms/document.model';

type EntityResponseType = HttpResponse<IDocument>;
type EntityArrayResponseType = HttpResponse<IDocument[]>;

@Injectable({ providedIn: 'root' })
export class DocumentService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/documents';

  constructor(protected http: HttpClient) {}

  create(document: IDocument): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(document);
    return this.http
      .post<IDocument>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(document: IDocument): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(document);
    return this.http
      .put<IDocument>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDocument>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDocument[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(document: IDocument): IDocument {
    const copy: IDocument = Object.assign({}, document, {
      date: document.date && document.date.isValid() ? document.date.format(DATE_FORMAT) : undefined,
      heure: document.heure && document.heure.isValid() ? document.heure.format(DATE_FORMAT) : undefined,
      dateDemandePublication:
        document.dateDemandePublication && document.dateDemandePublication.isValid()
          ? document.dateDemandePublication.format(DATE_FORMAT)
          : undefined,
      dateLimiteDepot:
        document.dateLimiteDepot && document.dateLimiteDepot.isValid() ? document.dateLimiteDepot.format(DATE_FORMAT) : undefined,
      heureLimiteDepot:
        document.heureLimiteDepot && document.heureLimiteDepot.isValid() ? document.heureLimiteDepot.format(DATE_FORMAT) : undefined,
      dateOuvertueDesplis:
        document.dateOuvertueDesplis && document.dateOuvertueDesplis.isValid()
          ? document.dateOuvertueDesplis.format(DATE_FORMAT)
          : undefined,
      heureOuvertureDesPlis:
        document.heureOuvertureDesPlis && document.heureOuvertureDesPlis.isValid()
          ? document.heureOuvertureDesPlis.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date ? moment(res.body.date) : undefined;
      res.body.heure = res.body.heure ? moment(res.body.heure) : undefined;
      res.body.dateDemandePublication = res.body.dateDemandePublication ? moment(res.body.dateDemandePublication) : undefined;
      res.body.dateLimiteDepot = res.body.dateLimiteDepot ? moment(res.body.dateLimiteDepot) : undefined;
      res.body.heureLimiteDepot = res.body.heureLimiteDepot ? moment(res.body.heureLimiteDepot) : undefined;
      res.body.dateOuvertueDesplis = res.body.dateOuvertueDesplis ? moment(res.body.dateOuvertueDesplis) : undefined;
      res.body.heureOuvertureDesPlis = res.body.heureOuvertureDesPlis ? moment(res.body.heureOuvertureDesPlis) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((document: IDocument) => {
        document.date = document.date ? moment(document.date) : undefined;
        document.heure = document.heure ? moment(document.heure) : undefined;
        document.dateDemandePublication = document.dateDemandePublication ? moment(document.dateDemandePublication) : undefined;
        document.dateLimiteDepot = document.dateLimiteDepot ? moment(document.dateLimiteDepot) : undefined;
        document.heureLimiteDepot = document.heureLimiteDepot ? moment(document.heureLimiteDepot) : undefined;
        document.dateOuvertueDesplis = document.dateOuvertueDesplis ? moment(document.dateOuvertueDesplis) : undefined;
        document.heureOuvertureDesPlis = document.heureOuvertureDesPlis ? moment(document.heureOuvertureDesPlis) : undefined;
      });
    }
    return res;
  }
}
