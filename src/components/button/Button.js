import { LitElement, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import textStyles from '../../styles/text/text.js';
import styles from './ButtonStyles.js';

export default class Button extends LitElement {
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
    const icon = html`<ion-icon part='icon' name="${this.icon}"></ion-icon>`
    return html`
      <button part='container' href=${ifDefined(this.href)}>
        ${this.icon && !this.trailingIcon
          ? icon
          : null}
        <slot class="st-text"> ${this.label} </slot>
        ${this.icon && this.trailingIcon
          ? icon
          : null}
      </button>
    `;
  }
}

customElements.define('st-button', Button);
