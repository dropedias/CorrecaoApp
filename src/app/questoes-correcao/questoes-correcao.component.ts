import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { QuestaoService } from 'src/app/shared/questao.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Questao } from '../shared/questao.model';
import { LogService } from '../shared/log.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-questoes-correcao',
  templateUrl: './questoes-correcao.component.html',
  styleUrls: ['./questoes-correcao.component.css']
})
export class QuestoesCorrecaoComponent implements OnInit {

  autenticado : boolean = false;
  questoes : Questao[];
  logEntry : string;

  constructor(
    private usuarioService : UsuarioService, 
    private router : Router, 
    private service  : QuestaoService,
    private serviceLog : LogService
    ){}

  ngOnInit() {
    this.usuarioService.showMenuEmitter.subscribe(
      auth => this.autenticado = auth
    );  

    this.service.getQuestoes();
  } 

  public gotoQuestaoDetail(url, id) { 
    // Salva no log
    var date = new Date();
    this.logEntry = date.toDateString() + " " +  date.toLocaleTimeString() 
    + " - Candidato reservado para correção - Questão: " + id;   
    this.writeLog(this.logEntry);

    //  Redireciona para a página Detail
    this.router.navigate([url, id]).then((e) => {
      if (!e) {
        console.log("Navigation has failed!");
      } 
    });
  }

  writeLog(logEntry : string){
    this.serviceLog.writeLog(logEntry).subscribe(res => {      
    });
  }

}
