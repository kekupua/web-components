import { LitElement, html } from 'lit';
import baseStyles from '../../styles/base';
import textStyles from '../../styles/text/text';
import styles from './HeaderStyles';

export default class Header extends LitElement {
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
    return html`
      <slot class="st-text-accent st-text-200" name="subheading"></slot>
      <slot class="st-text-accent" name="heading"></slot>
      <slot class="st-text" name="description"></slot>
    `;
  }
}

customElements.define('st-header', Header);
