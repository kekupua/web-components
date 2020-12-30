import {LitElement, html, css} from 'lit-element';

export default class Text extends LitElement {
    static get properties() {
        return {
            accent: {type: Boolean},
            type: {type: String},
            href: {type: String}
        }
    }

    static get styles() {
        return css`
            h1, h2, h3, h4, h5, h6, p, a {
                margin: 0;
                display: inline-block;
            }
            a {
                text-decoration: none;
                color: rgb(0, 154, 228);
            }
            :host {
                display: inline-block;
                font-family: var(--font-family-default), sans-serif;
                color: currentColor;
            }
            .accent {
                font-family: var(--font-family-accent), sans-serif;
            }
            :host([type*=h]),
            :host([type=p]) {
                display: block;
            }
            :host([href]) {
                display: inline-block;
            }
        `;
    }

    isHeading(tag) {
        const headingTag = /h[1-6]/g
        return headingTag.test(tag);
    }

    render() {
        let tag = document.createElement(this.type || 'span');
        let textSlot = document.createElement('slot');
        tag.appendChild(textSlot);
        if (this.accent) {
            tag.classList.add('accent');
        }
        if (this.href) {
            return html` <a href="${this.href}" part="container">
                ${tag}
            </a>`;
        }
        tag.part = 'container';
        return tag;
    }
}

customElements.define('s-text', Text)