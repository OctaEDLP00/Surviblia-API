import { styleText } from 'node:util'

export function formatedStringMsg(PORT: string | number): string {
  const localURL = `http://localhost:${PORT}`
  const networkURL = `http://192.168.0.11:${PORT}`
  const localMsgFormated = `${styleText(['cyan', 'underline'], 'Local:')}`
  const networkMsgFormated = `${styleText(['cyan', 'underline'], 'Network:')}`
  const msg = `${localMsgFormated} ${localURL}\n\n${networkMsgFormated} ${networkURL}`
  return msg
}
