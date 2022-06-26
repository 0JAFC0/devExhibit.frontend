import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { StartedBgComponent } from './components/started-bg/started-bg.component';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HistoricoEducacionalComponent } from './components/historico-educacional/historico-educacional.component';

@NgModule({
  declarations: [
    AppComponent,
    StartedBgComponent,
    HeaderComponent,
    SobreComponent,
    HabilidadesComponent,
    ManutencaoComponent,
    ExperienciaComponent,
    HistoricoEducacionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
