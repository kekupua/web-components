import { html } from 'lit-element';
import '../components/index';

export default {
  title: 'Demos/Landing',
};

export const Default = () => html`
<style>
#splash::part(container) {
  height: 100vh;
  max-height: 100%;
}
s-section {
  --primary-bg-color: var(--colors-gray-600);
  --secondary-bg-color: var(--colors-gray-400);
}
</style>
<s-section id="splash" heading="Sean Teramae">
  <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
</s-section>
<s-section heading="Section 1" type="secondary" alignment="left">
  <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
</s-section>
<s-section heading="Section 2" alignment="right">
  <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
</s-section>
<s-section heading="Section 3" type="secondary"  alignment="left">
  <s-image src="https://via.placeholder.com/200" clip="circle"></s-image>
</s-section>
`