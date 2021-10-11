import { css } from 'lit';
export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .st-text,
  .st-text::slotted(*) {
    font-family: var(--font-family-default), sans-serif;
    font-size: var(--font-size-var, var(--font-size-100));
    line-height: 1.6;
  }
  .st-text-accent,
  .st-text-accent::slotted(*) {
    font-family: var(--font-family-accent), sans-serif;
    font-size: var(--font-size-var, var(--font-size-500));
    line-height: 1.2;
  }
  .st-text-100,
  .st-text-100::slotted(*) {
    --font-size-var: var(--font-size-100);
  }
  .st-text-200,
  .st-text-200::slotted(*) {
    --font-size-var: var(--font-size-200);
  }
  .st-text-300,
  .st-text-300::slotted(*) {
    --font-size-var: var(--font-size-300);
  }
  .st-text-400,
  .st-text-400::slotted(*) {
    --font-size-var: var(--font-size-400);
  }
  .st-text-500,
  .st-text-500::slotted(*) {
    --font-size-var: var(--font-size-500);
  }
  .st-text-600,
  .st-text-600::slotted(*) {
    --font-size-var: var(--font-size-600);
  }
  .st-text-700,
  .st-text-700::slotted(*) {
    --font-size-var: var(--font-size-700);
  }
  .st-text-800,
  .st-text-800::slotted(*) {
    --font-size-var: var(--font-size-800);
  }
`;
