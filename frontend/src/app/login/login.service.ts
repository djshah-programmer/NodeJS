import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginData } from './login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(body: loginData): Observable<loginData>{
    return this.http.post<loginData>('http://localhost:8080/api/login', body)
  }
}
