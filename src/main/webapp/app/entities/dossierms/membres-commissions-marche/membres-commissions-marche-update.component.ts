import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IMembresCommissionsMarche, MembresCommissionsMarche } from 'app/shared/model/dossierms/membres-commissions-marche.model';
import { MembresCommissionsMarcheService } from './membres-commissions-marche.service';
import { AlertError } from 'app/shared/alert/alert-error.model';

@Component({
  selector: 'jhi-membres-commissions-marche-update',
  templateUrl: './membres-commissions-marche-update.component.html',
})
export class MembresCommissionsMarcheUpdateComponent implements OnInit {
  isSaving = false;
  dateArreteDp: any;

  editForm = this.fb.group({
    id: [],
    nom: [],
    prenom: [],
    fonction: [],
    telephone: [],
    email: [],
    gestion: [],
    statut: [],
    typeMembre: [],
    arrete: [],
    fichierArrete: [],
    photo: [],
    photoContentType: [],
    type: [],
    origine: [],
    etapePI: [],
    flagPresident: [],
    actif: [],
    position: [],
    reconduit: [],
    autoriteId: [],
    membre: [],
    dateArrete: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected membresCommissionsMarcheService: MembresCommissionsMarcheService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ membresCommissionsMarche }) => {
      this.updateForm(membresCommissionsMarche);
    });
  }

  updateForm(membresCommissionsMarche: IMembresCommissionsMarche): void {
    this.editForm.patchValue({
      id: membresCommissionsMarche.id,
      nom: membresCommissionsMarche.nom,
      prenom: membresCommissionsMarche.prenom,
      fonction: membresCommissionsMarche.fonction,
      telephone: membresCommissionsMarche.telephone,
      email: membresCommissionsMarche.email,
      gestion: membresCommissionsMarche.gestion,
      statut: membresCommissionsMarche.statut,
      typeMembre: membresCommissionsMarche.typeMembre,
      arrete: membresCommissionsMarche.arrete,
      fichierArrete: membresCommissionsMarche.fichierArrete,
      photo: membresCommissionsMarche.photo,
      photoContentType: membresCommissionsMarche.photoContentType,
      type: membresCommissionsMarche.type,
      origine: membresCommissionsMarche.origine,
      etapePI: membresCommissionsMarche.etapePI,
      flagPresident: membresCommissionsMarche.flagPresident,
      actif: membresCommissionsMarche.actif,
      position: membresCommissionsMarche.position,
      reconduit: membresCommissionsMarche.reconduit,
      autoriteId: membresCommissionsMarche.autoriteId,
      membre: membresCommissionsMarche.membre,
      dateArrete: membresCommissionsMarche.dateArrete,
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType: string, base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  setFileData(event: any, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
      this.eventManager.broadcast(
        new JhiEventWithContent<AlertError>('gatewaysigmapApp.error', { ...err, key: 'error.file.' + err.key })
      );
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (this.elementRef && idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const membresCommissionsMarche = this.createFromForm();
    if (membresCommissionsMarche.id !== undefined) {
      this.subscribeToSaveResponse(this.membresCommissionsMarcheService.update(membresCommissionsMarche));
    } else {
      this.subscribeToSaveResponse(this.membresCommissionsMarcheService.create(membresCommissionsMarche));
    }
  }

  private createFromForm(): IMembresCommissionsMarche {
    return {
      ...new MembresCommissionsMarche(),
      id: this.editForm.get(['id'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      fonction: this.editForm.get(['fonction'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      email: this.editForm.get(['email'])!.value,
      gestion: this.editForm.get(['gestion'])!.value,
      statut: this.editForm.get(['statut'])!.value,
      typeMembre: this.editForm.get(['typeMembre'])!.value,
      arrete: this.editForm.get(['arrete'])!.value,
      fichierArrete: this.editForm.get(['fichierArrete'])!.value,
      photoContentType: this.editForm.get(['photoContentType'])!.value,
      photo: this.editForm.get(['photo'])!.value,
      type: this.editForm.get(['type'])!.value,
      origine: this.editForm.get(['origine'])!.value,
      etapePI: this.editForm.get(['etapePI'])!.value,
      flagPresident: this.editForm.get(['flagPresident'])!.value,
      actif: this.editForm.get(['actif'])!.value,
      position: this.editForm.get(['position'])!.value,
      reconduit: this.editForm.get(['reconduit'])!.value,
      autoriteId: this.editForm.get(['autoriteId'])!.value,
      membre: this.editForm.get(['membre'])!.value,
      dateArrete: this.editForm.get(['dateArrete'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMembresCommissionsMarche>>): void {
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
