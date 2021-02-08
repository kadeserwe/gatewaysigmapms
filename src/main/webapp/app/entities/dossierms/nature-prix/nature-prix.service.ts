import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { INaturePrix } from 'app/shared/model/dossierms/nature-prix.model';

type EntityResponseType = HttpResponse<INaturePrix>;
type EntityArrayResponseType = HttpResponse<INaturePrix[]>;

@Injectable({ providedIn: 'root' })
export class NaturePrixService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/nature-prixes';

  constructor(protected http: HttpClient) {}

  create(naturePrix: INaturePrix): Observable<EntityResponseType> {
    return this.http.post<INaturePrix>(this.resourceUrl, naturePrix, { observe: 'response' });
  }

  update(naturePrix: INaturePrix): Observable<EntityResponseType> {
    return this.http.put<INaturePrix>(this.resourceUrl, naturePrix, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<INaturePrix>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<INaturePrix[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
