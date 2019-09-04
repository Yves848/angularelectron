const setupEvents = require('../installers/setupEvents');
if (setupEvents.handleSquirrelEvent()) {
  return;
}
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const url = require('url');
const ws = require('ws');
const nodeConsole = require('console');
const pg = require('pg');
let connectionString = "pg://postgres:postgres@localhost:5432/alliance";
let client = new pg.Client(connectionString);
client.connect();

const myConsole = new nodeConsole.Console(process.stdout, process.stderr)

const wss = new ws.Server({ port: 1040 });
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
  });
  win.maximize();
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/angular-electron/index.html'),
    protocol: 'file',
    slashes: true
  }));
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })

  wss.on('connection', async (w) => {
    w.on('message', async (data) => {
      jData = JSON.parse(data);
      myConsole.log('test', jData);
      if (jData.type === "dir") {
        myConsole.log('dir');
        let files = fs.readdirSync(jData.path);
        w.send(JSON.stringify({ type: 'dir', data: [...files] }));
      }
      if (jData.type === "select") {
        myConsole.log('select');
        let rows = await selectaf04();
        w.send(JSON.stringify({ type: 'select', data: [...rows] }));
      }

    })
    w.send('hello');
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }

})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})

selectaf04 = () => {
  return new Promise((resolve, reject) => {
    const queryString = "select * from af04";

    try {
      client.query(queryString).then(res => {
        //myConsole.log(res.rows);
        resolve(res.rows);
      }).finally(() => {

      })
    } catch (error) {
      reject(error);
    }

  });
}

