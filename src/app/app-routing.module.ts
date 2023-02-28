import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent},
  { path:'home', component: HomeComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
