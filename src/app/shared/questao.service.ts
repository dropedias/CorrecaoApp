import { Injectable } from '@angular/core';
import { Questao } from './questao.model';
import { HttpClient } from "@angular/common/http";
import { Candidato } from './candidato.model';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

formData : Questao;
listQuestao : Questao[];
questaoApi : Questao;

readonly urlApiBase = "http://localhost:52903/api";

  constructor(private http : HttpClient) { }

  postQuestao(formData : Questao){
    return this.http.post(this.urlApiBase + "/Questao", formData);
  }

  putQuestao(formData : Questao){
    return this.http.put(this.urlApiBase + "/Questao/" + formData.IdQuestao, formData);
  }

  getQuestao(id : number){
    return this.http.get(this.urlApiBase + "/Questao/" + id)
                      .subscribe((data : Questao) => this.formData = {
                        IdQuestao : data['IdQuestao'],
                        DescricaoQuestao : data['DescricaoQuestao'],                
                        IdTipoQuestao : data['TipoQuestao.IdTipoQuestao'],
                        TipoQuestao : data['TipoQuestao'],                                          
                        Candidatos : data['Candidatos'] as Candidato[]                       
                      });                      
  }

  getQuestoes(){
    this.http.get(this.urlApiBase + "/Questao")
    .toPromise().then(res => this.listQuestao = res as Questao[]);   
  }

  deleteQuestao(idQuestao : number){
    return this.http.delete(this.urlApiBase + "/Questao/" + idQuestao);
  }
}
