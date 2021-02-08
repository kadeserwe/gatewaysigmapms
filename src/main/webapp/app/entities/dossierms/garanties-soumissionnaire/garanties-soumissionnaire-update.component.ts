import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IGarantiesSoumissionnaire, GarantiesSoumissionnaire } from 'app/shared/model/dossierms/garanties-soumissionnaire.model';
import { GarantiesSoumissionnaireService } from './garanties-soumissionnaire.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IGarantiesDossier } from 'app/shared/model/dossierms/garanties-dossier.model';
import { GarantiesDossierService } from 'app/entities/dossierms/garanties-dossier/garanties-dossier.service';
import { IPlisOuverture } from 'app/shared/model/dossierms/plis-ouverture.model';
import { PlisOuvertureService } from 'app/entities/dossierms/plis-ouverture/plis-ouverture.service';
import { INaturesGarantie } from 'app/shared/model/dossierms/natures-garantie.model';
import { NaturesGarantieService } from 'app/entities/dossierms/natures-garantie/natures-garantie.service';

type SelectableEntity = IDossierAppelOffre | IGarantiesDossier | IPlisOuverture | INaturesGarantie;

@Component({
  selector: 'jhi-garanties-soumissionnaire-update',
  templateUrl: './garanties-soumissionnaire-update.component.html',
})
export class GarantiesSoumissionnaireUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  garantiesdossiers: IGarantiesDossier[] = [];
  plisouvertures: IPlisOuverture[] = [];
  naturesgaranties: INaturesGarantie[] = [];

  editForm = this.fb.group({
    id: [],
    fournie: [],
    libelle: [],
    observations: [],
    libellelot: [],
    montant: [],
    dossierAppelOffreId: [],
    garantiesDossierId: [],
    plisOuvertureId: [],
    naturesGarantieId: [],
  });

  constructor(
    protected garantiesSoumissionnaireService: GarantiesSoumissionnaireService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected garantiesDossierService: GarantiesDossierService,
    protected plisOuvertureService: PlisOuvertureService,
    protected naturesGarantieService: NaturesGarantieService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ garantiesSoumissionnaire }) => {
      this.updateForm(garantiesSoumissionnaire);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.garantiesDossierService.query().subscribe((res: HttpResponse<IGarantiesDossier[]>) => (this.garantiesdossiers = res.body || []));

      this.plisOuvertureService.query().subscribe((res: HttpResponse<IPlisOuverture[]>) => (this.plisouvertures = res.body || []));

      this.naturesGarantieService.query().subscribe((res: HttpResponse<INaturesGarantie[]>) => (this.naturesgaranties = res.body || []));
    });
  }

  updateForm(garantiesSoumissionnaire: IGarantiesSoumissionnaire): void {
    this.editForm.patchValue({
      id: garantiesSoumissionnaire.id,
      fournie: garantiesSoumissionnaire.fournie,
      libelle: garantiesSoumissionnaire.libelle,
      observations: garantiesSoumissionnaire.observations,
      libellelot: garantiesSoumissionnaire.libellelot,
      montant: garantiesSoumissionnaire.montant,
      dossierAppelOffreId: garantiesSoumissionnaire.dossierAppelOffreId,
      garantiesDossierId: garantiesSoumissionnaire.garantiesDossierId,
      plisOuvertureId: garantiesSoumissionnaire.plisOuvertureId,
      naturesGarantieId: garantiesSoumissionnaire.naturesGarantieId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const garantiesSoumissionnaire = this.createFromForm();
    if (garantiesSoumissionnaire.id !== undefined) {
      this.subscribeToSaveResponse(this.garantiesSoumissionnaireService.update(garantiesSoumissionnaire));
    } else {
      this.subscribeToSaveResponse(this.garantiesSoumissionnaireService.create(garantiesSoumissionnaire));
    }
  }

  private createFromForm(): IGarantiesSoumissionnaire {
    return {
      ...new GarantiesSoumissionnaire(),
      id: this.editForm.get(['id'])!.value,
      fournie: this.editForm.get(['fournie'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      observations: this.editForm.get(['observations'])!.value,
      libellelot: this.editForm.get(['libellelot'])!.value,
      montant: this.editForm.get(['montant'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      garantiesDossierId: this.editForm.get(['garantiesDossierId'])!.value,
      plisOuvertureId: this.editForm.get(['plisOuvertureId'])!.value,
      naturesGarantieId: this.editForm.get(['naturesGarantieId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IGarantiesSoumissionnaire>>): void {
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
