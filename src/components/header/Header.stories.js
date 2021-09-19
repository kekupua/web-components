import { html } from 'lit-html';
import './Header';

export default {
  title: 'Components/Header',
};

export const Overview = () => html`
  <st-header
    subheading="Interest in Earth’s hellish neighbour explodes after the detection of phosphine, a potential marker of life."
    description="Interest in Earth’s hellish neighbour explodes after the detection of phosphine, a potential marker of life."
  >
    <h2 class="st-text accent" slot="heading">
      Life on Venus? Scientists hunt for the truth
    </h2>
  </st-header>
`;
