import {html} from 'lit-element';
import './Header';

export default {
  title: 'Components/Header',
};

export const Overview = () => html`
  <st-header
    heading="Life on Venus? Scientists hunt for the truth"
    subheading="Interest in Earth’s hellish neighbour explodes after the detection of phosphine, a potential marker of life."
    description="Interest in Earth’s hellish neighbour explodes after the detection of phosphine, a potential marker of life."
  ></st-header>
`;