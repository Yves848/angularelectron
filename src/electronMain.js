const setupEvents = require('../installers/setupEvents');
if (setupEvents.handleSquirrelEvent()) {
    return;
}
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../dist/angular-electron/index.html'),
        protocol: 'file',
        slashes: true
    }));
    //`file://${__dirname}/dist/angular-electron/index.html`
    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
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
