import { DemoComponent } from './views/demo/demo.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';


import { LoginComponent } from './views/login/login.component';


export const routes: Routes = [
 
 
  
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  // {
  //   path: 'demo',
  //   component: DemoComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
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
      }
    ]
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
