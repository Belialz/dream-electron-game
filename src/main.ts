import path from "node:path";
import { BrowserWindow, app } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  win.loadFile("dist/index.html");

  win.webContents.openDevTools();
};
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.once("window-all-closed", () => app.quit());
