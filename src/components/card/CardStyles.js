import { css } from 'lit';
export default css`
  :host {
    display: inline-block;
    width: 350px;
  }
  #container {
    border: var(--size-050) solid var(--color-gray-400);
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--size-300);
    background: var(--color-white-800);
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
