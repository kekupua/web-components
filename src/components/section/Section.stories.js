import { html } from 'lit-html';
import './Section';

export default {
  title: 'Components/Section',
};

export const Overview = () => html`
  <st-section>
    <h1>Some Heading</h1>
  </st-section>

  <st-section heading="Section 1" type="secondary" alignment="left">
    <st-image src="https://via.placeholder.com/200" clip="circle"></st-image>
  </st-section>
  <st-section heading="Section 2" alignment="right">
    <st-image src="https://via.placeholder.com/200" clip="circle"></st-image>
  </st-section>
  <st-section heading="Section 3" type="secondary" alignment="left">
    <st-image src="https://via.placeholder.com/200" clip="circle"></st-image>
  </st-section>
`;
export const Left = () => html`
  <st-section alignment="left">
    <h1>Some Heading</h1>
  </st-section>
`;
export const Right = () => html`
  <st-section alignment="right">
    <h1>Some Heading</h1>
  </st-section>
`;
