/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         backgroundColor: {
            primary: '#161234',
            hoverPrimary: '#7c7c7c30',
         },
         textColor: {
            primary: 'white',
         },
         colors: {
            primary: '#8dc647',
         },
         borderColor: {
            primary: '#8dc647',
         },
         boxShadow: {
            headerSearch: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            footer: 'rgba(0, 0, 0, 0.2) 0px -2px 8px 0px',
         },
      },
   },
   plugins: [],
}
