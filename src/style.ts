import { alertElementId, confirmElementId } from "./dialog";

if (typeof document != "undefined") {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.setAttribute("data-name", "ui-toolkit");
    element.innerHTML = `
    
    #${alertElementId} {
        z-index: 5000;
    }
    
    #${confirmElementId} {
        z-index: 5000;
    }
    `;

    if (document.head != null) {
        document.head.appendChild(element);
    }
}
