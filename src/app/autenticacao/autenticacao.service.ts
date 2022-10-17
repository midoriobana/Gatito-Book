import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  endpoint = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.http.post(`${this.endpoint}/user/login`, {
      userName: usuario,
      password: senha
    })
  }
}
