import {LitElement, html, css} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export default class Button extends LitElement {
    static get properties() {
        return {
            type: {type: String},
            label: {type: String},
            href: {type: String},
            icon: {type: String},
            trailingIcon: {attribute: "trailing-icon", type: Boolean} // Should the icon be placed after the text?
        }
    }

    static get styles() {
        return css`
        :host {
            display: inline-block;
            --icon-gap: var(--size-100);
        }
        #container {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            border-radius: var(--size-050);
            padding: var(--size-200);
            background-color: var(--colors-gray-400);
            text-decoration: none;
            box-shadow: var(--colors-black-600) 1px 1px 8px;
            color: var(--colors-black-800);
        }
        #container:hover {
            color: black;
        }
        ion-icon {
            margin-right: var(--icon-gap);
        }
        :host([trailing-icon]) ion-icon {
            margin-right: 0;
            margin-left: var(--icon-gap);
        }

        :host([type="primary"]) #container {
            background-color: var(--colors-theme-5);
            color: var(--colors-white-800);
        }
        :host([type="secondary"]) #container {
            background-color: var(--colors-theme-3);
            color: var(--colors-white-800);
        }
        :host([type]) #container:hover {
            color: white;
        }
        `;
    }

    render() {
        return html` <a id="container" href=${ifDefined(this.href)}>
            ${this.icon && !this.trailingIcon ? html`<ion-icon name="${this.icon}"></ion-icon>` : null}
            <st-text id="text" exportparts="container: content" label=${this.label}>${this.label}</st-text>
            ${this.icon && this.trailingIcon ? html`<ion-icon class="trailing" name="${this.icon}"></ion-icon>` : null}
        </a>
        `;
    }
}

customElements.define('st-button', Button);