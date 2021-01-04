import { html } from 'lit-element';
import './Image';

export default {
  title: 'Components/Image',
};

export const Overview = () => html`
    <st-image src="https://via.placeholder.com/200"></st-image>

    <st-image src="https://via.placeholder.com/200" clip="circle"></st-image>

    <st-image src="https://via.placeholder.com/200" clip="diamond"></st-image>

    <st-image src="https://via.placeholder.com/200" clip="triangle"></st-image>
`