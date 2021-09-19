import { html } from 'lit-html';
import { links } from '../../lib/test';

import './Navigation';

export default {
  title: 'Components/Navigation',
};
const linksMapped = links.map((link) => html`<a href="#${link}">${link}</a>`);
export const Default = () => html` <st-nav> ${linksMapped} </st-nav> `;

export const Center = () => html`
  <st-nav alignment="center"> ${linksMapped} </st-nav>
`;
