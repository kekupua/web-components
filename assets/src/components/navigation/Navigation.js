import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import textStyles from '../../styles/text/text.js';
import baseStyles from '../../styles/base.js';
import styles from './NavigationStyles.js';

class Navigation extends n {
  static get properties() {
    return {
      alignment: { type: String },
    };
  }
  static get styles() {
    return [baseStyles, textStyles, styles];
  }
  render() {
    return y`
      <nav part="container">
        <slot class="st-text"></slot>
      </nav>
    `;
  }
}

customElements.define('st-nav', Navigation);

export default Navigation;
