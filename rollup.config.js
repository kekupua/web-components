import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'rollup-plugin-postcss'

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: 'src/components/index.js',
    output: {
      file: 'assets/index.js',
      format: 'es',
    },
    plugins: [
      minifyHTML(),
      resolve(),
      postcss(),
      terser()
    ],
    preserveEntrySignatures: false,
};

export default config;