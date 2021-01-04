import { html } from 'lit-element';
import './Text';

export default {
  title: 'Components/Text',
};

export const Overview = () => html`
    <h1>Defaults</h1>

    <st-text type="h1">Heading 1</st-text>
    <st-text type="h2">Heading 2</st-text>
    <st-text type="h3">Heading 3</st-text>
    <st-text type="h4">Heading 4</st-text>
    <st-text type="h5">Heading 5</st-text>
    <st-text type="h6">Heading 6</st-text>
    <st-text type="p">Paragraph</st-text>
    <st-text>Span</st-text>

    <h1>Accents</h1>

    <st-text accent type="h1">Heading 1</st-text>
    <st-text accent type="h2">Heading 2</st-text>
    <st-text accent type="h3">Heading 3</st-text>
    <st-text accent type="h4">Heading 4</st-text>
    <st-text accent type="h5">Heading 5</st-text>
    <st-text accent type="h6">Heading 6</st-text>
    <st-text accent type="p">Paragraph</st-text>
    <st-text accent>Span</st-text>
`