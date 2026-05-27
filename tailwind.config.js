    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
       
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     

        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            'custom-green': '#28A745', 
          },
          fontFamily: {
        vazirfdwoll: ["Vazir-FD-WOL", 'sans-serif'],
        YekanBakhBold:["YekanBakhBold","sans-serif"],
        YekanBakhBold600:["YekanBakhBold600","sans-serif"],
        VazirFDWOL500:['VazirFDWOL500',"sans-serif"],
        VazirmatnExtraBold:["VazirmatnExtraBold","sans-serif"],
        iraniansans:["iraniansans","sans-serif"],
        YekanBakhBold700:["YekanBakhBold700",'sans-serif'],
        VazirFDWOL400:["VazirFDWOL400","sans,serif"],
        },
      },
    },
      plugins: []
    }
