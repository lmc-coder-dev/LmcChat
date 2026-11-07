// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { CreateChatProps } from './types';

contextBridge.exposeInMainWorld('electron', {
  startChat: (data: CreateChatProps) => ipcRenderer.invoke('start-chat', data),
});
