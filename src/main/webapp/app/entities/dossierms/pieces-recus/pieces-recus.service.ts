import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPiecesRecus } from 'app/shared/model/dossierms/pieces-recus.model';

type EntityResponseType = HttpResponse<IPiecesRecus>;
type EntityArrayResponseType = HttpResponse<IPiecesRecus[]>;

@Injectable({ providedIn: 'root' })
export class PiecesRecusService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/pieces-recuses';

  constructor(protected http: HttpClient) {}

  create(piecesRecus: IPiecesRecus): Observable<EntityResponseType> {
    return this.http.post<IPiecesRecus>(this.resourceUrl, piecesRecus, { observe: 'response' });
  }

  update(piecesRecus: IPiecesRecus): Observable<EntityResponseType> {
    return this.http.put<IPiecesRecus>(this.resourceUrl, piecesRecus, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPiecesRecus>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPiecesRecus[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
