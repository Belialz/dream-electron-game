import { app, BrowserWindow } from 'electron'
import path from 'node:path'

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, '../renderer/main_window/preload.js')
      }
    })
  
    win.loadFile(path.join(__dirname,'../renderer/main_window/index.html'))

    win.webContents.openDevTools();
  }

  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })