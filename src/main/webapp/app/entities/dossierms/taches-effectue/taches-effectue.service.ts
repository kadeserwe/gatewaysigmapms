import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ITachesEffectue } from 'app/shared/model/dossierms/taches-effectue.model';

type EntityResponseType = HttpResponse<ITachesEffectue>;
type EntityArrayResponseType = HttpResponse<ITachesEffectue[]>;

@Injectable({ providedIn: 'root' })
export class TachesEffectueService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/taches-effectues';

  constructor(protected http: HttpClient) {}

  create(tachesEffectue: ITachesEffectue): Observable<EntityResponseType> {
    return this.http.post<ITachesEffectue>(this.resourceUrl, tachesEffectue, { observe: 'response' });
  }

  update(tachesEffectue: ITachesEffectue): Observable<EntityResponseType> {
    return this.http.put<ITachesEffectue>(this.resourceUrl, tachesEffectue, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITachesEffectue>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITachesEffectue[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
