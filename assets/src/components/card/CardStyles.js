import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import '../../../node_modules/lit/node_modules/lit-element/lit-element.js';

var styles = r`
  :host {
    display: inline-block;
    width: 350px;
  }
  #container {
    border: var(--size-050) solid var(--colors-gray-400);
    border-radius: var(--size-200);
    overflow: hidden;
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .link {
    color: black;
  }
  .image::part(container) {
    max-width: 100%;
    max-height: 100%;
  }
  .transparent-label {
    width: 100%;
    box-sizing: border-box;
    padding: var(--size-300);
    background: var(--colors-white-800);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 0.4s;
  }
  st-header {
    gap: var(--size-050);
  }
  #container:hover .transparent-label {
    transform: translateY(0);
  }
  :host([static]) .transparent-label {
    transform: none;
  }
  :host([contain]) #container {
    background-size: contain;
  }
  @media screen and (min-width: 960px) {
    .transparent-label {
      transform: translateY(100%);
    }
  }
`;

export default styles;
