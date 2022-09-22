import { TemplateRef, ViewChild } from '@angular/core';
import { Employee } from '../employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { EmployeeserviceService } from '../employeeservice.service';
enum Role { a = 'Analyst', ops = 'Operations Manager', ad = 'Administrator', ta = 'Tech Analyst' }
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [`
    .text-success
    {
      color:green;
    }
    p
    {
      font-size:50px
    }`
  ]
})

export class EmployeeListComponent implements OnInit {
  // @Output() myEvent = new EventEmitter();
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  message: string;
  employee: Employee;
  selemp: Employee;
  employees: Array<Employee>;
  isNewRecord: boolean;
  // statusMessage: string;
  constructor(private empservice: EmployeeserviceService) { }

  ngOnInit() {
    // this.empservice.sendGetRequest().subscribe((data: any[]) => {
    //   console.log(data)
    //   this.employees = data;

    // EmployeeListComponent.maketable(this.employees)
    // })
    this.loadEmployee();
  }
  private loadEmployee() {
    this.empservice.sendGetRequest().subscribe((data: any[]) => {
      console.log(data)
      this.employees = data;
      // this.myEvent.emit(null);
      // EmployeeListComponent.maketable(this.employees)
    })
  }
  addEmp() {
    this.selemp = new Employee(0, '', '', '', '', 0, '', 0, 0, '', '', '', '');
    this.employees.push(this.selemp);
    this.isNewRecord = true;
    //return this.editTemplate;
  }
  editEmployee(emp: Employee) {
    this.selemp = emp;
  }
  cancel() {
    this.selemp = null;
    this.loadEmployee();
  }
  loadTemplate(emp: Employee) {
    if (this.selemp && this.selemp.id == emp.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  deleteEmp(emp: Employee) {
    this.empservice.deleteEmployee(emp.id).subscribe((resp: Response) => {
      this.loadEmployee();
    });

  }
  saveEmp() {
    if (this.isNewRecord) {
      //add a new Employee
      this.empservice.addEmployee(this.selemp).subscribe((resp: Response) => {
        console.log(resp.json);
        this.loadEmployee();
      });
      this.isNewRecord = false;
      this.selemp = null;

    } else {
      this.empservice.updateEmployee(this.selemp.id, this.selemp).subscribe((resp: Response) => {
        console.log(resp);
        this.loadEmployee();
      });
      this.selemp = null;
    }
  }
}
