import {html} from 'lit-element';
export const renderAspectRatio = (aspectRatio, element) => {
    if (!aspectRatio) return null;
    let [x, y] = aspectRatio.split(":");
    const paddingPercentage = y/x * 100 + "%";
    console.log(element);
    // return html`
    //     <style>
    //     .aspect-ratio {
    //         width: 100%;
    //         position: relative;
    //         padding-top: ${paddingPercentage};
    //     }
    //     .aspect-ratio > * {
    //         position: absolute;
    //         top: 0; 
    //         left: 0; 
    //         bottom: 0; 
    //         right: 0;
    //     }
    //     </style>
    //     <div class="aspect-ratio">
    //         <!-- <s-image src="https://via.placeholder.com/450x450"></s-image> -->
    //         ${element}
    //     </div>
    // `;
}