import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login:LoginService,private route:Router){}

  canActivate():boolean{

    if(this.login.loggedIn())
    {
      return true;
    }
    else{
      this.route.navigate(['/login'])
      return false
    }
  }
  
}
