import { html } from 'lit-element';
import '../components/index';

export default {
  title: 'Pages/Projects',
};

export const Default = () => html`
<body>
  <s-nav alignment="right"></s-nav>
  <s-section id="splash">
    <div id="main-text">
      <div id="CTA-header">
        <s-header alignment="left" id="name-header" heading="Sean Teramae" subheading="Engineer"></s-header>
        <s-button href="mailto:seteramae@gmail.com?Subject=Hi!" label="Contact Me!"></s-button>
      </div>
    </div>
  
    <!-- <div class="categories">
      <div class="category">
        <a href="/projects">
          <ion-icon name="construct-outline"></ion-icon>
          <s-text>Projects</s-text>
        </a>
      </div>
      <div class="category">
        <a href="/essays">
          <ion-icon name="document-text-outline"></ion-icon>
          <s-text>Essays</s-text>
        </a>
      </div>
      <div class="category">
        <a href="/resume">
          <ion-icon name="reader-outline"></ion-icon>
          <s-text>Resume</s-text>
        </a>
      </div>
    </div> -->
  
    
  </s-section>
  <s-footer></s-footer>
</body>
`;