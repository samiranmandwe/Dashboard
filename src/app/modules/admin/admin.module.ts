import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { ViewsingleenquiryComponent } from './viewsingleenquiry/viewsingleenquiry.component';
import { OperationalExecutiveComponent } from './operational-executive/operational-executive.component';
import { RegisterenquiryComponent } from './registerenquiry/registerenquiry.component';
import { CibilapprovedComponent } from './cibilapproved/cibilapproved.component';
import { CibilrejectComponent } from './cibilreject/cibilreject.component';
import { ApprovesanctionletterComponent } from './approvesanctionletter/approvesanctionletter.component';
import { CreateledgerComponent } from './createledger/createledger.component';
import { ViewVerifiedComponent } from './view-verified/view-verified.component';





@NgModule({
  declarations: [

    ViewenquiryComponent,
    ViewsingleenquiryComponent,
    OperationalExecutiveComponent,
    RegisterenquiryComponent,
    CibilapprovedComponent,
    CibilrejectComponent,
    ApprovesanctionletterComponent,
    CreateledgerComponent,
    ViewVerifiedComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,

    // BrowserModule,
    // AppRoutingModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // FormsModule
  ],
})
export class AdminModule { }
