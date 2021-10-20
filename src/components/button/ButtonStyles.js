import { css } from 'lit';

export default css`
  :host {
    --icon-gap: var(--size-100);
    --icon-size: var(--size-200);

    display: inline-block;
    user-select: none;
  }
  [part='container'] {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;

    display: inline-grid;
    grid-auto-flow: column;
    gap: var(--icon-gap);
    align-items: center;
    cursor: pointer;
    border-radius: var(--size-050);
    padding: var(--size-200);
    background-color: var(--color-gray-400);
    text-decoration: none;
    box-shadow: var(--color-black-600) 1px 1px 8px;
    color: var(--color-black-800);
  }
  [part='container']:hover {
    color: black;
  }
  :host([type='primary']) [part='container'] {
    background-color: var(--color-theme-5);
    color: var(--color-white-800);
  }
  :host([type='secondary']) [part='container'] {
    background-color: var(--color-theme-3);
    color: var(--color-white-800);
  }
  :host([type]) [part='container']:hover {
    color: white;
  }
  
  [part='icon'] {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;
