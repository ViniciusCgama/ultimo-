import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/LoginResponse.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) { }

  cadastro(name:string, email: string, phone: string, password: string, confirmapassword: string) {
    return this.httpClient.post<LoginResponse>("http://localhost:5000/checkuser", { name, email, phone, password, confirmapassword}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)//arrumar
      })
    )
  }


  entrar(name: string, password: string) {
    return this.httpClient.post<LoginResponse>("http://localhost:5000/login", { name, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

}
