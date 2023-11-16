import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/pojo/enquiry';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent implements OnInit {

  // constructor(private service:DashboardService){}

  constructor(private fb:FormBuilder, public service:DashboardService,private router:Router){}


  enq:Enquiry[];


  enquiryList:Enquiry[];
  ngOnInit(): void {
    this.service.getEnquiry().subscribe(
      (data:Enquiry[])=>{this.enquiryList=data;}
    )
}

onTransfer()
{
  // alert('transfer successfull')
  // this.enq.forEach((a:Enquiry)=>{
  //     console.log(a);
  //     let enqString: string = JSON.stringify(a);
  //     this.router.navigateByUrl('/admin-panel/admin/oe/'+enqString);
  //   })
}

}
