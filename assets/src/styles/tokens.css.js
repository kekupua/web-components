import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@200;400;700&display=swap');\n\n/* Breakpoints: 360, 480, 640, 960, 1200, 1400, 1600 */\nhtml {\n  scroll-behavior: smooth;\n\n  /* Views */\n  --view-min: 360px;\n  --view-xs: 480px;\n  --view-sm: 640px;\n  --view-md: 960px;\n  --view-lg: 1200px;\n  --view-xl: 1400px;\n  --view-xxl: 1600px;\n  --view-max: 1920px;\n\n  /* Fonts */\n  --font-family-default: 'Lato';\n  --font-family-accent: 'Montserrat';\n  --font-size-050: 0.563rem;\n  --font-size-075: 0.75rem;\n  --font-size-100: 1rem;\n  --font-size-200: 1.333rem;\n  --font-size-300: 1.777rem;\n  --font-size-400: 2.369rem;\n  --font-size-500: 3.157rem;\n  --font-size-600: 4.209rem;\n\n  /* Sizes */\n  --size-base: 8px;\n  --size-025: calc(var(--size-base) * 0.25);\n  --size-050: calc(var(--size-base) * 0.5);\n  --size-075: calc(var(--size-base) * 0.75);\n  --size-100: var(--size-base);\n  --size-150: calc(var(--size-base) * 1.5);\n  --size-200: calc(var(--size-base) * 2);\n  --size-300: calc(var(--size-base) * 3);\n  --size-400: calc(var(--size-base) * 4);\n  --size-500: calc(var(--size-base) * 5);\n  --size-600: calc(var(--size-base) * 6);\n  --size-700: calc(var(--size-base) * 7);\n  --size-800: calc(var(--size-base) * 8);\n  --size-900: calc(var(--size-base) * 9);\n\n  /* Responsive Spacers */\n  --spacer-025: calc(var(--size-025) / 4);\n  --spacer-050: calc(var(--size-050) / 4);\n  --spacer-075: calc(var(--size-075) / 4);\n  --spacer-100: calc(var(--size-100) / 4);\n  --spacer-150: calc(var(--size-150) / 4);\n  --spacer-200: calc(var(--size-200) / 4);\n  --spacer-300: calc(var(--size-300) / 4);\n  --spacer-400: calc(var(--size-400) / 4);\n  --spacer-500: calc(var(--size-500) / 4);\n  --spacer-600: calc(var(--size-600) / 4);\n  --spacer-700: calc(var(--size-700) / 4);\n  --spacer-800: calc(var(--size-800) / 4);\n  --spacer-900: calc(var(--size-900) / 4);\n\n  /* Colors */\n  --colors-gray-100: rgb(105, 105, 105);\n  --colors-gray-200: rgb(128, 128, 128);\n  --colors-gray-300: rgb(169, 169, 169);\n  --colors-gray-400: rgb(192, 192, 192);\n  --colors-gray-500: rgb(211, 211, 211);\n  --colors-gray-600: rgb(220, 220, 220);\n\n  --colors-white-100: rgba(255, 255, 255, 0.1);\n  --colors-white-200: rgba(255, 255, 255, 0.2);\n  --colors-white-300: rgba(255, 255, 255, 0.3);\n  --colors-white-400: rgba(255, 255, 255, 0.4);\n  --colors-white-500: rgba(255, 255, 255, 0.5);\n  --colors-white-600: rgba(255, 255, 255, 0.6);\n  --colors-white-700: rgba(255, 255, 255, 0.7);\n  --colors-white-800: rgba(255, 255, 255, 0.8);\n  --colors-white-900: rgba(255, 255, 255, 0.9);\n\n  --colors-black-100: rgba(0, 0, 0, 0.1);\n  --colors-black-200: rgba(0, 0, 0, 0.2);\n  --colors-black-300: rgba(0, 0, 0, 0.3);\n  --colors-black-400: rgba(0, 0, 0, 0.4);\n  --colors-black-500: rgba(0, 0, 0, 0.5);\n  --colors-black-600: rgba(0, 0, 0, 0.6);\n  --colors-black-700: rgba(0, 0, 0, 0.7);\n  --colors-black-800: rgba(0, 0, 0, 0.8);\n  --colors-black-900: rgba(0, 0, 0, 0.9);\n\n  --colors-theme-1: #fffeec;\n  --colors-theme-2: #fbf9e1;\n  --colors-theme-3: #37392e;\n  --colors-theme-4: #19647e;\n  --colors-theme-5: #28afb0;\n\n  --section-bg-1: #fbf9e1;\n  --section-bg-2: #fffeec;\n  /* Constants */\n  --z-index-nav: 50;\n}\n@media screen and (min-width: 960px) {\n  html {\n    /* Responsive Spacers */\n    --spacer-025: calc(var(--size-025) / 2);\n    --spacer-050: calc(var(--size-050) / 2);\n    --spacer-075: calc(var(--size-075) / 2);\n    --spacer-100: calc(var(--size-100) / 2);\n    --spacer-150: calc(var(--size-150) / 2);\n    --spacer-200: calc(var(--size-200) / 2);\n    --spacer-300: calc(var(--size-300) / 2);\n    --spacer-400: calc(var(--size-400) / 2);\n    --spacer-500: calc(var(--size-500) / 2);\n    --spacer-600: calc(var(--size-600) / 2);\n    --spacer-700: calc(var(--size-700) / 2);\n    --spacer-800: calc(var(--size-800) / 2);\n    --spacer-900: calc(var(--size-900) / 2);\n  }\n}\n@media screen and (min-width: 1200px) {\n  html {\n    /* Responsive Spacers */\n    --spacer-025: var(--size-025);\n    --spacer-050: var(--size-050);\n    --spacer-075: var(--size-075);\n    --spacer-100: var(--size-100);\n    --spacer-150: var(--size-150);\n    --spacer-200: var(--size-200);\n    --spacer-300: var(--size-300);\n    --spacer-400: var(--size-400);\n    --spacer-500: var(--size-500);\n    --spacer-600: var(--size-600);\n    --spacer-700: var(--size-700);\n    --spacer-800: var(--size-800);\n    --spacer-900: var(--size-900);\n  }\n}\n";
styleInject(css_248z);

export default css_248z;