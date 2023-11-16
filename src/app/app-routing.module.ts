import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry-component/home/home.component';
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

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,
    children:[
              {path:'emi',component:EmiAclculatorComponent},
              {path:'apply',component:ProceToApplyComponent},
              {path:'faqs',component:FaqsComponent},
              {path:'about',component:AboutUsComponent},
              {path:'contac',component:ContactUsComponent},
              {path:'login',component:LoginUnamePassComponent},
              {path:'enq',component:EnquiryComponent},
              {path:'homepage',component:HomepageComponent}
            ]
  },

  {
    path:'admin-panel',component:AdminPanelComponent,
    children:[{path:'admin' , loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule)}]
  },
  {
    path: 'operation-executive', component:OperationalexecutiveComponent,
    children:[{path:'oper' , loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule)}]

  },
  {
    path: 'account-head', component:AccountheadComponent,
    children:[{path:'account' , loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule)}]
  },
  {
    path:'credit-manager', component:CreditmanagerComponent,
    children:[{path:'cre' , loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule)}]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
