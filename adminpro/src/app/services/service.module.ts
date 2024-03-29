import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import { 
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  HospitalService,
  MedicoService,
  LoginGuardGuard,
  AdminGuard,
  VerificaTokenGuard,
  SubirArchivoService
 } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    HospitalService,
    MedicoService,
    LoginGuardGuard,
    AdminGuard,
    VerificaTokenGuard,
    SubirArchivoService,
    ModalUploadService
  ]
})
export class ServiceModule { }
