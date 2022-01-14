const path = require("path");
const isDev = !app.isPackaged;
const { BrowserWindow, app, ipcMain, Notification } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    backgroundColor: "white",
    // fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.maximize();
  win.show();
  win.loadFile("index.html");
}

if (isDev) {
  try {
    require("electron-reloader")(module);
  } catch {}
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});

// Stop error
app.allowRendererProcessReuse = true;
