// importions
const { app, BrowserWindow } = require('electron')
const path = require('path')


// configs

function hello(data) {
    return new Promise((reject, resolve) => {
        typeof data != undefined ? resolve(data) : reject("nenhuma mensagem digitada")
    })
}

function createWindow() {

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.resolve(__dirname, "./public/views/img/app-icon.ico"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    mainWindow.loadFile(path.resolve(__dirname, './public/views/index.html'))

}

//
app.whenReady().then(() => {

    createWindow()

    // reforça a abertura da janela se a quantidade de janelas for menor que 0
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})

// Events

//fecha todas as janelas
app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit() 
})

