import { css } from 'lit';

export default css`
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
