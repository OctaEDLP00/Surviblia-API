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
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/css"> body { font-family: sans-serif; } </style>
    <title>API | Surviblia</title>
  </head>
  <body class='bg-[#ccc] text-[#222] dark:bg-[#222] dark:text-[#ccc]'>
    <div id='App' class='grid place-content-center container h-auto max-w-[770px] m-auto'>
      <nav class='border-neutral-200 dark:bg-neutral-900'>
        <div class='max-w-screen flex flex-wrap items-center justify-between mx-auto p-4'>
          <ul class='flex justify-around items-center w-full gap-x-4'>
            <li>
              <a
                target='_blank'
                href="https://surviblia.com"
                rel='noopener noreferrer'
              >
                WEB
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href="https://github.com/OctaEDLP00/surviblia-web"
                rel='noopener noreferrer'
              >
                Repository (WEB)
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href="https://github.com/OctaEDLP00/surviblia-api"
                rel='noopener noreferrer'
              >
                Repository (API)
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class='relative oveflow-x-auto'>
        <table class='w-auto h-72 text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs uppercase bg-neutral-50 dark:bg-neutral-700'>
            <tr>
              <th scope='col' class='px-6 py-3'>Type</th>
              <th scope='col' class='px-6 py-3'>Route</th>
              <th scope='col' class='px-6 py-3'>Description</th>
              <th scope='col' class='px-6 py-3'>HTML</th>
              <th scope='col' class='px-6 py-3'>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/</td>
              <td class='px-6 py-3'>
                <p>Pagina principal de la API</p>
              </td>
              <td class='px-6 py-3'>
                <p>Si</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/' class='hover:underline hover:text-blue-500'>HOME</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/font</td>
              <td class='px-6 py-3'>
                <p>Fonts</p>
              </td>
              <td class='px-6 py-3'>
                <p>Si</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/font' class='hover:underline hover:text-blue-500'>FONT</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api</td>
              <td class='px-6 py-3'>
                <p>Obtener la API por completo</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api' class='hover:underline hover:text-blue-500'>API</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/armors</td>
              <td class='px-6 py-3'>
                <p>Obtener las armaduras</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/armors' class='hover:underline hover:text-blue-500'>ARMORS</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/armors/:material</td>
              <td class='px-6 py-3'>
                <p>Obtener las armadura de un material en concreto</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='javascript:void(0)' class='hover:underline hover:text-blue-500'></a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/tools</td>
              <td class='px-6 py-3'>
                <p>Obtener las herramientas</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/tools' class='hover:underline hover:text-blue-500'>TOOLS</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/tools/:tool/:material?</td>
              <td class='px-6 py-3'>
                <p>Obtener la herramienta de un material en concreto</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='javascript:void(0)' class='hover:underline hover:text-blue-500'></a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/weapons</td>
              <td class='px-6 py-3'>
                <p>Obtener las Armas</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/weapons' class='hover:underline hover:text-blue-500'>WEAPONS</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/weapons/:weapon</td>
              <td class='px-6 py-3'>
                <p>Obtener la arma en concreto</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='javascript:void(0)' class='hover:underline hover:text-blue-500'></a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/weapons/:weapon/:material?</td>
              <td class='px-6 py-3'>
                <p>Obtener las armas de un material en concreto</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='javascript:void(0)' class='hover:underline hover:text-blue-500'></a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/items</td>
              <td class='px-6 py-3'>
                <p>Obtener los Items</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/items' class='hover:underline hover:text-blue-500'>ITEMS</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/items/:item</td>
              <td class='px-6 py-3'>
                <p>Obtener el item en especifico</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='javascript:void(0)' class='hover:underline hover:text-blue-500'></a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/items/:item/:material</td>
              <td class='px-6 py-3'>
                <p>Obtener el item en especifico con un material en concreto</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='javascript:void(0)' class='hover:underline hover:text-blue-500'></a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/mobs</td>
              <td class='px-6 py-3'>
                <p>Obtener los Mobs</p>
              </td>
              <td class='px-6 py-3'>
                <p>No</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/mobs' class='hover:underline hover:text-blue-500'>MOBS</a>
              </td>
            </tr>
            <!--
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-green-700 rounded py-2 px-3'>POST</span>
              </th>
              <td class='px-6 py-3'>/api/add</td>
              <td class='px-6 py-3'>
                <p>Agregar/crear Armors, Tools, Mobs, Weapons, Items a la API</p>
              </td>
              <td class='px-6 py-3'>
                <p>Si</p>
              </td>
              <td class='px-6 py-3'>
                <a href="/api/add" class='hover:underline hover:text-blue-500'>Add</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-teal-700 rounded py-2 px-3'>PUT</span>
                <span class='sr-only'>
                  En caso de que el recurso no exista lo crea sino lo actualiza
                </span>
              </th>
              <td class='px-6 py-3'>/api/update</td>
              <td class='px-6 py-3'>
                <p>Actualizar o Crear Armors, Tools, Mobs, Weapons, Items en la API</p>
              </td>
              <td class='px-6 py-3'>
                <p>Si</p>
              </td>
              <td class='px-6 py-3'>
                <a href="/api/update" class='hover:underline hover:text-blue-500'>Update</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-lime-700 rounded py-2 px-3'>PATCH</span>
              </th>
              <td class='px-6 py-3'>/api/update</td>
              <td class='px-6 py-3'>
                <p>Actualizar Armors, Tools, Mobs, Weapons, Items a la API</p>
              </td>
              <td class='px-6 py-3'>
                <p>Si</p>
              </td>
              <td class='px-6 py-3'>
                <a href="/api/update" class='hover:underline hover:text-blue-500'>Update</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-red-700 rounded py-2 px-3'>DELETE</span>
              </th>
              <td class='px-6 py-3'>/api/delete</td>
              <td class='px-6 py-3'>
                <p>Eliminar/Borrar Armors, Tools, Mobs, Weapons, Items a la API</p>
              </td>
              <td class='px-6 py-3'>
                <p>Si</p>
              </td>
              <td class='px-6 py-3'>
                <a href="/api/delete" class='hover:underline hover:text-blue-500'>Delete</a>
              </td>
            </tr>
            -->
          </tbody>
          <tfoot>
            <tr class='font-smibold'>
              <th scope='row' class='px-6 py-3 text-base'>
                <span class='font-bold'>Anotaciones</span>
              </th>
              <td colspan=3>
                - Los paths que sean de esta forma <span class='bg-neutral-500/25 rounded px-1'>:path</span> son segmentos dinamicos de la ruta el cual deben ser ingresados por el usuario para buscar algo en concreto según la url
              </td>
            </tr>
            <tr>
              <th scope='row' class='px-6 py-3 text-base'></th>
              <td colspan=3>
                - aqui va la diferencia entre patch y put
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
      <footer class='border-neutral-200 dark:bg-neutral-900'>
        <div class='max-w-screen flex flex-wrap items-center justify-between mx-auto p-4'>

        </div>
      </footer>
    </div>
  </body>
</html>
`;
