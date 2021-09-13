import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export default class Header extends LitElement {
  constructor() {
    super();
    this.hLevel = '1';
  }

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
    return css`
      :host {
        width: 100%;
        display: inline-block;
        margin-bottom: var(--size-200);
      }
      #content {
        display: flex;
        flex-direction: column;
      }
      #subheading::part(container) {
        font-weight: normal;
      }
      :host([alignment='center']) #content {
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <div id="container" part="container">
        <slot name="subheading">
          ${this.subheading
            ? html`
                <st-text
                  id="subheading"
                  exportparts="container: subheading"
                  href=${ifDefined(this.subheadingHref)}
                  type="h${parseInt(this.hLevel) + 1}"
                  >${this.subheading}</st-text
                >
              `
            : null}
        </slot>
        <slot name="heading">
          ${this.heading
            ? html`
                <st-text
                  id="heading"
                  accent
                  exportparts="container: heading"
                  href=${ifDefined(this.headingHref)}
                  type="h${this.hLevel}"
                  >${this.heading}</st-text
                >
              `
            : null}
        </slot>
        <slot name="description">
          ${this.description
            ? html`
                <st-text
                  id="description"
                  exportparts="container : description"
                  type="p"
                  >${this.description}</st-text
                >
              `
            : null}
        </slot>
      </div>
    `;
  }
}

customElements.define('st-header', Header);
