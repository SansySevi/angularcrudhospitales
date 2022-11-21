import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';

import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import  { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Error404Component,
    HospitalesComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    routing ,
    HttpClientModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
