import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  preserveModules: true,
  input: 'src/components/index.js',
  output: {
    dir: 'assets',
    format: 'es',
  },
  plugins: [json(), resolve(), postcss()],
};

export default config;
