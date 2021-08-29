import Vue from 'vue';
import App from './App.vue';
// import modal from '../../../js/modal.js';
// import header from '../../../js/header.js';

// window.VW = window.VW || {};
// window.VW.modal = modal;
// window.VW.header = header;
// window.VW.modal();
// window.VW.header();

new Vue({ render: createElement => createElement(App) }).$mount('#app');

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Gallery',
//         items: ["https://assets.codepen.io/12005/windmill.jpg", "https://assets.codepen.io/12005/suspension-bridge.jpg", "https://assets.codepen.io/12005/sunset.jpg"]
//     }
// });