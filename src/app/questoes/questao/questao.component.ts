import { Component, OnInit } from '@angular/core';
import { QuestaoService } from 'src/app/shared/questao.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  constructor(private service : QuestaoService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if (form != null)
    {
      form.resetForm();
    }    
    this.service.formData = {
      IdQuestao: 0,
      DescricaoQuestao: '',   
      IdTipoQuestao: 0,
      TipoQuestao: null,         
      Candidatos : null      
    }
  }

  onSubmit(form : NgForm){
    if(form.value.IdQuestao === 0)
      this.postQuestao(form);
    else
      this.putQuestao(form);
  }

  postQuestao(form : NgForm){
    this.service.postQuestao(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.getQuestoes();
      //alert("Questão cadastrada com sucesso!");
    });
  }

  putQuestao(form : NgForm){
    this.service.putQuestao(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.getQuestoes();
      alert("Questão atualizada com sucesso!");
    });
  }  
}
