import { LitElement, html } from 'lit';
import baseStyles from '../../styles/base';
import textStyles from '../../styles/text/text';
import styles from './NavigationStyles';

export default class Navigation extends LitElement {
  static get properties() {
    return {
      alignment: { type: String },
    };
  }
  static get styles() {
    return [baseStyles, textStyles, styles];
  }
  render() {
    return html`
      <nav part="container">
        <slot class="st-text-accent st-text-100"></slot>
      </nav>
    `;
  }
}

customElements.define('st-nav', Navigation);
