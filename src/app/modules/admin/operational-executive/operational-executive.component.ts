import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquiry } from 'src/app/pojo/enquiry';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-operational-executive',
  templateUrl: './operational-executive.component.html',
  styleUrls: ['./operational-executive.component.css']
})
export class OperationalExecutiveComponent implements OnInit {

  // e:Enquiry;

  // constructor(private fb:FormBuilder, public service:DashboardService,private router:Router){}
  // enq:Enquiry[];


  // ngOnInit(): void {

  //   this.service.getEnquiry().subscribe((data:Enquiry[])=>{
  //       this.enq=data;
  //   })
  // }


  constructor(private service:DashboardService,private active:ActivatedRoute){}

  e:Enquiry


    enquiryList:Enquiry[];
    ngOnInit(): void {
      // this.service.getSingleEnquiry(this.uname,this.pass).subscribe(
      //   (data:Enquiry[])=>{this.enquiryList=data;}
      // )


      this.service.getEnquiry().subscribe(
        (data:Enquiry[])=>{this.enquiryList=data;}
      )
      // this.getData()

  }

  // getData(){
  //   this.active.paramMap.subscribe((data:any)=>{
  //    let enys:any= data.get('transfer');
  //    let en:Enquiry=JSON.parse(enys)
  //    this.e=en
  //   })
  // }

}
