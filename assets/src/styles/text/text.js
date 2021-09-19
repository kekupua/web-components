import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var textStyles = r`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: rgb(0, 154, 228);
  }
  [class|='st-text'] {
    font-family: var(--font-family-default), sans-serif;
    font-size: var(--font-size-var, --font-size-100);
  }
  [class|='st-text'].accent {
    font-family: var(--font-family-accent), sans-serif;
    font-size: var(--font-size-var, --font-size-500);
  }
  .st-text-100 {
    --font-size-var: var(--font-size-100);
  }
  .st-text-200 {
    --font-size-var: var(--font-size-200);
  }
  .st-text-300 {
    --font-size-var: var(--font-size-300);
  }
  .st-text-400 {
    --font-size-var: var(--font-size-400);
  }
  .st-text-500 {
    --font-size-var: var(--font-size-500);
  }
  .st-text-600 {
    --font-size-var: var(--font-size-600);
  }
`;

export default textStyles;