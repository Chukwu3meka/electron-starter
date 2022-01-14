const { ipcMain, Notification } = require("electron");

// exports.ipcEvents = () => {
ipcMain.on("save", (e, note) => {
  console.log(note, "sdASD");
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notifiation", body: message }).show();
});
// };
