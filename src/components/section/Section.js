import { LitElement, html, css } from 'lit-element';

export default class CustomSection extends LitElement {

    static get styles() {
        return css`
            #container {
                width: 100%;
            }
            #content {
                padding: var(--section-v-padding, 2.5%) var(--section-h-padding, 5%);
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `
    }

    render() {
        return html`
            <section id="container" part="container">
                <div id="content" part="content">
                    <slot></slot>
                </div>
            </section>
        `
    }
}

customElements.define('s-section', CustomSection);