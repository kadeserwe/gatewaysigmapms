import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IRepresentantServTech, RepresentantServTech } from 'app/shared/model/dossierms/representant-serv-tech.model';
import { RepresentantServTechService } from './representant-serv-tech.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';

@Component({
  selector: 'jhi-representant-serv-tech-update',
  templateUrl: './representant-serv-tech-update.component.html',
})
export class RepresentantServTechUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  dateConvocationDp: any;

  editForm = this.fb.group({
    id: [],
    representant: [],
    qualite: [],
    presence: [],
    dateConvocation: [],
    etape: [],
    dossierAppelOffreId: [],
  });

  constructor(
    protected representantServTechService: RepresentantServTechService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ representantServTech }) => {
      this.updateForm(representantServTech);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));
    });
  }

  updateForm(representantServTech: IRepresentantServTech): void {
    this.editForm.patchValue({
      id: representantServTech.id,
      representant: representantServTech.representant,
      qualite: representantServTech.qualite,
      presence: representantServTech.presence,
      dateConvocation: representantServTech.dateConvocation,
      etape: representantServTech.etape,
      dossierAppelOffreId: representantServTech.dossierAppelOffreId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const representantServTech = this.createFromForm();
    if (representantServTech.id !== undefined) {
      this.subscribeToSaveResponse(this.representantServTechService.update(representantServTech));
    } else {
      this.subscribeToSaveResponse(this.representantServTechService.create(representantServTech));
    }
  }

  private createFromForm(): IRepresentantServTech {
    return {
      ...new RepresentantServTech(),
      id: this.editForm.get(['id'])!.value,
      representant: this.editForm.get(['representant'])!.value,
      qualite: this.editForm.get(['qualite'])!.value,
      presence: this.editForm.get(['presence'])!.value,
      dateConvocation: this.editForm.get(['dateConvocation'])!.value,
      etape: this.editForm.get(['etape'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IRepresentantServTech>>): void {
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
