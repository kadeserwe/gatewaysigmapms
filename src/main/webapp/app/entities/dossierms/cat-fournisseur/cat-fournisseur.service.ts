import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';

type EntityResponseType = HttpResponse<ICatFournisseur>;
type EntityArrayResponseType = HttpResponse<ICatFournisseur[]>;

@Injectable({ providedIn: 'root' })
export class CatFournisseurService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/cat-fournisseurs';

  constructor(protected http: HttpClient) {}

  create(catFournisseur: ICatFournisseur): Observable<EntityResponseType> {
    return this.http.post<ICatFournisseur>(this.resourceUrl, catFournisseur, { observe: 'response' });
  }

  update(catFournisseur: ICatFournisseur): Observable<EntityResponseType> {
    return this.http.put<ICatFournisseur>(this.resourceUrl, catFournisseur, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICatFournisseur>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICatFournisseur[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
