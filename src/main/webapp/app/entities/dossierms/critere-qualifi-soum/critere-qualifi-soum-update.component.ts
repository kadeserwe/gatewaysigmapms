import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICritereQualifiSoum, CritereQualifiSoum } from 'app/shared/model/dossierms/critere-qualifi-soum.model';
import { CritereQualifiSoumService } from './critere-qualifi-soum.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { ILot } from 'app/shared/model/dossierms/lot.model';
import { LotService } from 'app/entities/dossierms/lot/lot.service';
import { IDossiersSouscritere } from 'app/shared/model/dossierms/dossiers-souscritere.model';
import { DossiersSouscritereService } from 'app/entities/dossierms/dossiers-souscritere/dossiers-souscritere.service';

type SelectableEntity = IDossierAppelOffre | IPlisOuverture | ILot | IDossiersSouscritere;

@Component({
  selector: 'jhi-critere-qualifi-soum-update',
  templateUrl: './critere-qualifi-soum-update.component.html',
})
export class CritereQualifiSoumUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  plisouvertures: IPlisOuverture[] = [];
  lots: ILot[] = [];
  dossierssouscriteres: IDossiersSouscritere[] = [];

  editForm = this.fb.group({
    id: [],
    conforme: [],
    libelle: [],
    libelleLot: [],
    dossierAppelOffreId: [],
    plisOuvertureId: [],
    lotId: [],
    dossiersSosuscritereId: [],
  });

  constructor(
    protected critereQualifiSoumService: CritereQualifiSoumService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected plisOuvertureService: PlisOuvertureService,
    protected lotService: LotService,
    protected dossiersSouscritereService: DossiersSouscritereService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ critereQualifiSoum }) => {
      this.updateForm(critereQualifiSoum);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));

      this.lotService.query().subscribe((res: HttpResponse<ILot[]>) => (this.lots = res.body || []));

      this.dossiersSouscritereService
        .query()
        .subscribe((res: HttpResponse<IDossiersSouscritere[]>) => (this.dossierssouscriteres = res.body || []));
    });
  }

  updateForm(critereQualifiSoum: ICritereQualifiSoum): void {
    this.editForm.patchValue({
      id: critereQualifiSoum.id,
      conforme: critereQualifiSoum.conforme,
      libelle: critereQualifiSoum.libelle,
      libelleLot: critereQualifiSoum.libelleLot,
      dossierAppelOffreId: critereQualifiSoum.dossierAppelOffreId,
      plisOuvertureId: critereQualifiSoum.plisOuvertureId,
      lotId: critereQualifiSoum.lotId,
      dossiersSosuscritereId: critereQualifiSoum.dossiersSosuscritereId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const critereQualifiSoum = this.createFromForm();
    if (critereQualifiSoum.id !== undefined) {
      this.subscribeToSaveResponse(this.critereQualifiSoumService.update(critereQualifiSoum));
    } else {
      this.subscribeToSaveResponse(this.critereQualifiSoumService.create(critereQualifiSoum));
    }
  }

  private createFromForm(): ICritereQualifiSoum {
    return {
      ...new CritereQualifiSoum(),
      id: this.editForm.get(['id'])!.value,
      conforme: this.editForm.get(['conforme'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      libelleLot: this.editForm.get(['libelleLot'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
      lotId: this.editForm.get(['lotId'])!.value,
      dossiersSosuscritereId: this.editForm.get(['dossiersSosuscritereId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICritereQualifiSoum>>): void {
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
