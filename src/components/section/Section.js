import { LitElement, html } from 'lit';
import baseStyles from '../../styles/base';
import textStyles from '../../styles/text/text';
import styles from './SectionStyles';

export default class CustomSection extends LitElement {
  static get properties() {
    return {
      alignment: { type: String },
      heading: { type: String },
      subheading: { type: String },
      description: { type: String },
    };
  }
  static get styles() {
    return [baseStyles, textStyles, styles];
  }

  render() {
    return html`
      <section part="container">
        <slot name="header"></slot>
        <slot class="st-text" part="default-content"></slot>
      </section>
    `;
  }
}

customElements.define('st-section', CustomSection);
