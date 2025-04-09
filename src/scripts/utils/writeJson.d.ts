import type { Abortable } from 'node:events'
import type { Mode, ObjectEncodingOptions, OpenMode } from 'node:fs'

type Opts = ObjectEncodingOptions &
  Abortable & {
    mode?: Mode | undefined
    flag?: OpenMode | undefined
    /**
     * If all data is successfully written to the file, and `flush`
     * is `true`, `filehandle.sync()` is used to flush the data.
     * @default false
     */
    flush?: boolean | undefined
  }

export declare function writeJson(
  path: string,
  data: string,
  options?: Opts | BufferEncoding | null
): Promise<void>
