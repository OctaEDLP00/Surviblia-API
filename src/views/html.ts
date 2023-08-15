export const html = /* html */`
<!DOCTYPE html>
<html lang='es'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>API | Surviblia</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class='bg-[#ccc] text-[#222] dark:bg-[#222] dark:text-[#ccc]'>
    <div id='App' class='grid place-content-center container h-screen w-auto m-auto'>
      <nav class='border-neutral-200 dark:bg-neutral-900'>
        <div class='max-w-screen flex flex-wrap items-center justify-between mx-auto p-4'>

        </div>
      </nav>
      <div class='relative oveflow-x-auto'>
        <table class='w-auto text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs uppercase bg-neutral-50 dark:bg-neutral-700'>
            <tr>
              <th scope='col' class='px-6 py-3'>Type</th>
              <th scope='col' class='px-6 py-3'>Route</th>
              <th scope='col' class='px-6 py-3'>Description</th>
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
                <p>Estas aquí</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/' class='hover:underline hover:text-blue-500'>HOME</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api</td>
              <td class='px-6 py-3'>
                <p>Obtener la API</p>
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
                <p>Obtener las Armors</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/armors' class='hover:underline hover:text-blue-500'>ARMORS</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-emerald-700 rounded py-2 px-3'>GET</span>
              </th>
              <td class='px-6 py-3'>/api/tools</td>
              <td class='px-6 py-3'>
                <p>Obtener las Herramientas</p>
              </td>
              <td class='px-6 py-3'>
                <a href='/api/tools' class='hover:underline hover:text-blue-500'>TOOLS</a>
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
                <a href='/api/weapons' class='hover:underline hover:text-blue-500'>WEAPONS</a>
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
                <a href='/api/items' class='hover:underline hover:text-blue-500'>ITEMS</a>
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
                <a href='/api/mobs' class='hover:underline hover:text-blue-500'>MOBS</a>
              </td>
            </tr>
            <tr class='border-b dark:bg-neutral-800 dark:border-neutral-700'>
              <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <span class='bg-green-700 rounded py-2 px-3'>POST</span>
              </th>
              <td class='px-6 py-3'>/api/add</td>
              <td class='px-6 py-3'>
                <p>Agregar Items</p>
              </td>
              <td class='px-6 py-3'>
                <a href="/api/add" class='hover:underline hover:text-blue-500'>Add</a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class='font-smibold'>
              <th scope='row' class='px-6 py-3 text-base'></th>
              <td class='px-6 py-3'></td>
              <td class='px-6 py-3'></td>
              <td class='px-6 py-3'></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </body>
</html>
`;
