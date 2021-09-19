import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import { ifDefined as l } from '../../../node_modules/lit/node_modules/lit-html/directives/if-defined.js';

class CustomSection extends n {
  static get properties() {
    return {
      alignment: { type: String },
      heading: { type: String },
      subheading: { type: String },
      description: { type: String },
    };
  }
  static get styles() {
    return r`
      :host {
        display: block;
      }
      #container {
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        text-align: left;
      }
      #content {
        width: 100%;
        max-width: var(--content-max-width);
        padding: var(--spacer-800);
      }
      :host([type='secondary']) #container {
        background-color: gray;
      }
      :host([alignment='center']) #container {
        text-align: center;
        justify-content: center;
      }
      :host([alignment='right']) #container {
        text-align: right;
        justify-content: flex-end;
      }
    `;
  }

  render() {
    return y`
      <section id="container" part="container">
        <div id="content" part="content">
          <slot name="header">
            <st-header
              part="header"
              heading="${l(this.heading)}"
              subheading="${l(this.subheading)}"
              description=${l(this.description)}
              exportparts="heading subheading description"
            ></st-header>
          </slot>
          <slot part="default-content"></slot>
        </div>
      </section>
    `;
  }
}

customElements.define('st-section', CustomSection);

export default CustomSection;
