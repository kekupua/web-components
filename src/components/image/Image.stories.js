import { html } from 'lit-element';
import './Image';

export default {
  title: 'Components/Image',
};

export const Overview = () => html`
  <st-image
    src="https://via.placeholder.com/200"
    caption="This is an image"
    aspect-ratio="16:9"
  ></st-image>
`;
