import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IGarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';

type EntityResponseType = HttpResponse<IGarantiesSoumissionnaire>;
type EntityArrayResponseType = HttpResponse<IGarantiesSoumissionnaire[]>;

@Injectable({ providedIn: 'root' })
export class GarantiesSoumissionnaireService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/garanties-soumissionnaires';

  constructor(protected http: HttpClient) {}

  create(garantiesSoumissionnaire: IGarantiesSoumissionnaire): Observable<EntityResponseType> {
    return this.http.post<IGarantiesSoumissionnaire>(this.resourceUrl, garantiesSoumissionnaire, { observe: 'response' });
  }

  update(garantiesSoumissionnaire: IGarantiesSoumissionnaire): Observable<EntityResponseType> {
    return this.http.put<IGarantiesSoumissionnaire>(this.resourceUrl, garantiesSoumissionnaire, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IGarantiesSoumissionnaire>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IGarantiesSoumissionnaire[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
