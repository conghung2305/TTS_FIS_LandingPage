import flowbite from 'flowbite-react/tailwind'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontWeight: {
        "medium": 420
      },
      outline: {
        none: 'none',
      },
      colors: {
        "primary": "#FF9900",
        "secondary": "#000",
        "util": "#fff",
        "hover": "#6F757E",
        'custom-light': '#FCF7EB',
        'custom-gradient': 'linear-gradient(108.29deg, #00579B 0%, #51A0FD 0.01%, #606AEE 96.79%)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(108.29deg, #00579B 0%, #51A0FD 0.01%, #606AEE 96.79%)',
      },
      borderColor: {
        "input": "#e6e6eb"
      },

      borderRadius: {
        "sm": "5px",
        "md": "8px",
        "lg": "10px",
        "xl": "16px"
      },
      backgroundImage: {
        'custom-gradient-hover': 'linear-gradient(180deg, rgba(255, 153, 0, 0.45) 52.76%, #FFF 106.15%)',
      }
    },
  },
  plugins: [flowbite.plugin()],
}