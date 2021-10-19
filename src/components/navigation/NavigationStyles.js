import { css } from 'lit';
export default css`
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
    padding: var(--size-200) var(--size-300);
    color: black;
  }
  ::slotted(*:hover) {
    color: var(--color-gray-200);
  }
`;
