import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl =  "http://localhost:3000/registerUser";
  constructor(private http: HttpClient) { }

  loginDetails()
  {
    return this.http.get<any>(this._loginUrl);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  teamList()
  {
    return this.http.get<any>("http://localhost:3000/Team").pipe(
       map(res => res)
    );
  }
}
