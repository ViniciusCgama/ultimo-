import { ComunidadeComponent } from './comunidade/comunidade.component';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';
import { PcadastroComponent } from './paginas/pcadastro/pcadastro.component';
import { PprincipalComponent } from './paginas/pprincipal/pprincipal.component';
import { PloginComponent } from './paginas/plogin/plogin.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'login',
        component: PloginComponent,

    },
    {
        path: 'cadastro',
        component: PcadastroComponent,

    },
    {path: 'home', component: HomeComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'comunidade', component: ComunidadeComponent}
];

