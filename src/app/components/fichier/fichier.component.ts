import { Component, OnInit } from '@angular/core';

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.scss'],
})
export class FichierComponent implements OnInit {
  results = [];
  rows = [];
  repertoire = 'c:\\';
  socket = new WebSocket('ws://localhost:1040');

  constructor() {}

  ngOnInit() {
    this.socket.onmessage = async (event: MessageEvent) => {
      //console.log('event.type', event.type);
      //console.log('event.data', event.data);

      try {
        const data = JSON.parse(event.data);
        console.log('event.type', data.type);
        if (data.type === 'dir') {
          const files = data.data;
          console.log('data', data);
          this.results = [];
          this.rows = [];
          await asyncForEach(files, file => {
            // console.log(file);
            this.results.push(file);
          });
        }
        if (data.type === 'select') {
          const rows = data.data;
          console.log('select data');
          this.results = [];
          this.rows = [];
          console.log(Object.keys(rows[0]));
          await asyncForEach(rows, row => {
            this.rows.push(row);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    this.socket.onopen = () => {
      console.log('init');
    };
  }

  listfiles() {
    console.log('send listfiles');
    this.socket.send(JSON.stringify({ type: 'dir', path: this.repertoire }));
  }

  select() {
    this.socket.send(JSON.stringify({ type: 'select' }));
  }
}
