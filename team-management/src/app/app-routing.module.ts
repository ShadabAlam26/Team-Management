import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './add-team/add-team.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
     path:"login",
     component:LoginComponent
  },
  {
     path:"register",
     component:RegisterComponent
  },
  {
     path:"createTeam",
     component:CreateTeamComponent,
     canActivate:[AuthGuard]
  },
  {
      path:"add-team",
      component:AddTeamComponent,
      canActivate:[AuthGuard]
  },
  {
     path:"**",
     component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
