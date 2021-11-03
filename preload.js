const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('mailContext', {
  mailTo: () => ipcRenderer.invoke('mailContext:mailTo'),
  mailFrom: () => ipcRenderer.invoke('mailContext:mailFrom'),
  send: () => ipcRenderer.invoke('mailContext:send')
})

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }

    const info = document.getElementById('mailFrom')
    console.log("Catching input..." + info)
})