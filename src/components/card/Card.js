import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map';
import { ifDefined } from 'lit/directives/if-defined';
import baseStyles from '../../styles/base';
import textStyles from '../../styles/text/text';
import styles from './CardStyles';

export default class Card extends LitElement {
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
    const template = html`
      <a class="link" href=${ifDefined(this.href)}>
        <div
          id="container"
          part="container"
          class="${classMap(containerClasses)}"
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
