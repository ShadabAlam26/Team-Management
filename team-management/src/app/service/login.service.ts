import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl =  "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  loginDetails()
  {
    return this.http.get<any>(this._loginUrl + 'registerUser');
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  teamList()
  {
    return this.http.get<any>(this._loginUrl+"Team").pipe(
       map(res => res)
    );
  }

  addTeamDetails(detail:any)
  {
     return this.http.post<any>(this._loginUrl+"Team",detail)
  }

  deleteDetails(id:number)
  {
    return this.http.delete<any>(this._loginUrl+"Team/"+id)
  }
}
