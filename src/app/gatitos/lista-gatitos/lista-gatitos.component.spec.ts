import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGatitosComponent } from './lista-gatitos.component';

describe('ListaGatitosComponent', () => {
  let component: ListaGatitosComponent;
  let fixture: ComponentFixture<ListaGatitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGatitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGatitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
