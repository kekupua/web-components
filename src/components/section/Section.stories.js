import { html } from 'lit-element';
import './Section';

export default {
  title: 'Components/Section',
};

export const Overview = () => html`
  <s-section>
    <h1>Some Heading</h1>
  </s-section>

  <s-section heading="Section 1" type="secondary" alignment="left">
    <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
  </s-section>
  <s-section heading="Section 2" alignment="right">
    <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
  </s-section>
  <s-section heading="Section 3" type="secondary"  alignment="left">
    <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
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