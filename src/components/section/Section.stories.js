import { html } from 'lit-element';
import './Section';

export default {
  title: 'Components/Section',
};

export const Overview = () => html`
  <s-section>
    <h1>Some Heading</h1>
  </s-section>
`
export const Left = () => html`
  <s-section alignment="left">
    <h1>Some Heading</h1>
  </s-section>
`
export const Right = () => html`
  <s-section alignment="right">
    <h1>Some Heading</h1>
  </s-section>
`