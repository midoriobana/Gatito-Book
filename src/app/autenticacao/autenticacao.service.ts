import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  endpoint = environment.API_URL

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.http.post(`${this.endpoint}/user/login`, {
      userName: usuario,
      password: senha
    },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? ''
        this.usuarioService.salvarToken(authToken)
      })
    )
  }
}
