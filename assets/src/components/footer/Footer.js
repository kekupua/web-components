import '../../../node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from '../../../node_modules/lit/node_modules/lit-html/lit-html.js';
import { LitElement as n } from '../../../node_modules/lit/node_modules/lit-element/lit-element.js';
import textStyles from '../../styles/text/text.js';
import baseStyles from '../../styles/base.js';
import styles from './FooterStyles.js';

class Footer extends n {
  static get styles() {
    return [baseStyles, textStyles, styles];
  }

  render() {
    return y`
      <footer part="container">
        <st-section id="section" exportparts="container: section-container">
          <st-header>
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

export default Footer;
