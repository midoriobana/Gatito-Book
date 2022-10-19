import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private novoUsuarioService: NovoUsuarioService
  ) { }

  verificarUsuario() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((usuario) =>
          this.novoUsuarioService.verificarUsuario(usuario)
        ),
        map((usuario) =>
          usuario ? { usuarioExistente: true } : null
        ),
        first()
      )
    }
  }
}
