import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export default class Image extends LitElement {
    static get properties() {
        return {
            src: {type: String},
            alt: {type: String},
            clip: {type: String} // Enum ["circle", "diamond", "triangle"]
        }
    }
    
    static get styles() {
        return css`
            :host([clip="circle"]) #image {
                clip-path: circle(50%);
            }
            :host([clip="diamond"]) #image {
                clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
            }
            :host([clip="triangle"]) #image {
                clip-path: polygon(0 100%, 50% 0, 100% 100%);
            }
        `;
    }
    
    render() {
        return html`
            <img id="image" part="image" src="${this.src}" alt="${ifDefined(this.alt)}">
        `;
    }
}

customElements.define('s-image', Image);