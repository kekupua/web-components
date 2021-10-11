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
    return html`
      <a id="container" href=${ifDefined(this.href)}>
        ${this.icon && !this.trailingIcon
          ? html`<ion-icon name="${this.icon}"></ion-icon>`
          : null}
        <slot class="st-text"> ${this.label} </slot>
        ${this.icon && this.trailingIcon
          ? html`<ion-icon class="trailing" name="${this.icon}"></ion-icon>`
          : null}
      </a>
    `;
  }
}

customElements.define('st-button', Button);
