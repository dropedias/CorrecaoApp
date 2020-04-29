import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/usuario.service';
import { QuestaoDetailService } from 'src/app/shared/questao-detail.service';
import { LogService } from 'src/app/shared/log.service';
import { Questao } from 'src/app/shared/questao.model';
import { NgForm, MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoQuestao } from 'src/app/shared/tipo-questao.model';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Candidato } from 'src/app/shared/candidato.model';
import { Nota } from 'src/app/shared/nota.model';
import { delay } from 'q';

@Component({
  selector: 'app-questao-detail',
  templateUrl: './questao-detail.component.html',
  styleUrls: ['./questao-detail.component.css']
})
export class QuestaoDetailComponent implements OnInit {

  autenticado : boolean = false;  
  notaSelecionada : number = 0.0;
  logEntry : string;
  
  constructor(
    private usuarioService : UsuarioService, 
    private router : Router, 
    private routerParam : ActivatedRoute, 
    private service  : QuestaoDetailService,
    private serviceLog : LogService
    ){}
 
  ngOnInit() {
    this.usuarioService.showMenuEmitter.subscribe(
      auth => this.autenticado = auth
    );            

    const idQuestao = this.routerParam.snapshot.paramMap.get('id');  
        
    (async () => { 
      // Chama o get antes do sleep
      this.service.getQuestao(parseInt(idQuestao));   
      // chama a função assíncrona de setTimeout
      await delay(1000);  
      // Valida o lock  após o sleep
      this.validaLock();
    })();    
  }

  onSubmit(form : NgForm){  
    this.service.formData = this.service.questaoApi;    
    this.service.formData.IdTipoQuestao = this.service.questaoApi.TipoQuestao.IdTipoQuestao;    
    this.service.formData.Candidatos[this.service.candidatoSeed].ValorNota = this.notaSelecionada;  
    this.service.formData.Candidatos[this.service.candidatoSeed].IsLock = false;

    // Salva no log quando o documento é reservado.
    var date = new Date();
    this.logEntry = date.toDateString() + " " +  date.toLocaleTimeString() 
    + " - Candidato " + this.service.formData.Candidatos[this.service.candidatoSeed].IdCandidato 
    + " - Questão corrigida: " + this.service.formData.IdQuestao;

    this.writeLog(this.logEntry);  

    // Updade ao lançar a Nota do candidato
    this.putQuestao(this.service.formData);

    // (async () => { 
    //   this.writeLog(this.logEntry);  
    //   // chama a função assíncrona de setTimeout
    //   await delay(1000);  
    //   // Updade ao lançar a Nota do candidato
    //   this.putQuestao(this.service.formData);
    // })();        
    alert("Questão corrigida com sucesso!");
  }

  writeLog(logEntry : string){
    this.serviceLog.writeLog(logEntry).subscribe(res => {      
    });
  }

  putQuestao(questao : Questao){      
      this.service.putQuestao(questao).subscribe(res => {         
    });   
  } 
  
  mudarNota(valor : number){    
    this.notaSelecionada = valor;    
  }

  //Função para aguardar o get da Questão
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  validaLock(){
    if(this.service.questaoApi.Candidatos[this.service.candidatoSeed].IsLock)
    {
      this.service.candidatoSeed = Math.floor((Math.random() * this.service.questaoApi.Candidatos.length) + 1);
      alert("O Documento está sendo corrigido por outro Professor!");
      this.router.navigate(['/questao-detail', this.service.questaoApi.IdQuestao]).then((e) => {
        if (!e) {
          console.log("Navigation has failed!");
        } 
      });
    }
    else
    {
      this.service.questaoApi.Candidatos[this.service.candidatoSeed].IsLock = true;
      this.putQuestao(this.service.questaoApi);
    }
  }

}
