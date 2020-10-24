import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { ListProjectComponent } from './dashboard/list-project/list-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {path:'login', component : LoginComponent},
 {path:'dashboard', component : DashboardComponent},
 {path:'resgister', component : ResgisterComponent},
 {path:'projects', component : ListProjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
