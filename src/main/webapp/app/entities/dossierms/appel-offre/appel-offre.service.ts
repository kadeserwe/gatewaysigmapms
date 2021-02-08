import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IAppelOffre } from 'app/shared/model/dossierms/appel-offre.model';

type EntityResponseType = HttpResponse<IAppelOffre>;
type EntityArrayResponseType = HttpResponse<IAppelOffre[]>;

@Injectable({ providedIn: 'root' })
export class AppelOffreService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/appel-offres';

  constructor(protected http: HttpClient) {}

  create(appelOffre: IAppelOffre): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(appelOffre);
    return this.http
      .post<IAppelOffre>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(appelOffre: IAppelOffre): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(appelOffre);
    return this.http
      .put<IAppelOffre>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAppelOffre>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAppelOffre[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(appelOffre: IAppelOffre): IAppelOffre {
    const copy: IAppelOffre = Object.assign({}, appelOffre, {
      apoDatecreation:
        appelOffre.apoDatecreation && appelOffre.apoDatecreation.isValid() ? appelOffre.apoDatecreation.format(DATE_FORMAT) : undefined,
      apoDateAutorisation:
        appelOffre.apoDateAutorisation && appelOffre.apoDateAutorisation.isValid()
          ? appelOffre.apoDateAutorisation.format(DATE_FORMAT)
          : undefined,
      apoDateDemandeAutorisation:
        appelOffre.apoDateDemandeAutorisation && appelOffre.apoDateDemandeAutorisation.isValid()
          ? appelOffre.apoDateDemandeAutorisation.format(DATE_FORMAT)
          : undefined,
      apoDateRejet: appelOffre.apoDateRejet && appelOffre.apoDateRejet.isValid() ? appelOffre.apoDateRejet.format(DATE_FORMAT) : undefined,
      apoDateMiseAutorisation:
        appelOffre.apoDateMiseAutorisation && appelOffre.apoDateMiseAutorisation.isValid()
          ? appelOffre.apoDateMiseAutorisation.format(DATE_FORMAT)
          : undefined,
      dateStopProcedure:
        appelOffre.dateStopProcedure && appelOffre.dateStopProcedure.isValid()
          ? appelOffre.dateStopProcedure.format(DATE_FORMAT)
          : undefined,
      dateAffectationDossier:
        appelOffre.dateAffectationDossier && appelOffre.dateAffectationDossier.isValid()
          ? appelOffre.dateAffectationDossier.format(DATE_FORMAT)
          : undefined,
      apoDatePVOuverturepli:
        appelOffre.apoDatePVOuverturepli && appelOffre.apoDatePVOuverturepli.isValid()
          ? appelOffre.apoDatePVOuverturepli.format(DATE_FORMAT)
          : undefined,
      apoDateVersement:
        appelOffre.apoDateVersement && appelOffre.apoDateVersement.isValid() ? appelOffre.apoDateVersement.format(DATE_FORMAT) : undefined,
      datePubListeRestreinte:
        appelOffre.datePubListeRestreinte && appelOffre.datePubListeRestreinte.isValid()
          ? appelOffre.datePubListeRestreinte.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.apoDatecreation = res.body.apoDatecreation ? moment(res.body.apoDatecreation) : undefined;
      res.body.apoDateAutorisation = res.body.apoDateAutorisation ? moment(res.body.apoDateAutorisation) : undefined;
      res.body.apoDateDemandeAutorisation = res.body.apoDateDemandeAutorisation ? moment(res.body.apoDateDemandeAutorisation) : undefined;
      res.body.apoDateRejet = res.body.apoDateRejet ? moment(res.body.apoDateRejet) : undefined;
      res.body.apoDateMiseAutorisation = res.body.apoDateMiseAutorisation ? moment(res.body.apoDateMiseAutorisation) : undefined;
      res.body.dateStopProcedure = res.body.dateStopProcedure ? moment(res.body.dateStopProcedure) : undefined;
      res.body.dateAffectationDossier = res.body.dateAffectationDossier ? moment(res.body.dateAffectationDossier) : undefined;
      res.body.apoDatePVOuverturepli = res.body.apoDatePVOuverturepli ? moment(res.body.apoDatePVOuverturepli) : undefined;
      res.body.apoDateVersement = res.body.apoDateVersement ? moment(res.body.apoDateVersement) : undefined;
      res.body.datePubListeRestreinte = res.body.datePubListeRestreinte ? moment(res.body.datePubListeRestreinte) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((appelOffre: IAppelOffre) => {
        appelOffre.apoDatecreation = appelOffre.apoDatecreation ? moment(appelOffre.apoDatecreation) : undefined;
        appelOffre.apoDateAutorisation = appelOffre.apoDateAutorisation ? moment(appelOffre.apoDateAutorisation) : undefined;
        appelOffre.apoDateDemandeAutorisation = appelOffre.apoDateDemandeAutorisation
          ? moment(appelOffre.apoDateDemandeAutorisation)
          : undefined;
        appelOffre.apoDateRejet = appelOffre.apoDateRejet ? moment(appelOffre.apoDateRejet) : undefined;
        appelOffre.apoDateMiseAutorisation = appelOffre.apoDateMiseAutorisation ? moment(appelOffre.apoDateMiseAutorisation) : undefined;
        appelOffre.dateStopProcedure = appelOffre.dateStopProcedure ? moment(appelOffre.dateStopProcedure) : undefined;
        appelOffre.dateAffectationDossier = appelOffre.dateAffectationDossier ? moment(appelOffre.dateAffectationDossier) : undefined;
        appelOffre.apoDatePVOuverturepli = appelOffre.apoDatePVOuverturepli ? moment(appelOffre.apoDatePVOuverturepli) : undefined;
        appelOffre.apoDateVersement = appelOffre.apoDateVersement ? moment(appelOffre.apoDateVersement) : undefined;
        appelOffre.datePubListeRestreinte = appelOffre.datePubListeRestreinte ? moment(appelOffre.datePubListeRestreinte) : undefined;
      });
    }
    return res;
  }
}
