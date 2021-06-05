import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksdashboardComponent } from './components/booksdashboard/booksdashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'booksdashboard'
  },
  {
    path: 'booksdashboard',
    component: BooksdashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
