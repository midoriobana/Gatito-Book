import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  endpoint: string = environment.API_URL

constructor(
  private http: HttpClient
) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${this.endpoint}/user/signup`, novoUsuario)
  }

  verificarUsuario(usuario: string){
    return this.http.get(`${this.endpoint}/user/exists/${usuario}`)
  }
}
