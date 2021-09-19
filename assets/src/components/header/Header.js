import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import styles from './HeaderStyles.js';

class Header extends n {
  static get properties() {
    return {
      alignment: { type: String },
      hLevel: { type: Number },
      heading: { type: String },
      headingHref: { type: String },
      subheading: { type: String },
      subheadingHref: { type: String },
      description: { type: String },
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    return y`
      <div id="container" part="container">
        <slot name="subheading"></slot>
        <slot name="heading"></slot>
        <slot name="description"></slot>
      </div>
    `;
  }
}

customElements.define('st-header', Header);

export default Header;
