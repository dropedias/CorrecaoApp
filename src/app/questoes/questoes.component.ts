import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  autenticado : boolean = false;

  constructor(private usuarioService : UsuarioService, private router : Router){}

  ngOnInit() {
    this.usuarioService.showMenuEmitter.subscribe(
      auth => this.autenticado = auth
    );   
    
    // if (!this.autenticado){
    //   this.router.navigate(['/']);
    //   console.log(this.autenticado);
    // }    
  }

}
