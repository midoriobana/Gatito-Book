import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from 'src/app/shared/commons/minusculoValidator';
import { senhaIguaisValidator } from 'src/app/shared/commons/senhasIguaisValidator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioService } from './usuarioExistente';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup
  constructor(
    private formGroup: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formGroup.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, minusculoValidator], [this.usuarioService.verificarUsuario()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: [senhaIguaisValidator],
    }
    )
  }

  cadastrarNovoUsuario(){
    if(this.novoUsuarioForm.valid){
      const novoUsuario =  this.novoUsuarioForm.getRawValue() as NovoUsuario
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate([''])
      },
        (error) => {console.log(error)}
      )
    }
  }
}