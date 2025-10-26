const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

contextBridge.exposeInMainWorld("main_proccess", {
  close: () => ipcRenderer.invoke("close"),
});

contextBridge.exposeInMainWorld("config", {
  get: () => {
    let configPath = path.join(
      process.resourcesPath,
      "electron",
      "config.json"
    );
    if (process.env.VITE_DEV_SERVER_URL) {
      configPath = path.join(__dirname, "config.json");
    }
    const data = fs.readFileSync(configPath, "utf-8");

    return JSON.parse(data);
  },
});
