import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import textStyles from '../../styles/text/text.js';
import baseStyles from '../../styles/base.js';
import styles from './SectionStyles.js';

class CustomSection extends n {
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
    return y`
      <section part="container">
        <slot name="header"></slot>
        <slot class="st-text" part="default-content"></slot>
      </section>
    `;
  }
}

customElements.define('st-section', CustomSection);

export default CustomSection;
