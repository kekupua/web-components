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
    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F95%2F68%2F7ovTmR.jpg&f=1&nofb=1"
    href="https://blizzard.com"
  >
    <h4 slot="heading">Blizzard Entertainment</h4>
    <p slot="description">Lorem ipsum dior</p>
  </st-card>
`;
