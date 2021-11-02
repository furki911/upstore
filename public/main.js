const { app, BrowserWindow } = require("electron");

// To Enable IPC - InterProcess Communication
require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  });
}

app.on("ready", createWindow);

// quit when all windows are closed.

app.on("window-all-closed", function () {
  // On Os X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On Os X it is common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
