import { html } from 'lit-element';
import './Text';

export default {
  title: 'Components/Text',
};

export const Overview = () => html`
    <h1>Defaults</h1>

    <s-text type="h1">Heading 1</s-text>
    <s-text type="h2">Heading 2</s-text>
    <s-text type="h3">Heading 3</s-text>
    <s-text type="h4">Heading 4</s-text>
    <s-text type="h5">Heading 5</s-text>
    <s-text type="h6">Heading 6</s-text>
    <s-text type="p">Paragraph</s-text>
    <s-text>Span</s-text>

    <h1>Accents</h1>

    <s-text accent type="h1">Heading 1</s-text>
    <s-text accent type="h2">Heading 2</s-text>
    <s-text accent type="h3">Heading 3</s-text>
    <s-text accent type="h4">Heading 4</s-text>
    <s-text accent type="h5">Heading 5</s-text>
    <s-text accent type="h6">Heading 6</s-text>
    <s-text accent type="p">Paragraph</s-text>
    <s-text accent>Span</s-text>
`