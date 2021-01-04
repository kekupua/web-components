import {LitElement, html, css} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export default class Button extends LitElement {
    static get properties() {
        return {
            type: {type: String},
            label: {type: String},
            href: {type: String}
        }
    }

    static get styles() {
        return css`
        :host {
            display: inline-block;
        }
        #container {
            display: inline-block;
            cursor: pointer;
            border-radius: var(--size-050);
            padding: var(--size-200);
            background-color: var(--colors-gray-400);
            color: var(--colors-black-800);
        }
        #container:hover {
            background-color: var(--colors-gray-600);
            color: var(--colors-black);
        }
        `;
    }

    render() {
        return html` <a id="container" href=${ifDefined(this.href)}>
            <st-text id="text" exportparts="container: content" label=${this.label}>${this.label}</st-text>
        </a>
        `;
    }
}

customElements.define('st-button', Button);