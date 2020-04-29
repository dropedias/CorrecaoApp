import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Usuario } from 'src/app/shared/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario : Usuario = new Usuario();

  validado : boolean = true;
  
  constructor(private service : UsuarioService) { }

  ngOnInit() {
    
  }

  fazerLogin(){    
    if(this.usuario.Cpf === undefined || this.usuario.Senha === undefined)
    {      
      this.validado =  false;
    }

    this.validado = this.service.fazerLogin(this.usuario);
  } 
}
