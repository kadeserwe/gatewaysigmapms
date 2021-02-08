import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IGarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';

type EntityResponseType = HttpResponse<IGarantiesDossier>;
type EntityArrayResponseType = HttpResponse<IGarantiesDossier[]>;

@Injectable({ providedIn: 'root' })
export class GarantiesDossierService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/garanties-dossiers';

  constructor(protected http: HttpClient) {}

  create(garantiesDossier: IGarantiesDossier): Observable<EntityResponseType> {
    return this.http.post<IGarantiesDossier>(this.resourceUrl, garantiesDossier, { observe: 'response' });
  }

  update(garantiesDossier: IGarantiesDossier): Observable<EntityResponseType> {
    return this.http.put<IGarantiesDossier>(this.resourceUrl, garantiesDossier, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IGarantiesDossier>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IGarantiesDossier[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
