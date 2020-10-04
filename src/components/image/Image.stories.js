import { html } from 'lit-element';
import './Image';

export default {
  title: 'Components/Image',
};

export const Overview = () => html`
    <s-image src="https://via.placeholder.com/200"></s-image>

    <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>

    <s-image src="https://via.placeholder.com/200" clip="diamond"></s-image>

    <s-image src="https://via.placeholder.com/200" clip="triangle"></s-image>
`