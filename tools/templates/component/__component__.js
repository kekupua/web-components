import { LitElement, html } from 'lit';
import baseStyles from '../../styles/base';
import textStyles from '../../styles/text/text';
import styles from './__component__Styles';

export default class __component__ extends LitElement {
  static get properties() {
    return {
    };
  }
  static get styles() {
    return [baseStyles, textStyles, styles];
  }

  render() {
    return html`
    `;
  }
}

customElements.define('st-__component__(lowerCase)', __component__);
