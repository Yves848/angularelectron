import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TabMenuModule} from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { FichierComponent } from './components/fichier/fichier.component';
import { AproposComponent } from './components/apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RechercheComponent,
    FichierComponent,
    AproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
