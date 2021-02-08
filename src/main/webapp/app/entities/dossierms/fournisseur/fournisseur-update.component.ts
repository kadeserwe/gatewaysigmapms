import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IFournisseur, Fournisseur } from 'app/shared/model/dossierms/fournisseur.model';
import { FournisseurService } from './fournisseur.service';
import { ICatFournisseur } from 'app/shared/model/dossierms/cat-fournisseur.model';
import { CatFournisseurService } from 'app/entities/dossierms/cat-fournisseur/cat-fournisseur.service';

@Component({
  selector: 'jhi-fournisseur-update',
  templateUrl: './fournisseur-update.component.html',
})
export class FournisseurUpdateComponent implements OnInit {
  isSaving = false;
  catfournisseurs: ICatFournisseur[] = [];

  editForm = this.fb.group({
    id: [],
    nom: [],
    adresse: [],
    email: [],
    telephone: [],
    numeroRegistreCommerce: [],
    piecejointe: [],
    code: [],
    activite: [],
    adressecomptable: [],
    adressedirigeant: [],
    autredenomination: [],
    autreformejuridique: [],
    bpcomptable: [],
    bpdeux: [],
    bptrois: [],
    bpun: [],
    bpsecondaire: [],
    centreimpot: [],
    comptable: [],
    dirigeant: [],
    enseigne: [],
    etssecondaire: [],
    insae: [],
    formejuridique: [],
    proprietairesiege: [],
    quartier: [],
    numeroenregistrement: [],
    serviceencharge: [],
    siege: [],
    sigle: [],
    telcomptable: [],
    teldeux: [],
    teldirigeant: [],
    telsecondaire: [],
    teltrois: [],
    telun: [],
    ville: [],
    typedge: [],
    type: [],
    utilisateurLogin: [],
    fax: [],
    catFournisseurId: [],
  });

  constructor(
    protected fournisseurService: FournisseurService,
    protected catFournisseurService: CatFournisseurService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fournisseur }) => {
      this.updateForm(fournisseur);

      this.catFournisseurService.query().subscribe((res: HttpResponse<ICatFournisseur[]>) => (this.catfournisseurs = res.body || []));
    });
  }

  updateForm(fournisseur: IFournisseur): void {
    this.editForm.patchValue({
      id: fournisseur.id,
      nom: fournisseur.nom,
      adresse: fournisseur.adresse,
      email: fournisseur.email,
      telephone: fournisseur.telephone,
      numeroRegistreCommerce: fournisseur.numeroRegistreCommerce,
      piecejointe: fournisseur.piecejointe,
      code: fournisseur.code,
      activite: fournisseur.activite,
      adressecomptable: fournisseur.adressecomptable,
      adressedirigeant: fournisseur.adressedirigeant,
      autredenomination: fournisseur.autredenomination,
      autreformejuridique: fournisseur.autreformejuridique,
      bpcomptable: fournisseur.bpcomptable,
      bpdeux: fournisseur.bpdeux,
      bptrois: fournisseur.bptrois,
      bpun: fournisseur.bpun,
      bpsecondaire: fournisseur.bpsecondaire,
      centreimpot: fournisseur.centreimpot,
      comptable: fournisseur.comptable,
      dirigeant: fournisseur.dirigeant,
      enseigne: fournisseur.enseigne,
      etssecondaire: fournisseur.etssecondaire,
      insae: fournisseur.insae,
      formejuridique: fournisseur.formejuridique,
      proprietairesiege: fournisseur.proprietairesiege,
      quartier: fournisseur.quartier,
      numeroenregistrement: fournisseur.numeroenregistrement,
      serviceencharge: fournisseur.serviceencharge,
      siege: fournisseur.siege,
      sigle: fournisseur.sigle,
      telcomptable: fournisseur.telcomptable,
      teldeux: fournisseur.teldeux,
      teldirigeant: fournisseur.teldirigeant,
      telsecondaire: fournisseur.telsecondaire,
      teltrois: fournisseur.teltrois,
      telun: fournisseur.telun,
      ville: fournisseur.ville,
      typedge: fournisseur.typedge,
      type: fournisseur.type,
      utilisateurLogin: fournisseur.utilisateurLogin,
      fax: fournisseur.fax,
      catFournisseurId: fournisseur.catFournisseurId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const fournisseur = this.createFromForm();
    if (fournisseur.id !== undefined) {
      this.subscribeToSaveResponse(this.fournisseurService.update(fournisseur));
    } else {
      this.subscribeToSaveResponse(this.fournisseurService.create(fournisseur));
    }
  }

  private createFromForm(): IFournisseur {
    return {
      ...new Fournisseur(),
      id: this.editForm.get(['id'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      adresse: this.editForm.get(['adresse'])!.value,
      email: this.editForm.get(['email'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      numeroRegistreCommerce: this.editForm.get(['numeroRegistreCommerce'])!.value,
      piecejointe: this.editForm.get(['piecejointe'])!.value,
      code: this.editForm.get(['code'])!.value,
      activite: this.editForm.get(['activite'])!.value,
      adressecomptable: this.editForm.get(['adressecomptable'])!.value,
      adressedirigeant: this.editForm.get(['adressedirigeant'])!.value,
      autredenomination: this.editForm.get(['autredenomination'])!.value,
      autreformejuridique: this.editForm.get(['autreformejuridique'])!.value,
      bpcomptable: this.editForm.get(['bpcomptable'])!.value,
      bpdeux: this.editForm.get(['bpdeux'])!.value,
      bptrois: this.editForm.get(['bptrois'])!.value,
      bpun: this.editForm.get(['bpun'])!.value,
      bpsecondaire: this.editForm.get(['bpsecondaire'])!.value,
      centreimpot: this.editForm.get(['centreimpot'])!.value,
      comptable: this.editForm.get(['comptable'])!.value,
      dirigeant: this.editForm.get(['dirigeant'])!.value,
      enseigne: this.editForm.get(['enseigne'])!.value,
      etssecondaire: this.editForm.get(['etssecondaire'])!.value,
      insae: this.editForm.get(['insae'])!.value,
      formejuridique: this.editForm.get(['formejuridique'])!.value,
      proprietairesiege: this.editForm.get(['proprietairesiege'])!.value,
      quartier: this.editForm.get(['quartier'])!.value,
      numeroenregistrement: this.editForm.get(['numeroenregistrement'])!.value,
      serviceencharge: this.editForm.get(['serviceencharge'])!.value,
      siege: this.editForm.get(['siege'])!.value,
      sigle: this.editForm.get(['sigle'])!.value,
      telcomptable: this.editForm.get(['telcomptable'])!.value,
      teldeux: this.editForm.get(['teldeux'])!.value,
      teldirigeant: this.editForm.get(['teldirigeant'])!.value,
      telsecondaire: this.editForm.get(['telsecondaire'])!.value,
      teltrois: this.editForm.get(['teltrois'])!.value,
      telun: this.editForm.get(['telun'])!.value,
      ville: this.editForm.get(['ville'])!.value,
      typedge: this.editForm.get(['typedge'])!.value,
      type: this.editForm.get(['type'])!.value,
      utilisateurLogin: this.editForm.get(['utilisateurLogin'])!.value,
      fax: this.editForm.get(['fax'])!.value,
      catFournisseurId: this.editForm.get(['catFournisseurId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFournisseur>>): void {
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

  trackById(index: number, item: ICatFournisseur): any {
    return item.id;
  }
}
