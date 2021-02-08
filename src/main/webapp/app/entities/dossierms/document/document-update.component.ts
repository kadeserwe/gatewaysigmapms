import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDocument, Document } from 'app/shared/model/dossierms/document.model';
import { DocumentService } from './document.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IAppelOffre } from 'app/shared/model/dossierms/appel-offre.model';
import { AppelOffreService } from 'app/entities/dossierms/appel-offre/appel-offre.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';

type SelectableEntity = IDossierAppelOffre | IAppelOffre | IPlisOuverture | ILot;

@Component({
  selector: 'jhi-document-update',
  templateUrl: './document-update.component.html',
})
export class DocumentUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  appeloffres: IAppelOffre[] = [];
  plisouvertures: IPlisOuverture[] = [];
  lots: ILot[] = [];
  dateDp: any;
  heureDp: any;
  dateDemandePublicationDp: any;
  dateLimiteDepotDp: any;
  heureLimiteDepotDp: any;
  dateOuvertueDesplisDp: any;
  heureOuvertureDesPlisDp: any;

  editForm = this.fb.group({
    id: [],
    typeDocument: [],
    textPVOuverture: [],
    nomFichier: [],
    libelle: [],
    reference: [],
    objet: [],
    origine: [],
    lieuAcquisitionDAO: [],
    fichierDemandePublication: [],
    fichierDC: [],
    fichierAR: [],
    date: [],
    heure: [],
    dateDemandePublication: [],
    dateLimiteDepot: [],
    heureLimiteDepot: [],
    dateOuvertueDesplis: [],
    heureOuvertureDesPlis: [],
    autoriteId: [null, [Validators.required]],
    dossierAppelOffreId: [],
    appelOffreId: [],
    plisOuvertureId: [],
    lotId: [],
  });

  constructor(
    protected documentService: DocumentService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected appelOffreService: AppelOffreService,
    protected plisOuvertureService: PlisOuvertureService,
    protected lotService: LotService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ document }) => {
      this.updateForm(document);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.appelOffreService.query().subscribe((res: HttpResponse<IAppelOffre[]>) => (this.appeloffres = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));
    });
  }

  updateForm(document: IDocument): void {
    this.editForm.patchValue({
      id: document.id,
      typeDocument: document.typeDocument,
      textPVOuverture: document.textPVOuverture,
      nomFichier: document.nomFichier,
      libelle: document.libelle,
      reference: document.reference,
      objet: document.objet,
      origine: document.origine,
      lieuAcquisitionDAO: document.lieuAcquisitionDAO,
      fichierDemandePublication: document.fichierDemandePublication,
      fichierDC: document.fichierDC,
      fichierAR: document.fichierAR,
      date: document.date,
      heure: document.heure,
      dateDemandePublication: document.dateDemandePublication,
      dateLimiteDepot: document.dateLimiteDepot,
      heureLimiteDepot: document.heureLimiteDepot,
      dateOuvertueDesplis: document.dateOuvertueDesplis,
      heureOuvertureDesPlis: document.heureOuvertureDesPlis,
      autoriteId: document.autoriteId,
      dossierAppelOffreId: document.dossierAppelOffreId,
      appelOffreId: document.appelOffreId,
      plisOuvertureId: document.plisOuvertureId,
      lotId: document.lotId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const document = this.createFromForm();
    if (document.id !== undefined) {
      this.subscribeToSaveResponse(this.documentService.update(document));
    } else {
      this.subscribeToSaveResponse(this.documentService.create(document));
    }
  }

  private createFromForm(): IDocument {
    return {
      ...new Document(),
      id: this.editForm.get(['id'])!.value,
      typeDocument: this.editForm.get(['typeDocument'])!.value,
      textPVOuverture: this.editForm.get(['textPVOuverture'])!.value,
      nomFichier: this.editForm.get(['nomFichier'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      reference: this.editForm.get(['reference'])!.value,
      objet: this.editForm.get(['objet'])!.value,
      origine: this.editForm.get(['origine'])!.value,
      lieuAcquisitionDAO: this.editForm.get(['lieuAcquisitionDAO'])!.value,
      fichierDemandePublication: this.editForm.get(['fichierDemandePublication'])!.value,
      fichierDC: this.editForm.get(['fichierDC'])!.value,
      fichierAR: this.editForm.get(['fichierAR'])!.value,
      date: this.editForm.get(['date'])!.value,
      heure: this.editForm.get(['heure'])!.value,
      dateDemandePublication: this.editForm.get(['dateDemandePublication'])!.value,
      dateLimiteDepot: this.editForm.get(['dateLimiteDepot'])!.value,
      heureLimiteDepot: this.editForm.get(['heureLimiteDepot'])!.value,
      dateOuvertueDesplis: this.editForm.get(['dateOuvertueDesplis'])!.value,
      heureOuvertureDesPlis: this.editForm.get(['heureOuvertureDesPlis'])!.value,
      autoriteId: this.editForm.get(['autoriteId'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      appelOffreId: this.editForm.get(['appelOffreId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDocument>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
