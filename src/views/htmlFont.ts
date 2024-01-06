export const html = /* html */`
<!DOCTYPE html>
<html lang='es'>
  <head>
    <meta charset=UTF-8>
    <meta name=viewport content='width=device-width, initial-scale=1.0'>
    <meta name=description content='' />
    <meta name=keywords content='' />
    <meta name=languge content=ES />
    <meta name=robots content='index, follow' />
    <meta name=author content='MrOctaMC, octavio.pincha@gmail.com' />
    <meta name=url content='https://surviblia.com' />
    <link rel='shortcut icon' href='/favicon.svg' type='image/xml+svg' />
    <style type="text/css">
      @font-face {
        font-family: 'minecraft';
        src: url('assets/fonts/MinecraftRegular.woff2') format('woff2'),
        url('assets/fonts/MinecraftRegular.ttf') format('truetype'),
        url('assets/fonts/MinecraftRegular.otf') format('opentype');
      }
      @font-face {
        font-family: 'minecraftEnch';
        font-weight: normal;
        src: url('assets/fonts/SgaSmoothRegular.woff2') format('woff2');
      }
      body { font-family: sans-serif; }
      /*
      .font-minecraft { font-family: 'minecraft' }
      .font-minecraftEnch { font-family: 'minecraftEnch' }
      */
    </style>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css' rel=stylesheet></link>
    <script src='https://cdn.tailwindcss.com'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js'>
      import { Tooltip } from 'flowbite'
      import { $query, $id } from '/assets/js/document.mjs'
      const target1 = $id('#tooltip-hover1')
      const target2 = $id('#tooltip-hover2')
      const trigger = $query('.fatherTooltip')

      /**
       * @param {'top'|'left'|'right'|'bottom'} placement
       * @param {'hover'|'click'|'none'} TriggerType
       * @param {Function} onHide
       * @param {Function} onShow
       * @param {Function} onToggle
       */
      const options = {
        placement: 'top',
        triggerType: 'hover',
        onHide: () => console.log('Hide'),
        onShow: () => console.log('Show'),
        onToggle: () => console.log('Toggled')
      }

      const instanceOptions = {
        id: 'tooltip-hover1',
        override: true
      }
      const instanceOptions2 = {
        id: 'tooltip-hover2',
        override: true
      }

      /**
       * @param {HTMLElement} target
       * @param {HTMLElement} trigger
       * @param {Object} options
       * @param {Object} instanceOptions
       * $targetEl: required
       * $triggerEl: required
       * options: optional
       */
      const tooltip = new Tooltip(target1, trigger, options, instanceOptions)
      const tooltip2 = new Tooltip(target2, trigger, options, instanceOptions2)
    </script>
    <script defer type=module>
      import { $queryAll, $id } from '/assets/js/document.mjs'
      const $linksDownload = $queryAll('a')
      $linksDownload.forEach($link => {
        $link.className = 'relative bg-neutral-600 border-2 border-neutral-700 p-2 rounded-lg hover:shadow-sm hover:shadow-neutral-500 hover:bg-neutral-600/30 hover:border-neutral-700/40 text-[#353535] dark:text-[#ccc]/70'
        $link.role = 'button'
        $link.type = 'button'
        $link.id = 'fatherTooltip'
      })

      tailwind.config = {
        content: [
          './*.js'
        ],
        theme: {
          extend: {
            fontFamily: {
              minecraft: ['minecraft', 'sans-serif'],
              minecraftEnch: ['minecraftEnch', 'sans-serif']
            }
          }
        }
      }
    </script>
    <title>API | Surviblia</title>
  </head>
  <body class='bg-[#353535] text-[#222] dark:bg-[#222] dark:text-[#ccc]'>
    <div id='App' class='grid place-content-center h-screen w-full'>
      <main>
        <ul class='flex items-center justify-center gap-6 text-center'>
          <li>
            <a
              href="/assets/fonts/MinecraftRegular.woff2"
              download
              data-tooltip-target=tooltip-hover1
            >
              Download MinecraftRegular
              <div id='tooltip-hover1' role='tooltip' class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium font-minecraft text-white bg-gray-900 rounded-lg shadow-sm opcaity-0 tooltip dark:bg-gray-700'>
                MinecraftRegular
                <div class='tooltip-arrow' data-popper-arrow></div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/assets/fonts/SgaSmoothRegular.woff2"
              download
              data-tooltip-target=tooltip-hover2
            >
              Download SgaSmoothRegular font
              <div id='tooltip-hover2' role='tooltip' class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium font-minecraftEnch text-white bg-gray-900 rounded-lg shadow-sm opcaity-0 tooltip dark:bg-gray-700'>
                SgaSmoothRegular
                <div class='tooltip-arrow' data-popper-arrow></div>
              </div>
            </a>
          </li>
        </ul>
      </main>
    </div>
  </body>
</html>
`
