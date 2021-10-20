import { css } from 'lit';
export default css`
  :host {
    --header-margin: var(--size-300);

    padding: var(--section-padding);
  }
  /* Container is used to constrain content on wide screens */
  [part='container'] {
    margin: auto;
    max-width: var(--section-max-width);
    width: 100%;
    text-align: left;
  }
  :host([type='secondary']) [part='container'] {
    background-color: gray;
  }
  :host([alignment='center']) [part='container'],
  :host([alignment='center']) [name='header']::slotted(*) {
    text-align: center;
  }
  :host([alignment='right']) [part='container'],
  :host([alignment='right']) [name='header']::slotted(*) {
    text-align: right;
  }

  [name='header']::slotted([slot='header']:last-of-type) {
    margin-bottom: var(--header-margin);
  }

  :not([name])::slotted(st-section) {
    --section-padding: 0;
  }
  :not([name])::slotted(st-section:not(:last-child)) {
    margin-bottom: var(--section-vertical-padding);
  }
`;
