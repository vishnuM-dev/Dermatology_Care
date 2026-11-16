/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        derma: {
          // Kombu Green - Modern Organic Clinical Accent & Selected States
          kombu: '#354024',
          'kombu-dark': '#27301A',
          'kombu-light': '#E9EFE3',
          'kombu-subtle': '#F7F9F5',
          'kombu-border': '#DDE5D6',

          // Six Theme Colors
          purple: '#7F27A8',           // Bat Purple - Primary brand color & headings
          'purple-dark': '#681F89',    // Hover purple
          'purple-deep': '#572070',    // Deep heading / dark purple text
          'purple-light': '#E9EFE3',   // Replaced lavender with subtle kombu light
          'purple-subtle': '#F7F9F5',  // Replaced lavender subtle with neutral kombu subtle

          yellow: '#FFD400',           // Happy Yellow - Primary CTA & highlights
          'yellow-hover': '#E8C100',   // Hover yellow
          'yellow-light': '#FFF9D6',   // Soft yellow background

          blue: '#53B0C9',             // Pond Blue - Secondary accents, icons
          'blue-dark': '#3A97B0',
          'blue-light': '#E0F4F9',
          'blue-subtle': '#F0FAFD',    // Alternate soft blue background

          orange: '#F76400',           // Juice Orange - Highlighted text
          'orange-hover': '#DE5A00',
          'orange-light': '#FEF0E6',

          magenta: '#C1008F',          // Heart Magenta - Decorative accents & eyebrows
          'magenta-hover': '#A6007A',
          'magenta-light': '#FDE6F7',

          pink: '#E885CF',             // Cheek Pink - Soft waves & shapes
          'pink-light': '#FCEBF7',
          'pink-subtle': '#FFF2FB',    // Soft pink background

          // Functional tokens (Neutral & Green-based, zero lavender)
          white: '#FFFFFF',
          soft: '#F7F9F5',             // Clean neutral backdrop replacing lavender
          border: '#DDE5D6',           // Clean subtle border replacing lavender
          text: '#34313D',
          'text-muted': '#625D6B',
          heading: '#354024',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(53, 64, 36, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(53, 64, 36, 0.12)',
        'card': '0 4px 20px rgba(53, 64, 36, 0.06)',
        'glow-kombu': '0 0 30px rgba(53, 64, 36, 0.35)',
        'glow-purple': '0 0 35px rgba(127, 39, 168, 0.35)',
        'glow-yellow': '0 0 25px rgba(255, 212, 0, 0.45)',
        'glow-blue': '0 0 35px rgba(83, 176, 201, 0.35)',
        'glow-magenta': '0 0 30px rgba(193, 0, 143, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
