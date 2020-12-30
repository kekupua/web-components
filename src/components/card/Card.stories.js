import { html } from 'lit-element';
import './Card';

export default {
  title: 'Components/Card',
};

export const Default = () => html`
<style>
s-card.icon-image::part(image-tag) {
  width: auto;
  height: auto;
  border-radius: 0;
}
</style>
  <h1>Default</h1>
  <s-card
    heading="Some Heading"
    subheading="Some Subheading"
    description="Lorem ipsum dior"
    image="https://via.placeholder.com/1600x900"
  ></s-card>
`

export const Wide = () => html`
  <h1>Wide</h1>
  <s-card
    heading="Some Heading"
    subheading="Some Subheading"
    description="Lorem ipsum dior"
    image="https://via.placeholder.com/1600x900"
    wide
  ></s-card>
  <h1>Centered Image</h1>
  <s-card
    class="icon-image"
    heading="Some Heading"
    subheading="Some Subheading"
    description="Lorem ipsum dior"
    image="https://via.placeholder.com/40x30"
    wide
  ></s-card>
`;