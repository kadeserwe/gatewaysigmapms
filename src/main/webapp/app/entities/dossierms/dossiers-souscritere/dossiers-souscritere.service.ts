import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';

type EntityResponseType = HttpResponse<IDossiersSouscritere>;
type EntityArrayResponseType = HttpResponse<IDossiersSouscritere[]>;

@Injectable({ providedIn: 'root' })
export class DossiersSouscritereService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/dossiers-souscriteres';

  constructor(protected http: HttpClient) {}

  create(dossiersSouscritere: IDossiersSouscritere): Observable<EntityResponseType> {
    return this.http.post<IDossiersSouscritere>(this.resourceUrl, dossiersSouscritere, { observe: 'response' });
  }

  update(dossiersSouscritere: IDossiersSouscritere): Observable<EntityResponseType> {
    return this.http.put<IDossiersSouscritere>(this.resourceUrl, dossiersSouscritere, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDossiersSouscritere>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDossiersSouscritere[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
