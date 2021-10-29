// main.js

// ����Ӧ���������ںʹ���ԭ����������ڵ�ģ��
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // �������������
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // ���� index.html
  mainWindow.loadFile('index.html')

  // �򿪿�������
  // mainWindow.webContents.openDevTools()
}

// ��γ��򽫻��� Electron ������ʼ��
// �ʹ�����������ڵ�ʱ�����
// ���� API �� ready �¼����������ʹ�á�
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // ͨ���� macOS �ϣ������ dock �е�Ӧ�ó���ͼ��ʱ�����û������
    // �򿪵Ĵ��ڣ���ô��������´���һ�����ڡ�
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// ���� macOS �⣬�����д��ڶ����رյ�ʱ���˳����� ��ˣ�ͨ���Գ����������
// �������ϵ�ͼ����˵��Ӧ�����ֻ�Ծ״̬��ֱ���û�ʹ�� Cmd + Q �˳���
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// ������ļ��У�����԰���Ӧ�ó���ʣ������в��ֵĴ��룬
// Ҳ���Բ�ֳɼ����ļ���Ȼ���� require ���롣