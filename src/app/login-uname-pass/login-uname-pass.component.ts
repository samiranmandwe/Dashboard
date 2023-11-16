import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { Enquiry } from '../pojo/enquiry';

@Component({
  selector: 'app-login-uname-pass',
  templateUrl: './login-uname-pass.component.html',
  styleUrls: ['./login-uname-pass.component.css']
})
export class LoginUnamePassComponent implements OnInit {


  constructor(private fb:FormBuilder, public service:DashboardService,private router:Router){}

  custReg:FormGroup;

  enq:Enquiry[];

  uname:string;
  pass:string;

  ngOnInit(): void {

    this.custReg = this.fb.group(
      {
        uname:[''],
        password:['']
      }
    )

    this.service.getEnquiry().subscribe((data:Enquiry[])=>{
        this.enq=data;
    })
  }

  onLogin()
  {
    // this.enq.forEach((a:Enquiry)=>{
    //   if(
    //   this.custReg.controls['uname'].value==a.uname && this.custReg.controls['password'].value==a.password)
    //   {
    //     console.log(a);
    //     let enqString: string = JSON.stringify(a);
    //     this.router.navigateByUrl('/admin-panel/admin/single/'+enqString);
    //   }
    // })
    if(
        this.custReg.controls['uname'].value=='re' && this.custReg.controls['password'].value=='re'
      )
    {
           this.router.navigateByUrl('/admin-panel');
    }
    if(
      this.custReg.controls['uname'].value=='oe' && this.custReg.controls['password'].value=='oe'
    )
  {
         this.router.navigateByUrl('/operation-executive');
  }
  if(
    this.custReg.controls['uname'].value=='ah' && this.custReg.controls['password'].value=='ah'
  )
{
       this.router.navigateByUrl('/account-head');
}
if(
  this.custReg.controls['uname'].value=='cm' && this.custReg.controls['password'].value=='cm'
)
{
     this.router.navigateByUrl('/credit-manager');
}




    // this.enq.forEach((a:Enquiry)=>{
    //   if(
    //   this.custReg.controls['uname'].value=='oe' && this.custReg.controls['password'].value=='oe')
    //   {
    //     console.log(a);
    //     let enqString: string = JSON.stringify(a);
    //     this.router.navigateByUrl('/admin-panel/admin/oe/'+enqString);
    //   }
    // })


    }

  }







