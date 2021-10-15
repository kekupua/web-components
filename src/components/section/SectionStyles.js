import { css } from 'lit';
export default css`
  :host {
    --header-margin: var(--size-300);

    padding: var(--section-padding);
  }
  [part='container'] {
    margin: auto;
    max-width: var(--section-max-width);
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
