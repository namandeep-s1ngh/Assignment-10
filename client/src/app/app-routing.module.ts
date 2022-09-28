import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'
//Routes array contains all the possible routes in our application and this array contains objects
const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'addEmployee', component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//array used so that whenever a new component created just have to add in the array and automatic change in the declarations
//array of app.module.ts
export const routingComponents = [EmployeeListComponent, CreateEmployeeComponent]
