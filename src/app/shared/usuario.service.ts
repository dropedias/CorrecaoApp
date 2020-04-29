import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioaApi : Usuario

  usuarioAutenticado : boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  readonly urlApiBase = "http://localhost:52903/api";

  constructor(private http : HttpClient, private router : Router) { }

  fazerLogin(usuario : Usuario){       
    (async () => { 
      this.getUsuario(usuario);         
      // chama a função assíncrona de setTimeout  
      await delay(50);  
      if(usuario.Cpf === this.usuarioaApi.Cpf && usuario.Senha === this.usuarioaApi.Senha){
        this.usuarioAutenticado = true;
        this.showMenuEmitter.emit(true);
        this.router.navigate(['/home']);  
      }
      else{      
        this.usuarioAutenticado = false;
        this.showMenuEmitter.emit(false);
        this.router.navigate(['/']);
      }      
    })();     
    
    return this.usuarioAutenticado;
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getUsuario(usuario : Usuario){
    return this.http.get(this.urlApiBase + "/Usuario/" + usuario.Cpf)
                      .subscribe((data : Usuario) => this.usuarioaApi = {
                        Cpf : data['Cpf'],
                        Senha : data ['Senha'],
                        Perfil : data['Perfil']
                      });
  }  
}
