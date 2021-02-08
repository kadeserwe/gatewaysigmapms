import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDossiersPiece } from 'app/shared/model/dossierms/dossiers-piece.model';

type EntityResponseType = HttpResponse<IDossiersPiece>;
type EntityArrayResponseType = HttpResponse<IDossiersPiece[]>;

@Injectable({ providedIn: 'root' })
export class DossiersPieceService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/dossiers-pieces';

  constructor(protected http: HttpClient) {}

  create(dossiersPiece: IDossiersPiece): Observable<EntityResponseType> {
    return this.http.post<IDossiersPiece>(this.resourceUrl, dossiersPiece, { observe: 'response' });
  }

  update(dossiersPiece: IDossiersPiece): Observable<EntityResponseType> {
    return this.http.put<IDossiersPiece>(this.resourceUrl, dossiersPiece, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDossiersPiece>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDossiersPiece[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
