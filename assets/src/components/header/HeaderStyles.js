import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var styles = r`
  :host {
    display: inline-grid;
    gap: var(--size-200);
    max-width: 720px;
    text-align: left;
  }
  :host([layout='center']) {
    text-align: center;
  }
`;

export default styles;
