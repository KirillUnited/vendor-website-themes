import "../../src/scss/vw-theme-3";
import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";

new Vue({ render: createElement => createElement(App), router: router }).$mount('#app');