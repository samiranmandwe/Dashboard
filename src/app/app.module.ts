import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entry-component/home/home.component';
import { HeaderComponent } from './static-component/header/header.component';
import { NvebarComponent } from './static-component/nvebar/nvebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EmiAclculatorComponent } from './entry-component/emi-aclculator/emi-aclculator.component';
import { ProceToApplyComponent } from './entry-component/proce-to-apply/proce-to-apply.component';
import { FaqsComponent } from './entry-component/faqs/faqs.component';
import { AboutUsComponent } from './entry-component/about-us/about-us.component';
import { ContactUsComponent } from './entry-component/contact-us/contact-us.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HomepageComponent } from './entry-component/homepage/homepage.component';
import { LoginUnamePassComponent } from './login-uname-pass/login-uname-pass.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { OperationalexecutiveComponent } from './operationalexecutive/operationalexecutive.component';
import { AccountheadComponent } from './dashboardcomp/accounthead/accounthead.component';
import { CreditmanagerComponent } from './dashboardcomp/creditmanager/creditmanager.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NvebarComponent,
    EmiAclculatorComponent,
    ProceToApplyComponent,
    FaqsComponent,
    AboutUsComponent,
    ContactUsComponent,
    EnquiryComponent,
    HomepageComponent,
    LoginUnamePassComponent,
    AdminPanelComponent,
    OperationalexecutiveComponent,
    AccountheadComponent,
    CreditmanagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
