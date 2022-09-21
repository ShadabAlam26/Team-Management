import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<any>("https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b77");
  }
}
