export const html = /* html */ `
<!DOCTYPE html>
<html lang='es'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Add Info API | Surviblia</title>
    <script
      type='module'
      src='https://cdn.tailwindcss.com'
    >
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
    <script type='module'>
      import DOM from '../../public/js/Dom.js';
      const _ = new DOM();

      const $select = _.$('#options-data');
      const $divForm = _.$('#form-add-data');
      const event = _.aEL(
        $select,
        'click',
        (e) => {
          const defaultValue = e.target.value === 'Select Add Data';
          if (defaultValue) return;

          console.log(e.target.value)

          //const {  } = e.target.value
        }
      );
    </script>
    <style>
      @font-face {
        font-family: 'minecraft';
        font-weight: normal;
        src: url('../fonts/Minecraft-Regular.woff2') format('woff2');
      }
      @font-face {
        font-family: 'minecraftEnch';
        font-weight: normal;
        src: url('../fonts/SgaSmoothRegular.woff2') format('woff2');
      }
      body {
        font-family: 'minecraft', sans-serif;
      }
    </style>
  </head>
  <body class='bg-[#ccc] text-[#222] dark:bg-[#222] dark:text-[#ccc]'>
    <div id='App' class='grid grid-cols-2 place-content-center h-screen w-96 m-auto p-4'>
      <div>
        <label for='options-data' class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Select an option</label>
        <select name='options-data' id='options-data' class='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'>
          <option selected>Select Add Data</option>
          <option value='armors'>Armors</option>
          <option value='tools'>Tools</option>
          <option value='weapons'>Weapons</option>
          <option value='mobs'>Mobs</option>
          <option value='items'>Items</option>
        </select>
      </div>

      <form>
        <div id='form-add-data' class='grid gap-4 text-center place-content-center'>
        </div>
      </form>
    </div>
  </body>
</html>
`;
