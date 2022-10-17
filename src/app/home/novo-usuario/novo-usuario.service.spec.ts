/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NovoUsuarioService } from './novo-usuario.service';

describe('Service: NovoUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoUsuarioService]
    });
  });

  it('should ...', inject([NovoUsuarioService], (service: NovoUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
