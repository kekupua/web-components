import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var styles = r`
  :host {
    --header-margin: var(--size-300);

    max-width: var(--content-max-width);
    padding: var(--spacer-800);
  }
  [part='container'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  :host([type='secondary']) [part='container'] {
    background-color: gray;
  }
  :host([alignment='center']) [part='container'] {
    text-align: center;
    justify-content: center;
  }
  :host([alignment='right']) [part='container'] {
    text-align: right;
    justify-content: flex-end;
  }

  [name='header']::slotted([slot='header']:last-of-type) {
    margin-bottom: var(--header-margin);
  }
`;

export default styles;
