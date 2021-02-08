import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDossiersCommissionsMarche } from 'app/shared/model/dossierms/dossiers-commissions-marche.model';

type EntityResponseType = HttpResponse<IDossiersCommissionsMarche>;
type EntityArrayResponseType = HttpResponse<IDossiersCommissionsMarche[]>;

@Injectable({ providedIn: 'root' })
export class DossiersCommissionsMarcheService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/dossiers-commissions-marches';

  constructor(protected http: HttpClient) {}

  create(dossiersCommissionsMarche: IDossiersCommissionsMarche): Observable<EntityResponseType> {
    return this.http.post<IDossiersCommissionsMarche>(this.resourceUrl, dossiersCommissionsMarche, { observe: 'response' });
  }

  update(dossiersCommissionsMarche: IDossiersCommissionsMarche): Observable<EntityResponseType> {
    return this.http.put<IDossiersCommissionsMarche>(this.resourceUrl, dossiersCommissionsMarche, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDossiersCommissionsMarche>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDossiersCommissionsMarche[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
