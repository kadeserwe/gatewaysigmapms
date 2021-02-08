import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICritere } from 'app/shared/model/dossierms/critere.model';

type EntityResponseType = HttpResponse<ICritere>;
type EntityArrayResponseType = HttpResponse<ICritere[]>;

@Injectable({ providedIn: 'root' })
export class CritereService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/criteres';

  constructor(protected http: HttpClient) {}

  create(critere: ICritere): Observable<EntityResponseType> {
    return this.http.post<ICritere>(this.resourceUrl, critere, { observe: 'response' });
  }

  update(critere: ICritere): Observable<EntityResponseType> {
    return this.http.put<ICritere>(this.resourceUrl, critere, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICritere>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICritere[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
