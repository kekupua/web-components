import { LitElement, html, css } from 'lit-element';

export default class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      #section::part(container) {
        background: #37392e;
        text-align: center;
        justify-content: center;
      }
      st-header::part(heading),
      st-header::part(description) {
        color: var(--colors-white-700);
        margin-bottom: var(--size-100);
      }
      .social-icons > * ~ * {
        margin-left: var(--spacer-200);
      }
      .social-icons a {
        text-decoration: none;
        color: var(--colors-white-700);
      }
      ion-icon {
        font-size: var(--size-400);
        color: var(--colors-white-700);
      }
      @media screen and (min-width: 480px) {
        #section::part(container) {
          background: #37392e;
          text-align: left;
        }
      }
    `;
  }

  render() {
    return html`
      <footer id="container" part="container">
        <st-section id="section" exportparts="container: section-container">
          <st-header
            heading="Contact"
            description="Irvine, CA"
            headingHref="#contact"
          ></st-header>
          <div class="social-icons">
            <a
              class="social-icon"
              href="mailto:seteramae@gmail.com?Subject=Hi!"
              target="_blank"
              title="mail"
            >
              <ion-icon name="mail"></ion-icon>
            </a>
            <a
              class="social-icon"
              href="https://www.linkedin.com/in/sean-teramae-b89486123/"
              target="_blank"
              title="linkedin"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              class="social-icon"
              href="https://github.com/kekupua"
              target="_blank"
              title="github"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </st-section>
      </footer>
    `;
  }
}

customElements.define('st-footer', Footer);
