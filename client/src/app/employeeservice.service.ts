import { Injectable } from '@angular/core';
import { Employee } from './employee.model'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private url = 'http://localhost:3000/details';
  constructor(private httpclient: HttpClient) {

  }
  public sendGetRequest() {
    return this.httpclient.get(this.url)
  }
  addEmployee(emp: Employee): Observable<Object> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(emp);
    console.log(body)
    // let options = new RequestOptions({ headers: header });
    return this.httpclient.post(this.url, emp)
  }
  updateEmployee(id: Number, emp: Employee): Observable<Object> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: header });
    return this.httpclient.put(this.url + `/` + id, emp)
  }
  deleteEmployee(id: Number): Observable<Object> {
    return this.httpclient.delete(this.url + `/` + id)
  }
  public getRoles() {
    return this.httpclient.get('http://localhost:3000/role')
  }
  public getCustomers() {
    return this.httpclient.get('http://localhost:3000/customers')
  }
}
