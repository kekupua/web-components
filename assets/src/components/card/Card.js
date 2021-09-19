import { css as r } from '../../../node_modules/@lit/reactive-element/css-tag.js';
import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import { ifDefined as l } from '../../../node_modules/lit/node_modules/lit-html/directives/if-defined.js';
import { classMap as o } from '../../../node_modules/lit/node_modules/lit-html/directives/class-map.js';

class Card extends n {
  static get properties() {
    return {
      image: { type: String }, // URL
      href: { type: String },
      heading: { type: String },
      subheading: { type: String },
      description: { type: String },
      static: { type: Boolean },
      contain: { type: Boolean }, // Changes background size to contain
    };
  }
  static get styles() {
    return r`
      :host {
        display: inline-block;
        width: 350px;
      }
      #container {
        border: var(--size-050) solid var(--colors-gray-400);
        border-radius: var(--size-200);
        overflow: hidden;
        position: relative;
        overflow: hidden;
        padding-bottom: 56.25%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .link {
        color: black;
      }
      .image::part(container) {
        max-width: 100%;
        max-height: 100%;
      }
      .transparent-label {
        width: 100%;
        box-sizing: border-box;
        padding: var(--size-300);
        background: var(--colors-white-800);
        position: absolute;
        bottom: 0;
        left: 0;
        transition: transform 0.4s;
      }
      #container:hover .transparent-label {
        transform: translateY(0);
      }
      .header {
        margin-bottom: 0;
      }
      :host([static]) .transparent-label {
        transform: none;
      }
      :host([contain]) #container {
        background-size: contain;
      }
      @media screen and (min-width: 960px) {
        .transparent-label {
          transform: translateY(100%);
        }
      }
    `;
  }
  render() {
    const containerClasses = {
      wide: this.wide,
    };
    const template = y`
      <a class="link" href=${l(this.href)}>
        <div
          id="container"
          part="container"
          class="${o(containerClasses)}"
          style="background-image: url(${this.image})"
        >
          <div class="transparent-label">
            <st-header
              class="header"
              exportparts="heading, subheading, description"
              heading="${l(this.heading)}"
              subheading="${l(this.subheading)}"
              description="${l(this.description)}"
            ></st-header>
          </div>
        </div>
      </a>
    `;
    return template;
  }
}

customElements.define('st-card', Card);

export default Card;
