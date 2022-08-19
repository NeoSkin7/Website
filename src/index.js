// JS Goes here - ES6 supported

import "./css/main.scss";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}
