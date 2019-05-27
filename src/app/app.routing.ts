import { DemoComponent } from './views/demo/demo.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import {EmployeeComponent} from './views/employee/employee.component';
import {DesignationComponent} from './views/designation/designation.component';
import {DepartmentComponent} from './views/department/department.component';
import {ShiftComponent} from './views/shift/shift.component';
import {AdddepartmentComponent} from './views/department/adddepartment/adddepartment.component'


export const routes: Routes = [
 

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: '', component: LoginNewComponent,
  pathMatch: 'full', },
 
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path: 'designation',
        component: DesignationComponent
      },
      {
        path: 'department',
        component:DepartmentComponent
      },
      {
        path: 'shift',
        component:ShiftComponent
      },
      {
        path: 'department/adddepartment',
        component:AdddepartmentComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
