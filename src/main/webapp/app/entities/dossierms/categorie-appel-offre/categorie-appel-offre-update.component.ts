import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICategorieAppelOffre, CategorieAppelOffre } from 'app/shared/model/dossierms/categorie-appel-offre.model';
import { CategorieAppelOffreService } from './categorie-appel-offre.service';

@Component({
  selector: 'jhi-categorie-appel-offre-update',
  templateUrl: './categorie-appel-offre-update.component.html',
})
export class CategorieAppelOffreUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [],
    niveau: [],
  });

  constructor(
    protected categorieAppelOffreService: CategorieAppelOffreService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categorieAppelOffre }) => {
      this.updateForm(categorieAppelOffre);
    });
  }

  updateForm(categorieAppelOffre: ICategorieAppelOffre): void {
    this.editForm.patchValue({
      id: categorieAppelOffre.id,
      libelle: categorieAppelOffre.libelle,
      niveau: categorieAppelOffre.niveau,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const categorieAppelOffre = this.createFromForm();
    if (categorieAppelOffre.id !== undefined) {
      this.subscribeToSaveResponse(this.categorieAppelOffreService.update(categorieAppelOffre));
    } else {
      this.subscribeToSaveResponse(this.categorieAppelOffreService.create(categorieAppelOffre));
    }
  }

  private createFromForm(): ICategorieAppelOffre {
    return {
      ...new CategorieAppelOffre(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      niveau: this.editForm.get(['niveau'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategorieAppelOffre>>): void {
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
}
