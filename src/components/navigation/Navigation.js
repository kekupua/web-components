import { LitElement, html, css } from 'lit-element';

export default class Navigation extends LitElement {
    constructor() {
        super();
        this.items = [
            { "description": "About", "href": "#about" },
            { "description": "Projects", "href": "#projects" },
            { "description": "Contact", "href": "#contact" },
        ]
    }
    static get properties() {
        return {
            alignment: {type: String},
            items: {type: Array}, // Array of objects
        }
    }
    static get styles() {
        return css`
            #container {
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                background: var(--section-bg-1);
                z-index: var(--z-index-nav);
            }
            .nav-item::part(container) {
                padding: var(--size-300);
                color: var(--colors-gray-200);
            }
            .nav-item::part(container):hover {
                color: var(--colors-gray-400);
            }
            :host([alignment="center"]) #nav-items {
                text-align: center;
            }
            :host([alignment="right"]) #nav-items {
                text-align: right;
            }
        `
    }
    mapNavItems(items) {
        return items ? items.map((item, index) => {
            return html`<st-text href="${item.href}" class="nav-item" part="nav-item nav-item-${index}">
                ${item.description}
            </st-text>`;
        }) : null;
    }
    render() {
        return html`
            <nav id="container" part="container">
                <div id="content" part="content">
                    <div id="nav-items">
                        ${this.mapNavItems(this.items)}
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('st-nav', Navigation);