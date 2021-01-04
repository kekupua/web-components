import {LitElement, html, css} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';

export default class Card extends LitElement {
    static get properties() {
        return {
            image: { type: String }, // URL
            href: {type: String},
            heading: { type: String },
            subheading: { type: String },
            description: { type: String },
            static: {type: Boolean},
            contain: {type: Boolean} // Changes background size to contain
        }
    }
    static get styles() {
        return css`
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
                transition: transform .4s;
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
            @media screen and (min-width: 960px){
                .transparent-label {
                    transform: translateY(100%);
                }
            }
        `;
    }
    render() {
        const containerClasses = {
            wide: this.wide
        }
        const template = html`
        <a class="link" href=${ifDefined(this.href)}>
            <div id="container" part="container" class="${classMap(containerClasses)}" style="background-image: url(${this.image})">
                <div class="transparent-label">
                    <st-header
                        class="header"
                        exportparts="heading, subheading, description"
                        heading="${ifDefined(this.heading)}"
                        subheading="${ifDefined(this.subheading)}"
                        description="${ifDefined(this.description)}"></st-header>
                </div>
            </div>
        </a>
        `
        return template;
    }
}

customElements.define('st-card', Card);
