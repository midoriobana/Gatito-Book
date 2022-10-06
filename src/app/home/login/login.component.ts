import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = ''
  senha: string = ''

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['/gatitos'])
    }), (err: any): void => {
      alert('Usuario ou senha inválida')
      console.log(err)
    }
  }
}
