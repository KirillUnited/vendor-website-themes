import Gallery from "../views/gallery/Gallery.vue";
import Main from "../views/Main.vue";

const routes = [
    {
        path: "/page-not-found",
        alias: '*',
        component: { render: (h) => h("div", ["404! Page Not Found!"]) }
    },
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
];

export default routes;