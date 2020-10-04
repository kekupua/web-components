import {LitElement, html, css} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { sizes } from '../../styles/sizes';

const cardBorderRadius = sizes[2];
export default class Card extends LitElement {
    static get properties() {
        return {
            image: { type: String }, // URL
            heading: { type: String },
            subheading: { type: String },
            description: { type: String },
            wide: { type: Boolean }
        }
    }
    static get styles() {
        return css`
            #container {
                width: ${sizes[12]}px;
                border: 1px solid grey;
                box-shadow: rgb(136, 136, 136) 0px 2px ${sizes[1]}px;
                display: inline-flex;
                flex-direction: column;
            }
            #container.wide {
                width: ${sizes[13]}px;
            }
            #image-section {
                width: 100%;
            }
            #image-aspect {
                position: relative;
                width: 100%;
                padding-top: 56.25%;
                overflow: hidden;
            }
            #image-wrapper {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #image-tag {
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            #text-section {
                width: 100%;
                padding: ${sizes[2]}px ${sizes[3]}px;
            }
            #heading-tag, 
            #subheading-tag, 
            #description-tag {
                margin: 0;
            }
        `;
    }
    render() {
        const containerClasses = {
            wide: this.wide
        }
        return html`
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
                    <slot name="heading">
                        ${this.heading ? html`<h1 id="heading-tag" part="heading-tag">
                            ${this.heading}
                        </h1>` : null}
                    </slot>
                    <slot name="subheading">
                        ${this.subheading ? html`<h2 id="subheading-tag" part="subheading-tag">
                            ${this.subheading}
                        </h2>` : null}
                    </slot>
                    <slot name="description">
                        ${this.description ? html`<p id="description-tag" part="description-tag">
                            ${this.description}
                        </p>` : null}
                    </slot>
                </div>
            </div>
        `;
    }
}

customElements.get('s-card') || customElements.define('s-card', Card);
