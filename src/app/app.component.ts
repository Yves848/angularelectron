import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-electron';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {}
}
