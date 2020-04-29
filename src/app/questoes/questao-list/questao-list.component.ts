import { Component, OnInit } from '@angular/core';
import { QuestaoService } from 'src/app/shared/questao.service';
import { Questao } from 'src/app/shared/questao.model';

@Component({
  selector: 'app-questao-list',
  templateUrl: './questao-list.component.html',
  styleUrls: ['./questao-list.component.css']
})
export class QuestaoListComponent implements OnInit {

  constructor(private service  : QuestaoService) { }

  ngOnInit() {
    this.service.getQuestoes();
  }

  populaForm(questao : Questao){
    this.service.formData = questao;
  }

  deleteQuestao(idQuestao : number){
    if (window.confirm("Deseja Excluir?") === true)
    {
      this.service.deleteQuestao(idQuestao).subscribe(res => {
        this.service.getQuestoes();
      });      
    }
    else{
      return false;
   }    
  }
  
}
