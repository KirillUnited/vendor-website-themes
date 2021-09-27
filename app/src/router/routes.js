import Main from "../views/Main.vue";
import About from "../views/about/About.vue";
import Gallery from "../views/gallery/Gallery.vue";

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
        path: '/about',
        name: 'about',
        component: About
    },,
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
];

export default routes;