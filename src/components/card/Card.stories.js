import { html } from 'lit-html';
import './Card';

export default {
  title: 'Components/Card',
};

export const Default = () => html`
  <style>
    st-card.icon-image::part(image-tag) {
      width: auto;
      height: auto;
      border-radius: 0;
    }
  </style>
  <st-card
    heading="Blizzard Entertainment"
    description="Lorem ipsum dior"
    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F95%2F68%2F7ovTmR.jpg&f=1&nofb=1"
    href="https://blizzard.com"
  ></st-card>
`;
