import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import textStyles from '../../styles/text/text.js';
import baseStyles from '../../styles/base.js';
import styles from './HeaderStyles.js';

class Header extends n {
  constructor() {
    super();
    this.layout = 'left';
  }

  static get properties() {
    return {
      layout: { type: String }, // Left, Center
    };
  }

  static get styles() {
    return [baseStyles, textStyles, styles];
  }

  render() {
    return y`
      <slot class="st-text-accent st-text-200" name="subheading"></slot>
      <slot class="st-text-accent" name="heading"></slot>
      <slot class="st-text" name="description"></slot>
    `;
  }
}

customElements.define('st-header', Header);

export default Header;
