import { Routes, RouterModule } from '@angular/router';
import { QuestoesComponent } from './questoes/questoes.component';
import { QuestoesCorrecaoComponent } from './questoes-correcao/questoes-correcao.component';
import { QuestaoDetailComponent } from './questoes-correcao/questao-detail/questao-detail.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth-guard.service';

const  APP_ROUTES : Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', canActivate: [AuthGuard], component: HomeComponent }, 
    { path: 'questoes', canActivate: [AuthGuard], component: QuestoesComponent },
    { path: 'questoes-correcao', canActivate: [AuthGuard], component: QuestoesCorrecaoComponent },
    { path: 'questao-detail/:id', canActivate: [AuthGuard], component: QuestaoDetailComponent }    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);