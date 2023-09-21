import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}
  constructor(private http: HttpClient) { }
  public postLogin(loginObject?: Login): Observable<Object>{
    console.log("loginService loginObject email: " + loginObject?.email)
    return this.http.post<Login>('http://localhost:8000/customers/login', loginObject);
  }
}
