import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
// import copy from 'rollup-plugin-copy';

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: 'src/components/index.js',
    output: {
      dir: 'build-modern/src/components',
      format: 'es',
    },
    plugins: [
        //   copy(copyConfig),
      minifyHTML(),
      resolve(),
    ],
    preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;