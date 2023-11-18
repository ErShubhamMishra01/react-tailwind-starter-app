# React commands for install and run

### `npm install`
### `npm start`

# tailwind CSS setup

## installation

 - npm install -D tailwindcss                          //tail wind css
 - npm i @tailwindcss/forms                            // tailwindforms
 - npm install @headlessui/react @heroicons/react      // for
   tailwind(hero) icons

## Use below command to create tailwind.config.js file in root of project and update the same file
 - npx tailwindcss init

**tailwind.config.js**

    /** @type {import('tailwindcss').Config} */
    const defaultTheme = require('tailwindcss/defaultTheme')
    module.exports = {
      content:  ["./src/**/*.{html,js,jsx}"], //for file extentions
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans], //for font family
          },
        },
      },
      plugins: [
        require('@tailwindcss/forms'),  // for forms
      ],
    }


## add below css in root css file (index.css)

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## add class="h-full w-full" attribute in html and body tag in public/index.html
**Example-**

    <html class="h-full w-full">
    <body class="h-full w-full">
    </body>
    </html>


## Usefull links
- https://tailwindcomponents.com/
- https://tailwindcss.com/
- https://tailwindcomponents.com/
