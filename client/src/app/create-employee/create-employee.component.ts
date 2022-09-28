import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model'
import { Router } from '@angular/router';
import { Input } from '@angular/core'
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @Input() public child2
  constructor(private empservice: EmployeeserviceService, private router: Router) { }
  roles = []
  customers = []
  newemp = new Employee(0, '', '', '', '', 0, '', 0, 0, '', '', '', '');
  ngOnInit(): void {
    this.empservice.getRoles().subscribe((role: any[]) => {
      console.log(role)
      this.roles = role;
    })
    this.empservice.getCustomers().subscribe((customer: any[]) => {
      console.log(customer)
      this.customers = customer;
    })
  }
  createnew(form1) {
    // this.child2 = !(this.child2)
    console.log(form1.value)
    this.empservice.addEmployee(this.newemp).subscribe((resp: Response) => {
      console.log(resp.json)
      this.router.navigate(['/'])


      // this.employee = resp.json(),
      // this.statusMessage = 'Record Added Successfully.',
      //   this.loadEmployee();
    });
    console.log("here")
    this.router.navigate(['/'])
  }
}

