import {html} from 'lit-element';
import './Header';

export default {
  title: 'Components/Header',
};

export const Overview = () => html`
  <s-header
    heading="Heading"
    subheading="Sub Heading"
    description="Description"
  ></s-header>
`;