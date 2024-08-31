/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/array-type */
export const log = (message?: any, ...optionalParams: any[]): void => globalThis.console.log(message, optionalParams)
export const clear = (): void => globalThis.console.clear()
