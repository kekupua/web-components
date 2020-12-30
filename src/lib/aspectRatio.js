import {html} from 'lit-element';
export const renderAspectRatio = (aspectRatio, child) => {
    if (!aspectRatio) return null;
    let [x, y] = aspectRatio.split(":");
    const paddingPercentage = y/x * 100;
    return html`
        <style>
        :host {
            position: relative;
            padding-top: 56.25%;
            width: 100%;
        }
        :host * {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
        </style>
        ${child}
    `;
}