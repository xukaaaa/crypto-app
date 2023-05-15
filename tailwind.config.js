/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         backgroundColor: {
            primary: '#161234',
            hoverPrimary: '#7c7c7c30',
            buttonPrimary: '#6638E5',
            footer: '#1E1B3E',
            popover: '#1E1B3E',
         },
         textColor: {
            primary: 'white',
            hoverPrimary: '#6638E5',
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
            popover: 'rgba(99, 99, 99, 0.35) 0px 5px 15px',
         },
         fontFamily: {},
         width: {
            pc: '1440px',
         },
      },
   },
   plugins: [],
}
