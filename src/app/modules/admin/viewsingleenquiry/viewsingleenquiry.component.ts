import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from 'src/app/pojo/enquiry';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-viewsingleenquiry',
  templateUrl: './viewsingleenquiry.component.html',
  styleUrls: ['./viewsingleenquiry.component.css']
})
export class ViewsingleenquiryComponent implements OnInit {

  constructor(private service:DashboardService,private active:ActivatedRoute){}

uname:string;
pass:string;


e:Enquiry


  enquiryList:Enquiry[];
  ngOnInit(): void {
    // this.service.getSingleEnquiry(this.uname,this.pass).subscribe(
    //   (data:Enquiry[])=>{this.enquiryList=data;}
    // )
    this.getData()

}

getData(){

  this.active.paramMap.subscribe((data:any)=>{

   let enys:any= data.get('enq');

   let en:Enquiry=JSON.parse(enys)

   this.e=en

  })
}

}
