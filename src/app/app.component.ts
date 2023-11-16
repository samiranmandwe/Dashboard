import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';

  constructor(private fb:FormBuilder, private service:DashboardService){}

  custReg:FormGroup;

  ngOnInit(): void {

    this.custReg = this.fb.group(
      {
        eid:[0],
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
      alert("customer register successful")
      this.custReg.reset();
  }
}

