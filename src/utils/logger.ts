import { styleText } from 'node:util'

type consoleMethodType =
  | ((prefix?: string, ...args: Array<unknown>) => void)
  | ((...args: Array<unknown>) => void)

class Logger {
  private static instance: Logger | null = null
  private enableLogging = true

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public log(...args: Array<unknown>) {
    Logger.printMessage(
      'log',
      `${styleText('blueBright', '[')}${styleText('blue', 'LOG')}${styleText('blueBright', ']')}`,
      args
    )
  }

  public _log(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'log',
      prefix ??
        `${styleText('blueBright', '[')}${styleText('blue', 'LOG')}${styleText('blueBright', ']')}`,
      args
    )
  }

  public warn(...args: Array<unknown>) {
    Logger.printMessage(
      'warn',
      `${styleText('yellowBright', '[')}${styleText('yellow', 'WARN')}${styleText('yellowBright', ']')}`,
      args
    )
  }

  public _warn(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'warn',
      prefix ??
        `${styleText('yellowBright', '[')}${styleText('yellow', 'WARN')}${styleText('yellowBright', ']')}`,
      args
    )
  }

  public error(...args: Array<unknown>) {
    Logger.printMessage(
      'error',
      `${styleText('redBright', '[')}${styleText('red', 'ERROR')}${styleText('redBright', ']')}`,
      args
    )
  }

  public _error(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'error',
      prefix ??
        `${styleText('redBright', '[')}${styleText('red', 'ERROR')}${styleText('redBright', ']')}`,
      args
    )
  }

  public debug(...args: Array<unknown>) {
    Logger.printMessage(
      'debug',
      `${styleText('cyanBright', '[')}${styleText('cyan', 'DEBUG')}${styleText('cyanBright', ']')}`,
      args
    )
  }

  public _debug(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'debug',
      prefix ??
        `${styleText('cyanBright', '[')}${styleText('cyan', 'DEBUG')}${styleText('cyanBright', ']')}`,
      args
    )
  }

  public info(...args: Array<unknown>) {
    Logger.printMessage(
      'info',
      `${styleText('green', '[')}${styleText('greenBright', 'INFO')}${styleText('green', ']')}`,
      args
    )
  }

  public _info(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'info',
      prefix ??
        `${styleText('green', '[')}${styleText('greenBright', 'INFO')}${styleText('green', ']')}`,
      args
    )
  }

  public trace(...args: Array<unknown>) {
    Logger.printMessage(
      'trace',
      `${styleText('gray', '[')}${styleText('grey', 'TRACE')}${styleText('gray', ']')}`,
      args
    )
  }

  public _trace(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'trace',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'TRACE')}${styleText('gray', ']')}`,
      args
    )
  }

  public clear(...args: Array<unknown>) {
    Logger.printMessage(
      'clear',
      `${styleText('gray', '[')}
    ${styleText('grey', 'CLEAR')}
    ${styleText('gray', ']')}`,
      args
    )
  }

  public _clear(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'clear',
      prefix ??
        `${styleText('gray', '[')}
    ${styleText('grey', 'CLEAR')}
    ${styleText('gray', ']')}`,
      args
    )
  }

  public count(...args: Array<unknown>) {
    Logger.printMessage(
      'count',
      `${styleText('gray', '[')}${styleText('grey', 'COUNT')}${styleText('gray', ']')}`,
      args
    )
  }

  public _count(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'count',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'COUNT')}${styleText('gray', ']')}`,
      args
    )
  }

  public countReset(...args: Array<unknown>) {
    Logger.printMessage(
      'countReset',
      `${styleText('gray', '[')}${styleText('grey', 'COUNT_RESET')}${styleText('gray', ']')}`,
      args
    )
  }

  public _countReset(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'countReset',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'COUNT_RESET')}${styleText('gray', ']')}`,
      args
    )
  }

  public group(...args: Array<unknown>) {
    Logger.printMessage(
      'group',
      `${styleText('gray', '[')}${styleText('grey', 'GROUP')}${styleText('gray', ']')}`,
      args
    )
  }

  public _group(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'group',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'GROUP')}${styleText('gray', ']')}`,
      args
    )
  }

  public groupEnd(...args: Array<unknown>) {
    Logger.printMessage(
      'groupEnd',
      `${styleText('gray', '[')}${styleText('grey', 'GROUP_END')}${styleText('gray', ']')}`,
      args
    )
  }

  public _groupEnd(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'groupEnd',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'GROUP_END')}${styleText('gray', ']')}`,
      args
    )
  }

  public time(...args: Array<unknown>) {
    Logger.printMessage(
      'time',
      `${styleText('gray', '[')}${styleText('grey', 'TIME')}${styleText('gray', ']')}`,
      args
    )
  }

  public _time(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'time',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'TIME')}${styleText('gray', ']')}`,
      args
    )
  }

  public timeEnd(...args: Array<unknown>) {
    Logger.printMessage(
      'timeEnd',
      `${styleText('gray', '[')}${styleText('grey', 'TIME_END')}${styleText('gray', ']')}`,
      args
    )
  }

  public _timeEnd(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'timeEnd',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'TIME_END')}${styleText('gray', ']')}`,
      args
    )
  }

  public timeLog(...args: Array<unknown>) {
    Logger.printMessage(
      'timeLog',
      `${styleText('gray', '[')}${styleText('grey', 'TIME_LOG')}${styleText('gray', ']')}`,
      args
    )
  }

  public _timeLog(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'timeLog',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'TIME_LOG')}${styleText('gray', ']')}`,
      args
    )
  }

  public timeStamp(...args: Array<unknown>) {
    Logger.printMessage(
      'timeStamp',
      `${styleText('gray', '[')}${styleText('grey', 'TIME_STAMP')}${styleText('gray', ']')}`,
      args
    )
  }

  public _timeStamp(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'timeStamp',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'TIME_STAMP')}${styleText('gray', ']')}`,
      args
    )
  }

  public profile(...args: Array<unknown>) {
    Logger.printMessage(
      'profile',
      `${styleText('gray', '[')}${styleText('grey', 'PROFILE')}${styleText('gray', ']')}`,
      args
    )
  }

  public _profile(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'profile',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'PROFILE')}${styleText('gray', ']')}`,
      args
    )
  }

  public profileEnd(...args: Array<unknown>) {
    Logger.printMessage(
      'profileEnd',
      `${styleText('gray', '[')}${styleText('grey', 'PROFILE_END')}${styleText('gray', ']')}`,
      args
    )
  }

  public _profileEnd(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'profileEnd',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'PROFILE_END')}${styleText('gray', ']')}`,
      args
    )
  }

  public dir(...args: Array<unknown>) {
    Logger.printMessage(
      'dir',
      `${styleText('gray', '[')}${styleText('grey', 'DIR')}${styleText('gray', ']')}`,
      args
    )
  }

  public _dir(prefix?: string, ...args: Array<unknown>) {
    Logger.printMessage(
      'dir',
      prefix ??
        `${styleText('gray', '[')}${styleText('grey', 'DIR')}${styleText('gray', ']')}`,
      args
    )
  }

  set toggleLogging(enable: boolean) {
    if (typeof enable !== 'boolean') {
      throw new TypeError('The value is not a boolean type!')
    }
    this.enableLogging = enable
    console.log(`Logging ${this.enableLogging ? 'activate' : 'desactivate'}`)
  }

  private static printMessage(
    method: keyof Console,
    prefix: `[${string}]` | string,
    args: Array<unknown>
  ): void {
    const consoleMethod = console[method] as consoleMethodType
    if (Logger.getInstance().enableLogging) {
      consoleMethod(prefix, ...args)
    }
  }
}

export { Logger }
export default Logger
