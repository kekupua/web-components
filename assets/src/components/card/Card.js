import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import { ifDefined as l } from '../../../node_modules/lit/node_modules/lit-html/directives/if-defined.js';
import textStyles from '../../styles/text/text.js';
import { classMap as o } from '../../../node_modules/lit/node_modules/lit-html/directives/class-map.js';
import baseStyles from '../../styles/base.js';
import styles from './CardStyles.js';

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
    return [baseStyles, textStyles, styles];
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
            <st-header>
              <slot name="subheading" slot="subheading"></slot>
              <slot class="st-text-300" name="heading" slot="heading"></slot>
              <slot name="description" slot="description"></slot>
            </st-header>
          </div>
        </div>
      </a>
    `;
    return template;
  }
}

customElements.define('st-card', Card);

export default Card;
