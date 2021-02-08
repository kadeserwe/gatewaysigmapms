import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IRetraitRegistreDAO, RetraitRegistreDAO } from 'app/shared/model/dossierms/retrait-registre-dao.model';
import { RetraitRegistreDAOService } from './retrait-registre-dao.service';
import { IDossierAppelOffre } from 'app/shared/model/dossierms/dossier-appel-offre.model';
import { DossierAppelOffreService } from 'app/entities/dossierms/dossier-appel-offre/dossier-appel-offre.service';
import { IFournisseur } from 'app/shared/model/dossierms/fournisseur.model';
import { FournisseurService } from 'app/entities/dossierms/fournisseur/fournisseur.service';
import { IPays } from 'app/shared/model/dossierms/pays.model';
import { PaysService } from 'app/entities/dossierms/pays/pays.service';

type SelectableEntity = IDossierAppelOffre | IFournisseur | IPays;

@Component({
  selector: 'jhi-retrait-registre-dao-update',
  templateUrl: './retrait-registre-dao-update.component.html',
})
export class RetraitRegistreDAOUpdateComponent implements OnInit {
  isSaving = false;
  dossierappeloffres: IDossierAppelOffre[] = [];
  fournisseurs: IFournisseur[] = [];
  pays: IPays[] = [];
  dateRetraitDp: any;

  editForm = this.fb.group({
    id: [],
    nomSoumissionnaire: [],
    telephone: [],
    email: [],
    modePaiement: [],
    ninea: [],
    montantVerse: [],
    dateRetrait: [],
    dossierAppelOffreId: [],
    fournisseurId: [],
    paysId: [],
  });

  constructor(
    protected retraitRegistreDAOService: RetraitRegistreDAOService,
    protected dossierAppelOffreService: DossierAppelOffreService,
    protected fournisseurService: FournisseurService,
    protected paysService: PaysService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ retraitRegistreDAO }) => {
      this.updateForm(retraitRegistreDAO);

      this.dossierAppelOffreService
        .query()
        .subscribe((res: HttpResponse<IDossierAppelOffre[]>) => (this.dossierappeloffres = res.body || []));

      this.fournisseurService.query().subscribe((res: HttpResponse<IFournisseur[]>) => (this.fournisseurs = res.body || []));

      this.paysService.query().subscribe((res: HttpResponse<IPays[]>) => (this.pays = res.body || []));
    });
  }

  updateForm(retraitRegistreDAO: IRetraitRegistreDAO): void {
    this.editForm.patchValue({
      id: retraitRegistreDAO.id,
      nomSoumissionnaire: retraitRegistreDAO.nomSoumissionnaire,
      telephone: retraitRegistreDAO.telephone,
      email: retraitRegistreDAO.email,
      modePaiement: retraitRegistreDAO.modePaiement,
      ninea: retraitRegistreDAO.ninea,
      montantVerse: retraitRegistreDAO.montantVerse,
      dateRetrait: retraitRegistreDAO.dateRetrait,
      dossierAppelOffreId: retraitRegistreDAO.dossierAppelOffreId,
      fournisseurId: retraitRegistreDAO.fournisseurId,
      paysId: retraitRegistreDAO.paysId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const retraitRegistreDAO = this.createFromForm();
    if (retraitRegistreDAO.id !== undefined) {
      this.subscribeToSaveResponse(this.retraitRegistreDAOService.update(retraitRegistreDAO));
    } else {
      this.subscribeToSaveResponse(this.retraitRegistreDAOService.create(retraitRegistreDAO));
    }
  }

  private createFromForm(): IRetraitRegistreDAO {
    return {
      ...new RetraitRegistreDAO(),
      id: this.editForm.get(['id'])!.value,
      nomSoumissionnaire: this.editForm.get(['nomSoumissionnaire'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      email: this.editForm.get(['email'])!.value,
      modePaiement: this.editForm.get(['modePaiement'])!.value,
      ninea: this.editForm.get(['ninea'])!.value,
      montantVerse: this.editForm.get(['montantVerse'])!.value,
      dateRetrait: this.editForm.get(['dateRetrait'])!.value,
      dossierAppelOffreId: this.editForm.get(['dossierAppelOffreId'])!.value,
      fournisseurId: this.editForm.get(['fournisseurId'])!.value,
      paysId: this.editForm.get(['paysId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IRetraitRegistreDAO>>): void {
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
