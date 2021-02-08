import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';

type EntityResponseType = HttpResponse<ICritereQualifiSoum>;
type EntityArrayResponseType = HttpResponse<ICritereQualifiSoum[]>;

@Injectable({ providedIn: 'root' })
export class CritereQualifiSoumService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/critere-qualifi-soums';

  constructor(protected http: HttpClient) {}

  create(critereQualifiSoum: ICritereQualifiSoum): Observable<EntityResponseType> {
    return this.http.post<ICritereQualifiSoum>(this.resourceUrl, critereQualifiSoum, { observe: 'response' });
  }

  update(critereQualifiSoum: ICritereQualifiSoum): Observable<EntityResponseType> {
    return this.http.put<ICritereQualifiSoum>(this.resourceUrl, critereQualifiSoum, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICritereQualifiSoum>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICritereQualifiSoum[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
