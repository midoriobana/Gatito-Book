import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(
    private tokenService: TokenService
  ) { }
  
  private decodificarJWT(){
    const token =  this.tokenService.retornarToken()
    const usuario = jwtDecode(token) as Usuario
    this.usuarioSubject.next(usuario)
  }

  retornarUsuario(){
    return this.usuarioSubject.asObservable()
  }

  salvarToken(token: string){
    this.tokenService.salvarToken(token)
    this.decodificarJWT()
  }
  
  logout(){
    this.tokenService.excluirToken()
    this.usuarioSubject.next({})
  }

  verificarToken(){
    return this.tokenService.verificarToken()
  }
}
