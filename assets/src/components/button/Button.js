import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import { ifDefined as l } from '../../../node_modules/lit/node_modules/lit-html/directives/if-defined.js';
import textStyles from '../../styles/text/text.js';
import styles from './ButtonStyles.js';

class Button extends n {
  static get properties() {
    return {
      type: { type: String },
      label: { type: String },
      href: { type: String },
      icon: { type: String },
      trailingIcon: { attribute: 'trailing-icon', type: Boolean }, // Should the icon be placed after the text?
    };
  }

  static get styles() {
    return [textStyles, styles];
  }

  render() {
    return y`
      <a id="container" href=${l(this.href)}>
        ${this.icon && !this.trailingIcon
          ? y`<ion-icon name="${this.icon}"></ion-icon>`
          : null}
        <slot class="st-text"> ${this.label} </slot>
        ${this.icon && this.trailingIcon
          ? y`<ion-icon class="trailing" name="${this.icon}"></ion-icon>`
          : null}
      </a>
    `;
  }
}

customElements.define('st-button', Button);

export default Button;
