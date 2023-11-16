import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { ViewsingleenquiryComponent } from './viewsingleenquiry/viewsingleenquiry.component';
import { OperationalExecutiveComponent } from './operational-executive/operational-executive.component';
import { RegisterenquiryComponent } from './registerenquiry/registerenquiry.component';
import { CibilapprovedComponent } from './cibilapproved/cibilapproved.component';
import { CibilrejectComponent } from './cibilreject/cibilreject.component';
import { ApprovesanctionletterComponent } from './approvesanctionletter/approvesanctionletter.component';
import { CreateledgerComponent } from './createledger/createledger.component';
import { ViewVerifiedComponent } from './view-verified/view-verified.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', redirectTo:'re' ,pathMatch:'full'},
  {path:'re' ,component:ViewenquiryComponent},
  {path:'single/:enq',component:ViewsingleenquiryComponent},
  // {path:'oe/:transfer',component:OperationalExecutiveComponent},
  {path:'registerenquiry',component:RegisterenquiryComponent},
  {path:'cibilapprove',component:CibilapprovedComponent},
  {path:'cibilreject',component:CibilrejectComponent},
  {path:'oe',component:OperationalExecutiveComponent},
  {path:'approvesanction',component:ApprovesanctionletterComponent},
  {path:'createledger',component:CreateledgerComponent},
  {path:'viewverifiedapplication',component:ViewVerifiedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
