import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


import { LoginComponent } from './views/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from "@angular/forms";
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LoginNewComponent } from './login-new/login-new.component';
import { DemoComponent } from './views/demo/demo.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { DesignationComponent } from './views/designation/designation.component';
import { DepartmentComponent } from './views/department/department.component';
import { ShiftComponent } from './views/shift/shift.component';
import { AdddepartmentComponent } from './views/department/adddepartment/adddepartment.component';
import { AddshiftComponent } from './views/shift/addshift/addshift.component';
import { AddemployeeComponent } from './views/employee/addemployee/addemployee.component';
import { AdddesignationComponent } from './views/designation/adddesignation/adddesignation.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    
    LoginComponent,
    
    LoginNewComponent,
    DemoComponent,
    EmployeeComponent,
    DesignationComponent,
    DepartmentComponent,
    ShiftComponent,
    AdddepartmentComponent,
    AddshiftComponent,
    AddemployeeComponent,
    AdddesignationComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
