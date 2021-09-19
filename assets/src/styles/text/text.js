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
  }
  .st-text,
  .st-text::slotted(*) {
    font-family: var(--font-family-default), sans-serif;
    font-size: var(--font-size-var, var(--font-size-100));
    line-height: 1.6;
  }
  .st-text-accent,
  .st-text-accent::slotted(*) {
    font-family: var(--font-family-accent), sans-serif;
    font-size: var(--font-size-var, var(--font-size-500));
    line-height: 1.2;
  }
  .st-text-100,
  .st-text-100::slotted(*) {
    --font-size-var: var(--font-size-100);
  }
  .st-text-200,
  .st-text-200::slotted(*) {
    --font-size-var: var(--font-size-200);
  }
  .st-text-300,
  .st-text-300::slotted(*) {
    --font-size-var: var(--font-size-300);
  }
  .st-text-400,
  .st-text-400::slotted(*) {
    --font-size-var: var(--font-size-400);
  }
  .st-text-500,
  .st-text-500::slotted(*) {
    --font-size-var: var(--font-size-500);
  }
  .st-text-600,
  .st-text-600::slotted(*) {
    --font-size-var: var(--font-size-600);
  }
`;

export default textStyles;
