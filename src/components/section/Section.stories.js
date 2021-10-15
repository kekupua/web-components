import { html } from 'lit-html';
import { title, subtitle, paragraph } from '../../lib/test.js';
import './Section';

export default {
  title: 'Components/Section',
  argTypes: {
    headerVariant: {
      options: ['left', 'center'],
      control: { type: 'select' }
    }
  }
};

export const Overview = (options) => html`
  <st-section>
    <st-header slot="header" layout=${options.headerVariant}>
      <h2 slot="heading">${title}</h2>
      <h3 slot="subheading">${subtitle}</h3>
      <p slot="description">${paragraph}</p>
    </st-header>
  </st-section>
`;
