import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FichierComponent } from './components/fichier/fichier.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { AproposComponent } from './components/apropos/apropos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fichier', component: FichierComponent},
  {path: 'recherche', component: RechercheComponent},
  {path: 'apropos', component: AproposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
