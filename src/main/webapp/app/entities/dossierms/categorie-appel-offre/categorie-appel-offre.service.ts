import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';

type EntityResponseType = HttpResponse<ICategorieAppelOffre>;
type EntityArrayResponseType = HttpResponse<ICategorieAppelOffre[]>;

@Injectable({ providedIn: 'root' })
export class CategorieAppelOffreService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/categorie-appel-offres';

  constructor(protected http: HttpClient) {}

  create(categorieAppelOffre: ICategorieAppelOffre): Observable<EntityResponseType> {
    return this.http.post<ICategorieAppelOffre>(this.resourceUrl, categorieAppelOffre, { observe: 'response' });
  }

  update(categorieAppelOffre: ICategorieAppelOffre): Observable<EntityResponseType> {
    return this.http.put<ICategorieAppelOffre>(this.resourceUrl, categorieAppelOffre, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICategorieAppelOffre>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICategorieAppelOffre[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
