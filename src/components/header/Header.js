import {LitElement, html, css} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export default class Header extends LitElement {
  constructor() {
    super();
    this.hLevel = "1";
  }
  static get properties() {
    return {
      alignment: { type: String },
      hLevel: {type: Number},
      heading: {type: String},
      headingHref: {type: String},
      subheading: {type: String},
      subheadingHref: {type: String},
      description: {type: String},
    }
  }
  static get styles() {
    return css`
      :host {
        width: 100%;
      }
      #content {
        display: flex;
        flex-direction: column;
      }
      #subheading::part(container) {
        font-weight: normal;
      }
      :host([alignment="center"]) #content {
        text-align: center;
      }
    `;
  }
  render() {
    return html`
      <div id="container" part="container">
        <div id="content" part="content">
          <slot name="subheading">
            ${this.subheading ? html`
              <s-text id="subheading" exportparts="container: subheading" name=${ifDefined(this.subheadingHref)} href=${ifDefined(this.subheadingHref)} type="h${parseInt(this.hLevel) + 1}">${this.subheading}</s-text>
            ` : null }
          </slot>
          <slot name="heading">
            ${this.heading ? html`
              <s-text id="heading" accent exportparts="container: heading" name=${ifDefined(this.headingHref)} href=${ifDefined(this.headingHref)} type="h${this.hLevel}">${this.heading}</s-text>
            ` : null}
          </slot>
          <slot name="description">
            ${this.description ? html`
            <s-text id="description" exportparts="container : description" type="p">${this.description}</s-text>
            ` : null }
          </slot>
        </div>
      </div>
    `;
  }
}

customElements.define('s-header', Header);