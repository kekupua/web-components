import { css } from 'lit';

export default css`
  :host {
    display: inline-grid;
    gap: var(--size-200);
    max-width: 720px;
    text-align: left;
  }
  :host([layout='center']) {
    text-align: center;
    margin: 0 auto;
  }
`;
