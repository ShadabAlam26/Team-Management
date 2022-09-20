import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _loginUrl!: 'http://localhost:3000/registerUser';
  constructor(private http: HttpClient) { }

  loginDetails():Observable<any>
  {
    return this.http.get<Observable<any>>(this._loginUrl);
  }
}
