const log = (message?: unknown, ...optionalParams: unknown[]): void =>
  globalThis.console.log(message, optionalParams)

const clear = (): void => globalThis.console.clear()

export { clear, log }
export default { log, clear }
