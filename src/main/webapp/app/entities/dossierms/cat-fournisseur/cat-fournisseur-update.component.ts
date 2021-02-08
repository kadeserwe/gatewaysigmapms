import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICatFournisseur, CatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';
import { CatFournisseurService } from './cat-fournisseur.service';

@Component({
  selector: 'jhi-cat-fournisseur-update',
  templateUrl: './cat-fournisseur-update.component.html',
})
export class CatFournisseurUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    libelle: [],
    description: [],
  });

  constructor(protected catFournisseurService: CatFournisseurService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ catFournisseur }) => {
      this.updateForm(catFournisseur);
    });
  }

  updateForm(catFournisseur: ICatFournisseur): void {
    this.editForm.patchValue({
      id: catFournisseur.id,
      libelle: catFournisseur.libelle,
      description: catFournisseur.description,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const catFournisseur = this.createFromForm();
    if (catFournisseur.id !== undefined) {
      this.subscribeToSaveResponse(this.catFournisseurService.update(catFournisseur));
    } else {
      this.subscribeToSaveResponse(this.catFournisseurService.create(catFournisseur));
    }
  }

  private createFromForm(): ICatFournisseur {
    return {
      ...new CatFournisseur(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      description: this.editForm.get(['description'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICatFournisseur>>): void {
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
