import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPresenceOuverture } from 'app/shared/model/dossierms/presence-ouverture.model';

type EntityResponseType = HttpResponse<IPresenceOuverture>;
type EntityArrayResponseType = HttpResponse<IPresenceOuverture[]>;

@Injectable({ providedIn: 'root' })
export class PresenceOuvertureService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/presence-ouvertures';

  constructor(protected http: HttpClient) {}

  create(presenceOuverture: IPresenceOuverture): Observable<EntityResponseType> {
    return this.http.post<IPresenceOuverture>(this.resourceUrl, presenceOuverture, { observe: 'response' });
  }

  update(presenceOuverture: IPresenceOuverture): Observable<EntityResponseType> {
    return this.http.put<IPresenceOuverture>(this.resourceUrl, presenceOuverture, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPresenceOuverture>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPresenceOuverture[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
