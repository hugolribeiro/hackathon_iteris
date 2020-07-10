import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';
import { ViewCidadesComponent } from './components/view-cidades/view-cidades.component';
import { PageCidadesComponent } from './components/page-cidades/page-cidades.component';

import { ProfissionaisCardComponent } from './components/profissionais-card/profissionais-card.component';
import { ProfissionaisPageComponent } from './components/profissionais-page/profissionais-page.component';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerPrincipalComponent,
    ProfissionaisCardComponent,
    ProfissionaisPageComponent,
    RodapeComponent,
    ViewCidadesComponent,
    PageCidadesComponent,
    ProfissionaisCardComponent,
    ProfissionaisPageComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
