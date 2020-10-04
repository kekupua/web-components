import {LitElement, html, css} from 'lit-element';

export default class Text extends LitElement {
    static get properties() {
        return {
            type: {type: String},
            href: {type: String}
        }
    }

    static get styles() {
        return css`
            :host {
                font-family: var(--text-font-family, system-ui);
            }
            h1, h2, h3, h4, h5, h6, p {
                margin: 0;
            }
        `;
    }

    render() {
        let tag = document.createElement(this.type || 'span');
        let textSlot = document.createElement('slot');
        tag.appendChild(textSlot);
        tag.part = 'container';
        if (this.href) {
            return html` <a href="${this.href}">
                ${this.tag}
            </a>`;
        }
        return tag;
    }
}

customElements.define('s-text', Text)