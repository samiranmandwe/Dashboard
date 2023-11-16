import { Enquiry } from 'src/app/pojo/enquiry';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  saveEnquiry(enq:Enquiry)
  {
    return this.http.post('http://localhost:9090/saveData',enq);
  }


  getEnquiry()
  {
    return this.http.get('http://localhost:9090/getData');
  }


  getSingleEnquiry(uname:string,pass:string)
  {
    return this.http.get(`http://localhost:9090/getSingleData/${uname}/${pass}`);
  }

  postOeData(enq:Enquiry)
  {
    return this.http.post('http://localhost:9090/postoe',enq);
  }


}
