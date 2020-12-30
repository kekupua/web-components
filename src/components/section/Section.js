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
            :host {
                display: block;
            }
            #container {
                width: 100%;
                background-color: white;
                display: flex;
                text-align: left;
            }
            #content {
                max-width: var(--content-max-width);
                padding: var(--spacer-800);
            }
            :host([type="secondary"]) #container {
                background-color: gray;
            }
            :host([alignment="center"]) #container{
                text-align: center;
                justify-content: center;
            }
            :host([alignment="right"]) #container{
                text-align: right;
                justify-content: flex-end;
            }
        `
    }

    render() {
        return html`
            <section id="container" part="container">
                <div id="content" part="content">
                    <slot name="header">
                        <s-header part="header" heading="${ifDefined(this.heading)}" subheading="${ifDefined(this.subheading)}" description=${ifDefined(this.description)}
                        exportparts="heading subheading description"></s-header>
                    </slot>
                    <slot part="default-content"></slot>
                </div>
            </section>
        `
    }
}

customElements.define('s-section', CustomSection);