import { html } from 'lit-html';
import { title, subtitle, paragraph } from '../../lib/test.js';

export default {
  title: 'Components/Header',
};

const HeaderContent = html`
  <h2 slot="heading">${title}</h2>
  <h3 slot="subheading">${subtitle}</h3>
  <p slot="description">${paragraph}</p>
`;

export const Default = () => html` <st-header> ${HeaderContent} </st-header> `;
export const Center = () => html`
  <st-header layout="center"> ${HeaderContent} </st-header>
`;
