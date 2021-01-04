import {html} from 'lit-element';
export const renderAspectRatio = (aspectRatio, element) => {
    if (!aspectRatio) return null;
    let [x, y] = aspectRatio.split(":");
    const paddingPercentage = y/x * 100 + "%";
    console.log(element);
    return html`
        <style>
        :host {
            width: 100%;
            position: relative;
            padding-top: ${paddingPercentage};
        }
        :host > * {
            position: absolute;
            top: 0; 
            left: 0; 
            bottom: 0; 
            right: 0;
            width: 100%;
            height: 100%;
        }
        </style>
        ${element}
    `;
}