import {LitElement, html, css} from 'lit-element';

export default class Header extends LitElement {
  static get properties() {
    return {
      heading: {type: String},
      subheading: {type: String},
      description: {type: String},
    }
  }
  static get styles() {
    return css`
      #content {
        display: flex;
        flex-direction: column;
      }
      #subheading::part(container) {
        font-weight: normal;
      }
    `;
  }
  render() {
    return html`
      <div id="container" part="container">
        <div id="content" part="content">
          <slot name="heading">
            ${this.heading ? html`
              <s-text id="heading" exportparts="container: heading" type="h1">${this.heading}</s-text>
            ` : null}
          </slot>
          <slot name="subheading">
            ${this.subheading ? html`
              <s-text id="subheading" exportparts="container: subheading" type="h2">${this.subheading}</s-text>
            ` : null }
          </slot>
          <slot name="description">
            ${this.description ? html`
            <s-text id="description" exportparts="container: description" type="p">${this.description}</s-text>
            ` : null }
          </slot>
        </div>
      </div>
    `;
  }
}

customElements.define('s-header', Header);