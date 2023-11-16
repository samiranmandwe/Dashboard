import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {


  constructor(private fb:FormBuilder, public service:DashboardService){}

  custReg:FormGroup;

  ngOnInit(): void {

    this.custReg = this.fb.group(
      {
        // eid:[0],
        fullname:[''],
        mobileNo:[0],
        emailId:[''],
        pancardNo:[''],
        age:[0],
        address:[''],
        uname:[''],
        password:[''],
        gender:['']
      }
    )
  }

  onSubmit()
  {
      this.service.saveEnquiry(this.custReg.value).subscribe();
      alert(this.custReg)
      // this.custReg.reset();
  }

}
