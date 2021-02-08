import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IContrat } from 'app/shared/model/dossierms/contrat.model';

type EntityResponseType = HttpResponse<IContrat>;
type EntityArrayResponseType = HttpResponse<IContrat[]>;

@Injectable({ providedIn: 'root' })
export class ContratService {
  public resourceUrl = SERVER_API_URL + 'services/dossierms/api/contrats';

  constructor(protected http: HttpClient) {}

  create(contrat: IContrat): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(contrat);
    return this.http
      .post<IContrat>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(contrat: IContrat): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(contrat);
    return this.http
      .put<IContrat>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IContrat>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IContrat[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(contrat: IContrat): IContrat {
    const copy: IContrat = Object.assign({}, contrat, {
      conDateSignature:
        contrat.conDateSignature && contrat.conDateSignature.isValid() ? contrat.conDateSignature.format(DATE_FORMAT) : undefined,
      conDateApprobation:
        contrat.conDateApprobation && contrat.conDateApprobation.isValid() ? contrat.conDateApprobation.format(DATE_FORMAT) : undefined,
      conDateNotification:
        contrat.conDateNotification && contrat.conDateNotification.isValid() ? contrat.conDateNotification.format(DATE_FORMAT) : undefined,
      conDateRecepProvisoire:
        contrat.conDateRecepProvisoire && contrat.conDateRecepProvisoire.isValid()
          ? contrat.conDateRecepProvisoire.format(DATE_FORMAT)
          : undefined,
      conDateRecepDefinitive:
        contrat.conDateRecepDefinitive && contrat.conDateRecepDefinitive.isValid()
          ? contrat.conDateRecepDefinitive.format(DATE_FORMAT)
          : undefined,
      conDateOrdreDemarrage:
        contrat.conDateOrdreDemarrage && contrat.conDateOrdreDemarrage.isValid()
          ? contrat.conDateOrdreDemarrage.format(DATE_FORMAT)
          : undefined,
      condateAttributionProvisoire:
        contrat.condateAttributionProvisoire && contrat.condateAttributionProvisoire.isValid()
          ? contrat.condateAttributionProvisoire.format(DATE_FORMAT)
          : undefined,
      condateAttributionDefinitive:
        contrat.condateAttributionDefinitive && contrat.condateAttributionDefinitive.isValid()
          ? contrat.condateAttributionDefinitive.format(DATE_FORMAT)
          : undefined,
      conDatePaiement:
        contrat.conDatePaiement && contrat.conDatePaiement.isValid() ? contrat.conDatePaiement.format(DATE_FORMAT) : undefined,
      dateDemandeImmatriculation:
        contrat.dateDemandeImmatriculation && contrat.dateDemandeImmatriculation.isValid()
          ? contrat.dateDemandeImmatriculation.format(DATE_FORMAT)
          : undefined,
      dateImmatriculation:
        contrat.dateImmatriculation && contrat.dateImmatriculation.isValid() ? contrat.dateImmatriculation.format(DATE_FORMAT) : undefined,
      datePub: contrat.datePub && contrat.datePub.isValid() ? contrat.datePub.format(DATE_FORMAT) : undefined,
      dateDemandePubContrat:
        contrat.dateDemandePubContrat && contrat.dateDemandePubContrat.isValid()
          ? contrat.dateDemandePubContrat.format(DATE_FORMAT)
          : undefined,
      conDateCreation:
        contrat.conDateCreation && contrat.conDateCreation.isValid() ? contrat.conDateCreation.format(DATE_FORMAT) : undefined,
      renouvcontDateDemandeAutorisation:
        contrat.renouvcontDateDemandeAutorisation && contrat.renouvcontDateDemandeAutorisation.isValid()
          ? contrat.renouvcontDateDemandeAutorisation.format(DATE_FORMAT)
          : undefined,
      renouvcontDateautorisation:
        contrat.renouvcontDateautorisation && contrat.renouvcontDateautorisation.isValid()
          ? contrat.renouvcontDateautorisation.format(DATE_FORMAT)
          : undefined,
      renouvcontDateDemandeExamenJuridique:
        contrat.renouvcontDateDemandeExamenJuridique && contrat.renouvcontDateDemandeExamenJuridique.isValid()
          ? contrat.renouvcontDateDemandeExamenJuridique.format(DATE_FORMAT)
          : undefined,
      renouvcontDateExamenJuridique:
        contrat.renouvcontDateExamenJuridique && contrat.renouvcontDateExamenJuridique.isValid()
          ? contrat.renouvcontDateExamenJuridique.format(DATE_FORMAT)
          : undefined,
      renouvcontDateDemandeApprobation:
        contrat.renouvcontDateDemandeApprobation && contrat.renouvcontDateDemandeApprobation.isValid()
          ? contrat.renouvcontDateDemandeApprobation.format(DATE_FORMAT)
          : undefined,
      renouvcontDateApprobation:
        contrat.renouvcontDateApprobation && contrat.renouvcontDateApprobation.isValid()
          ? contrat.renouvcontDateApprobation.format(DATE_FORMAT)
          : undefined,
      renouvcontDateRejet:
        contrat.renouvcontDateRejet && contrat.renouvcontDateRejet.isValid() ? contrat.renouvcontDateRejet.format(DATE_FORMAT) : undefined,
      renouvcontDateRetourApprobation:
        contrat.renouvcontDateRetourApprobation && contrat.renouvcontDateRetourApprobation.isValid()
          ? contrat.renouvcontDateRetourApprobation.format(DATE_FORMAT)
          : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.conDateSignature = res.body.conDateSignature ? moment(res.body.conDateSignature) : undefined;
      res.body.conDateApprobation = res.body.conDateApprobation ? moment(res.body.conDateApprobation) : undefined;
      res.body.conDateNotification = res.body.conDateNotification ? moment(res.body.conDateNotification) : undefined;
      res.body.conDateRecepProvisoire = res.body.conDateRecepProvisoire ? moment(res.body.conDateRecepProvisoire) : undefined;
      res.body.conDateRecepDefinitive = res.body.conDateRecepDefinitive ? moment(res.body.conDateRecepDefinitive) : undefined;
      res.body.conDateOrdreDemarrage = res.body.conDateOrdreDemarrage ? moment(res.body.conDateOrdreDemarrage) : undefined;
      res.body.condateAttributionProvisoire = res.body.condateAttributionProvisoire
        ? moment(res.body.condateAttributionProvisoire)
        : undefined;
      res.body.condateAttributionDefinitive = res.body.condateAttributionDefinitive
        ? moment(res.body.condateAttributionDefinitive)
        : undefined;
      res.body.conDatePaiement = res.body.conDatePaiement ? moment(res.body.conDatePaiement) : undefined;
      res.body.dateDemandeImmatriculation = res.body.dateDemandeImmatriculation ? moment(res.body.dateDemandeImmatriculation) : undefined;
      res.body.dateImmatriculation = res.body.dateImmatriculation ? moment(res.body.dateImmatriculation) : undefined;
      res.body.datePub = res.body.datePub ? moment(res.body.datePub) : undefined;
      res.body.dateDemandePubContrat = res.body.dateDemandePubContrat ? moment(res.body.dateDemandePubContrat) : undefined;
      res.body.conDateCreation = res.body.conDateCreation ? moment(res.body.conDateCreation) : undefined;
      res.body.renouvcontDateDemandeAutorisation = res.body.renouvcontDateDemandeAutorisation
        ? moment(res.body.renouvcontDateDemandeAutorisation)
        : undefined;
      res.body.renouvcontDateautorisation = res.body.renouvcontDateautorisation ? moment(res.body.renouvcontDateautorisation) : undefined;
      res.body.renouvcontDateDemandeExamenJuridique = res.body.renouvcontDateDemandeExamenJuridique
        ? moment(res.body.renouvcontDateDemandeExamenJuridique)
        : undefined;
      res.body.renouvcontDateExamenJuridique = res.body.renouvcontDateExamenJuridique
        ? moment(res.body.renouvcontDateExamenJuridique)
        : undefined;
      res.body.renouvcontDateDemandeApprobation = res.body.renouvcontDateDemandeApprobation
        ? moment(res.body.renouvcontDateDemandeApprobation)
        : undefined;
      res.body.renouvcontDateApprobation = res.body.renouvcontDateApprobation ? moment(res.body.renouvcontDateApprobation) : undefined;
      res.body.renouvcontDateRejet = res.body.renouvcontDateRejet ? moment(res.body.renouvcontDateRejet) : undefined;
      res.body.renouvcontDateRetourApprobation = res.body.renouvcontDateRetourApprobation
        ? moment(res.body.renouvcontDateRetourApprobation)
        : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((contrat: IContrat) => {
        contrat.conDateSignature = contrat.conDateSignature ? moment(contrat.conDateSignature) : undefined;
        contrat.conDateApprobation = contrat.conDateApprobation ? moment(contrat.conDateApprobation) : undefined;
        contrat.conDateNotification = contrat.conDateNotification ? moment(contrat.conDateNotification) : undefined;
        contrat.conDateRecepProvisoire = contrat.conDateRecepProvisoire ? moment(contrat.conDateRecepProvisoire) : undefined;
        contrat.conDateRecepDefinitive = contrat.conDateRecepDefinitive ? moment(contrat.conDateRecepDefinitive) : undefined;
        contrat.conDateOrdreDemarrage = contrat.conDateOrdreDemarrage ? moment(contrat.conDateOrdreDemarrage) : undefined;
        contrat.condateAttributionProvisoire = contrat.condateAttributionProvisoire
          ? moment(contrat.condateAttributionProvisoire)
          : undefined;
        contrat.condateAttributionDefinitive = contrat.condateAttributionDefinitive
          ? moment(contrat.condateAttributionDefinitive)
          : undefined;
        contrat.conDatePaiement = contrat.conDatePaiement ? moment(contrat.conDatePaiement) : undefined;
        contrat.dateDemandeImmatriculation = contrat.dateDemandeImmatriculation ? moment(contrat.dateDemandeImmatriculation) : undefined;
        contrat.dateImmatriculation = contrat.dateImmatriculation ? moment(contrat.dateImmatriculation) : undefined;
        contrat.datePub = contrat.datePub ? moment(contrat.datePub) : undefined;
        contrat.dateDemandePubContrat = contrat.dateDemandePubContrat ? moment(contrat.dateDemandePubContrat) : undefined;
        contrat.conDateCreation = contrat.conDateCreation ? moment(contrat.conDateCreation) : undefined;
        contrat.renouvcontDateDemandeAutorisation = contrat.renouvcontDateDemandeAutorisation
          ? moment(contrat.renouvcontDateDemandeAutorisation)
          : undefined;
        contrat.renouvcontDateautorisation = contrat.renouvcontDateautorisation ? moment(contrat.renouvcontDateautorisation) : undefined;
        contrat.renouvcontDateDemandeExamenJuridique = contrat.renouvcontDateDemandeExamenJuridique
          ? moment(contrat.renouvcontDateDemandeExamenJuridique)
          : undefined;
        contrat.renouvcontDateExamenJuridique = contrat.renouvcontDateExamenJuridique
          ? moment(contrat.renouvcontDateExamenJuridique)
          : undefined;
        contrat.renouvcontDateDemandeApprobation = contrat.renouvcontDateDemandeApprobation
          ? moment(contrat.renouvcontDateDemandeApprobation)
          : undefined;
        contrat.renouvcontDateApprobation = contrat.renouvcontDateApprobation ? moment(contrat.renouvcontDateApprobation) : undefined;
        contrat.renouvcontDateRejet = contrat.renouvcontDateRejet ? moment(contrat.renouvcontDateRejet) : undefined;
        contrat.renouvcontDateRetourApprobation = contrat.renouvcontDateRetourApprobation
          ? moment(contrat.renouvcontDateRetourApprobation)
          : undefined;
      });
    }
    return res;
  }
}
