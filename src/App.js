import React from "react";

export default function App() {
  return (
    <>
      <h1>I am App !!!</h1>

      <button
        onClick={() => {
          // ipcRenderer.send("save_note", "dfassdf");
          // console.log("dsd");
          // electron.notificationApi.sendNotification("my cus noti");
          electron.notesApi.saveNote("My custom message!");
          // electron.notificationApi.sendNotification("My custom message!");
        }}>
        Notify
      </button>
    </>
  );
}
