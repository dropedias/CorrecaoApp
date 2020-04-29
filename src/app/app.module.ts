import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { QuestaoComponent } from './questoes/questao/questao.component';
import { QuestaoListComponent } from './questoes/questao-list/questao-list.component';
import { QuestaoService } from './shared/questao.service';
import { UsuarioService } from './shared/usuario.service';
import { QuestaoDetailService } from './shared/questao-detail.service';
import { LogService } from './shared/log.service';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { QuestoesCorrecaoComponent } from './questoes-correcao/questoes-correcao.component';
import { QuestaoDetailComponent } from './questoes-correcao/questao-detail/questao-detail.component';
import { FormDebugComponent } from './questoes/questao/form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestoesComponent,
    QuestaoComponent,
    QuestaoListComponent,
    LoginComponent,
    HomeComponent,
    QuestoesCorrecaoComponent,
    QuestaoDetailComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    QuestaoService, 
    UsuarioService,
    QuestaoDetailService,
    LogService
  ],             
  bootstrap: [AppComponent]
})
export class AppModule { }
