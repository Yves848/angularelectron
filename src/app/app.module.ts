import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { FichierComponent } from './components/fichier/fichier.component';
import { HomeComponent } from './components/home/home.component';
import { RechercheComponent } from './components/recherche/recherche.component';

//Material Imports
// PrimeNG imports
@NgModule({
  declarations: [AppComponent, HomeComponent, RechercheComponent, FichierComponent, AproposComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
