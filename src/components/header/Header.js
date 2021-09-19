import { LitElement, html } from 'lit';
import styles from './HeaderStyles.js';

export default class Header extends LitElement {
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
    return html`
      <div id="container" part="container">
        <slot name="subheading"></slot>
        <slot name="heading"></slot>
        <slot name="description"></slot>
      </div>
    `;
  }
}

customElements.define('st-header', Header);
