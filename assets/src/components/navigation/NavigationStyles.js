import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var styles = r`
  :host {
    background: var(--section-bg-1);
    position: sticky;
    top: 0;
    z-index: var(--z-index-nav);
  }
  :host([alignment='center']) {
    text-align: center;
  }
  :host([alignment='right']) {
    text-align: right;
  }
  ::slotted(*) {
    display: inline-block;
    padding: var(--size-300);
    color: var(--color-gray-200);
  }
  ::slotted(*:hover) {
    color: var(--color-gray-400);
  }
`;

export default styles;
