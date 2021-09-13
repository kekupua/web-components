import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { renderAspectRatio } from '../../lib/aspectRatio';

export default class Image extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      alt: { type: String },
      clip: { type: String }, // Enum ["circle", "diamond", "triangle"]
      frame: { type: Boolean },
      caption: { type: String },
      aspectRatio: { type: String, attribute: 'aspect-ratio' },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      figure {
        margin: 0;
      }
      img {
        vertical-align: top;
        height: 100%;
        width: 100%;
      }
      figcaption {
        text-align: center;
      }
      :host([clip='circle']) #image {
        clip-path: circle(50%);
      }
      :host([clip='diamond']) #image {
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
      }
      :host([clip='triangle']) #image {
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
      }
      :host([frame]) #image {
        padding: 1px;
        border: 1px solid black;
      }
    `;
  }

  render() {
    let template = html`
      <figure>
        <img
          id="image"
          part="container"
          src="${this.src}"
          alt="${ifDefined(this.alt)}"
        />
        ${this.caption
          ? html`<figcaption><st-text>${this.caption}</st-text></figcaption>`
          : null}
      </figure>
    `;
    if (this.aspectRatio) {
      return renderAspectRatio(this.aspectRatio, template);
    }
    return template;
  }
}

customElements.define('st-image', Image);
