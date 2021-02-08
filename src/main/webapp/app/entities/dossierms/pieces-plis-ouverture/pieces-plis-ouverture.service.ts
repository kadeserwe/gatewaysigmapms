import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPiecesPlisOuverture } from 'app/shared/model/dossierms/pieces-plis-ouverture.model';

type EntityResponseType = HttpResponse<IPiecesPlisOuverture>;
type EntityArrayResponseType = HttpResponse<IPiecesPlisOuverture[]>;

@Injectable({ providedIn: 'root' })
export class PiecesPlisOuvertureService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/pieces-plis-ouvertures';

  constructor(protected http: HttpClient) {}

  create(piecesPlisOuverture: IPiecesPlisOuverture): Observable<EntityResponseType> {
    return this.http.post<IPiecesPlisOuverture>(this.resourceUrl, piecesPlisOuverture, { observe: 'response' });
  }

  update(piecesPlisOuverture: IPiecesPlisOuverture): Observable<EntityResponseType> {
    return this.http.put<IPiecesPlisOuverture>(this.resourceUrl, piecesPlisOuverture, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPiecesPlisOuverture>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPiecesPlisOuverture[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
