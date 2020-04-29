import { Injectable } from '@angular/core';
import { Questao } from './questao.model';
import { HttpClient } from "@angular/common/http";
import { Candidato } from './candidato.model';

@Injectable({
  providedIn: 'root'
})
export class QuestaoDetailService {

formData : Questao;
listQuestao : Questao[];
questaoApi : Questao;
candidatoSeed : number = Math.floor((Math.random() * 100) + 1);

readonly urlApiBase = "http://localhost:52903/api";

  constructor(private http : HttpClient) { }

  putQuestao(formData : Questao){
    this.candidatoSeed = Math.floor((Math.random() * this.questaoApi.Candidatos.length) + 1);
    return this.http.put(this.urlApiBase + "/Questao/" + formData.IdQuestao, formData);
    window.location.reload();    
  }

  getQuestao(id : number){
    return this.http.get(this.urlApiBase + "/Questao/" + id)
                      .subscribe((data : Questao) => this.questaoApi = {
                        IdQuestao : data['IdQuestao'],
                        DescricaoQuestao : data['DescricaoQuestao'],                
                        IdTipoQuestao : data['IdTipoQuestao'],                        
                        TipoQuestao : data['TipoQuestao'],                                             
                        Candidatos : data['Candidatos'] as Candidato[]                       
                      });                      
  }

}
