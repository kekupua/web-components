import { LitElement, html } from 'lit';
import baseStyles from '../../styles/base';
import textStyles from '../../styles/text/text';
import styles from './FooterStyles';

export default class Footer extends LitElement {
  static get styles() {
    return [baseStyles, textStyles, styles];
  }

  render() {
    return html`
      <footer part="container">
        <st-section id="section" exportparts="container: section-container">
          <st-header layout="center">
            <h2 slot="heading">Contact</h2>
            <p slot="description">Irvine, CA</p>
          </st-header>
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
