// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{tsx,css}' ,"./src/**/*.{js,ts,jsx,tsx,mdx,css}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "#1C3586",
//         secondary: "#667085",
//         accent: "#475467",
//         black:"#000000",
//         lightBlack: "#101828"
//       },
//       fontFamily: { 
//         inter: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: []
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/**/*.{tsx,css}'],
  // content: [
  //   "./src/**/*.{tsx,js,css}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  content: [
    "./src/**/*.{css}",  
    "./src/**/*.{tsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1C3586",
        secondary: "#667085",
        accent: "#475467",                                                                                  
        black:"#000000",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        lightBlack: "#101828"
      },
      fontFamily: { 
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: []
};