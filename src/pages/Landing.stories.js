import { html } from 'lit-element';
import '../components/index';

export default {
  title: 'Pages/Landing',
};

export const Default = () => html`
<style>
html {
  scroll-behavior: smooth;
}
#masthead::part(container),
#projects::part(container)  {
  background: var(--section-bg-1);
}
#about::part(container) {
  background: var(--section-bg-2);
}
#masthead::part(container) {
  height: 200px;
  display: flex;
  align-items: center;
}
#name-header::part(heading) {
  font-size: 2em;
}
#category-header::part(heading) {
  font-size: 1.5em;
  text-decoration: none;
  color: var(--colors-theme-4);
}
::part(description) {
  font-size: 1.25em;
  color: var(--colors-gray-100);
}
#main-text {
  display: grid;
  column-gap: var(--spacer-400);
}
.categories {
  display: flex;
  justify-content: space-evenly;
}
.categories ion-icon {
  font-size: 128px;
}
.category ion-icon {
  display: block;
}
@media screen and (min-width: 600px) {
  #name-header::part(heading) {
    font-size: 3em;
  }
  #masthead::part(container) {
    height: 300px;
  }
}
@media screen and (min-width: 900px) {
  #name-header::part(heading) {
    font-size: 4em;
  }
  #masthead::part(container) {
    height: 400px;
  }
}
@media screen and (min-width: 1200px) {
  #name-header::part(heading) {
    font-size: 5em;
  }
  #masthead::part(container) {
    height: 500px;
  }
}
</style>
<body>
  <s-nav alignment="center"></s-nav>
  <s-section id="masthead" alignment="center">
    <div id="main-text">
      <div id="CTA-header">
        <s-header id="name-header" heading="Sean Teramae" description="Software Engineer"></s-header>
      </div>
    </div>
  </s-section>

  <s-section id="about">
    <s-header id="category-header" hLevel="2" heading="About Me!" headingHref="#about"></s-header>
    <!-- Add About Component  -->
  </s-section>
  <s-section id="projects">
    <s-header id="category-header" hLevel="2" heading="Projects" headingHref="#projects" description="A look into my portfolio."></s-header>
    <!-- Add Projects Component  -->
    <github-repository owner-repo="kekupua/pintOS"></github-repository>
  </s-section>
  <s-footer></s-footer>
</body>
`