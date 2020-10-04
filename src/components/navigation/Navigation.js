import { LitElement, html, css } from 'lit-element';

export default class Navigation extends LitElement {
    static get properties() {
        return {
            heading: {type: String}
        }
    }
    static get styles() {
        return css`
            #container {
                display: flex;
                width: 100%;
                background: blue;
                padding: 16px;
                align-items: center;
            }
        `
    }
    render() {
        return html`
            <nav id="container" part="container">
                <div id="content" part="content">
                    <div id="brand">
                        <slot name="logo">
                        </slot> 
                        <slot name="heading">
                            ${this.heading ? html`<h1>${this.heading}</h1>` : null}
                        </slot> 
                    </div>
                    <slot></slot>
                </div>
            </nav>
        `;
    }
}

customElements.define('s-nav', Navigation);