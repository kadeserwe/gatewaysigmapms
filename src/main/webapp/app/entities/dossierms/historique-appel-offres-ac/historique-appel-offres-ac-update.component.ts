import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IHistoriqueAppelOffresAC, HistoriqueAppelOffresAC } from 'app/shared/model/dossierms/historique-appel-offres-ac.model';
import { HistoriqueAppelOffresACService } from './historique-appel-offres-ac.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';

@Component({
  selector: 'jhi-historique-appel-offres-ac-update',
  templateUrl: './historique-appel-offres-ac-update.component.html',
})
export class HistoriqueAppelOffresACUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  histoacDatevalidationDp: any;
  histoacDatecreationdossierDp: any;
  histoDatevalidationDp: any;

  editForm = this.fb.group({
    id: [],
    histoacValidation: [],
    histoacCommentaire: [],
    histoacFichiervalidation: [],
    histoacBorderau: [],
    histoValidation: [],
    histoCommentaire: [],
    histoFichiervalidation: [],
    daoFichier: [],
    origine: [],
    histoacDatevalidation: [],
    histoacDatecreationdossier: [],
    histoDatevalidation: [],
    histoacAttribution: [],
    histoacAc: [],
    validerparNom: [],
    validerparPrenom: [],
    userId: [],
    autiriteId: [],
    dossierAppelOffreId: [],
  });

  constructor(
    protected historiqueAppelOffresACService: HistoriqueAppelOffresACService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ historiqueAppelOffresAC }) => {
      this.updateForm(historiqueAppelOffresAC);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));
    });
  }

  updateForm(historiqueAppelOffresAC: IHistoriqueAppelOffresAC): void {
    this.editForm.patchValue({
      id: historiqueAppelOffresAC.id,
      histoacValidation: historiqueAppelOffresAC.histoacValidation,
      histoacCommentaire: historiqueAppelOffresAC.histoacCommentaire,
      histoacFichiervalidation: historiqueAppelOffresAC.histoacFichiervalidation,
      histoacBorderau: historiqueAppelOffresAC.histoacBorderau,
      histoValidation: historiqueAppelOffresAC.histoValidation,
      histoCommentaire: historiqueAppelOffresAC.histoCommentaire,
      histoFichiervalidation: historiqueAppelOffresAC.histoFichiervalidation,
      daoFichier: historiqueAppelOffresAC.daoFichier,
      origine: historiqueAppelOffresAC.origine,
      histoacDatevalidation: historiqueAppelOffresAC.histoacDatevalidation,
      histoacDatecreationdossier: historiqueAppelOffresAC.histoacDatecreationdossier,
      histoDatevalidation: historiqueAppelOffresAC.histoDatevalidation,
      histoacAttribution: historiqueAppelOffresAC.histoacAttribution,
      histoacAc: historiqueAppelOffresAC.histoacAc,
      validerparNom: historiqueAppelOffresAC.validerparNom,
      validerparPrenom: historiqueAppelOffresAC.validerparPrenom,
      userId: historiqueAppelOffresAC.userId,
      autiriteId: historiqueAppelOffresAC.autiriteId,
      dossierAppelOffreId: historiqueAppelOffresAC.dossierAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const historiqueAppelOffresAC = this.createFromForm();
    if (historiqueAppelOffresAC.id !== undefined) {
      this.subscribeToSaveResponse(this.historiqueAppelOffresACService.update(historiqueAppelOffresAC));
    } else {
      this.subscribeToSaveResponse(this.historiqueAppelOffresACService.create(historiqueAppelOffresAC));
    }
  }

  private createFromForm(): IHistoriqueAppelOffresAC {
    return {
      ...new HistoriqueAppelOffresAC(),
      id: this.editForm.get(['id'])!.value,
      histoacValidation: this.editForm.get(['histoacValidation'])!.value,
      histoacCommentaire: this.editForm.get(['histoacCommentaire'])!.value,
      histoacFichiervalidation: this.editForm.get(['histoacFichiervalidation'])!.value,
      histoacBorderau: this.editForm.get(['histoacBorderau'])!.value,
      histoValidation: this.editForm.get(['histoValidation'])!.value,
      histoCommentaire: this.editForm.get(['histoCommentaire'])!.value,
      histoFichiervalidation: this.editForm.get(['histoFichiervalidation'])!.value,
      daoFichier: this.editForm.get(['daoFichier'])!.value,
      origine: this.editForm.get(['origine'])!.value,
      histoacDatevalidation: this.editForm.get(['histoacDatevalidation'])!.value,
      histoacDatecreationdossier: this.editForm.get(['histoacDatecreationdossier'])!.value,
      histoDatevalidation: this.editForm.get(['histoDatevalidation'])!.value,
      histoacAttribution: this.editForm.get(['histoacAttribution'])!.value,
      histoacAc: this.editForm.get(['histoacAc'])!.value,
      validerparNom: this.editForm.get(['validerparNom'])!.value,
      validerparPrenom: this.editForm.get(['validerparPrenom'])!.value,
      userId: this.editForm.get(['userId'])!.value,
      autiriteId: this.editForm.get(['autiriteId'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IHistoriqueAppelOffresAC>>): void {
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

  trackById(index: number, item: IDossierAppelOffre): any {
    return item.id;
  }
}
