import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IMonnaieOffre } from 'app/shared/model/dossierms/monnaie-offre.model';

type EntityResponseType = HttpResponse<IMonnaieOffre>;
type EntityArrayResponseType = HttpResponse<IMonnaieOffre[]>;

@Injectable({ providedIn: 'root' })
export class MonnaieOffreService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/monnaie-offres';

  constructor(protected http: HttpClient) {}

  create(monnaieOffre: IMonnaieOffre): Observable<EntityResponseType> {
    return this.http.post<IMonnaieOffre>(this.resourceUrl, monnaieOffre, { observe: 'response' });
  }

  update(monnaieOffre: IMonnaieOffre): Observable<EntityResponseType> {
    return this.http.put<IMonnaieOffre>(this.resourceUrl, monnaieOffre, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMonnaieOffre>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMonnaieOffre[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
