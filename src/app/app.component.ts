import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[];

  title = 'angular-electron';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

    this.items = [
      { label: 'Menus', icon: 'pi pi-undo', routerLink: ['/fichier']},
      { label: 'Recherche', icon: 'fa fa-fw fa-book', routerLink: ['/recherche']},
      { label: 'A Propos', icon: 'fa fa-bomb', routerLink: ['/apropos']}
    ];
  }
}
