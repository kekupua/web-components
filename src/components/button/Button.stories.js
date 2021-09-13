import { html } from 'lit-element';
import './Button';

export default {
  title: 'Components/Button',
};

export const Default = () => html`
  <st-button label=${'Hello World'}></st-button>
`;
export const Primary = () => html`
  <st-button type="primary" label=${'Hello World'}></st-button>
`;
export const Secondary = () => html`
  <st-button type="secondary" label=${'Hello World'}></st-button>
`;
export const WithIcon = () => html`
  <st-button icon="mail" label=${'Hello World'}></st-button>
`;
export const WithTrailingIcon = () => html`
  <st-button icon="mail" trailing-icon label=${'Hello World'}></st-button>
`;
