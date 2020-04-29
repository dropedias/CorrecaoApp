import { Component } from '@angular/core';
import { UsuarioService } from './shared/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CorrecaoApp';

  showMenu : boolean = false;

  constructor(private usuarioService : UsuarioService){}

  ngOnInit() {
    this.usuarioService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );    
  }
}
