import {LitElement, html, css} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import { renderAspectRatio } from '../../lib/aspectRatio';

export default class Card extends LitElement {
    constructor() {
        super();
        this.widthScale = 1;
    }
    static get properties() {
        return {
            image: { type: String }, // URL
            heading: { type: String },
            subheading: { type: String },
            description: { type: String },
            widthScale: {type: Number}
        }
    }
    static get styles() {
        return css`
            :host {
                display: inline-block;
                width: 550px;
            }
        `;
    }
    render() {
        const containerClasses = {
            wide: this.wide
        }
        const template = html`
        <div id="container" part="container" class="${classMap(containerClasses)}">
            ${this.image ? html`<div id="image-section" part="image-section">
                <div id="image-aspect" part="image-aspect">
                    <slot name="image">
                        <div id="image-wrapper" part="image-wrapper">
                            <img id="image-tag" part="image-tag" src="${this.image}" alt="placeholder"/>
                        </div>
                    </slot>
                </div>
            </div>` : null}
            <div id="text-section">
                <s-header
                    exportparts="heading, subheading, description"
                    heading="${ifDefined(this.heading)}"
                    subheading="${ifDefined(this.subheading)}"
                    description="${ifDefined(this.description)}">
                </s-header>
            </div>
        </div>`
        return html`
            ${renderAspectRatio("16:9", template)};
        `
    }
}

customElements.define('s-card', Card);
