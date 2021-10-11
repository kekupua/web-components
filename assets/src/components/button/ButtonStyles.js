import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var styles = r`
  :host {
    display: inline-block;
    --icon-gap: var(--size-100);
  }
  #container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    border-radius: var(--size-050);
    padding: var(--size-200);
    background-color: var(--color-gray-400);
    text-decoration: none;
    box-shadow: var(--color-black-600) 1px 1px 8px;
    color: var(--color-black-800);
  }
  #container:hover {
    color: black;
  }
  ion-icon {
    margin-right: var(--icon-gap);
  }
  :host([trailing-icon]) ion-icon {
    margin-right: 0;
    margin-left: var(--icon-gap);
  }

  :host([type='primary']) #container {
    background-color: var(--color-theme-5);
    color: var(--color-white-800);
  }
  :host([type='secondary']) #container {
    background-color: var(--color-theme-3);
    color: var(--color-white-800);
  }
  :host([type]) #container:hover {
    color: white;
  }
`;

export default styles;
