import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var styles = r`
  :host {
    width: 100%;
    display: inline-block;
    margin-bottom: var(--size-200);
  }
  #content {
    display: flex;
    flex-direction: column;
  }
  #subheading::part(container) {
    font-weight: normal;
  }
  :host([alignment='center']) #content {
    text-align: center;
  }
`;

export default styles;
