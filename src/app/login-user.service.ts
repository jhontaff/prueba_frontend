import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LoginUserService {

  private baseUrl='http://localhost:9091/user/login';
  constructor(private httpClient:HttpClient) { }

  
  loginUser(user: User):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, user)
  }
}
