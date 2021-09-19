import { css } from 'lit';

export default css`
  :host {
    display: inline-grid;
    gap: var(--size-200);
    max-width: var(--view-sm);
  }
  :host([layout='center']) {
    text-align: center;
  }
`;
