import { css } from 'lit';
export default css`
  :host {
    display: block;
  }
  #container {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    text-align: left;
  }
  #content {
    width: 100%;
    max-width: var(--content-max-width);
    padding: var(--spacer-800);
  }
  :host([type='secondary']) #container {
    background-color: gray;
  }
  :host([alignment='center']) #container {
    text-align: center;
    justify-content: center;
  }
  :host([alignment='right']) #container {
    text-align: right;
    justify-content: flex-end;
  }
`;
