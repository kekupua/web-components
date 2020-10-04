import { LitElement, html, css } from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';
export default class CustomSection extends LitElement {
    static get properties() {
        return {
            alignment: {type: String},
            heading: {type: String},
            subheading: {type: String},
            description: {type: String}
        }
    }
    static get styles() {
        return css`
            #container {
                width: 100%;
                background-color: var(--primary-bg-color, white);
            }
            :host([type="secondary"]) #container {
                background-color: var(--secondary-bg-color, white);
            }
            #content {
                height: 100%;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            :host([alignment="left"]) #content{
                text-align: left;
                align-items: flex-start;
            }
            :host([alignment="right"]) #content{
                text-align: right;
                align-items: flex-end;
            }
        `
    }

    render() {
        return html`
            <section id="container" part="container">
                <div id="content" part="content">
                    <slot name="header">
                        <s-header part="header" heading="${ifDefined(this.heading)}" subheading="${ifDefined(this.subheading)}" description=${ifDefined(this.description)}
                            exposeparts="heading, subheading, description"></s-header>
                    </slot>
                    <slot></slot>
                </div>
            </section>
        `
    }
}

customElements.define('s-section', CustomSection);