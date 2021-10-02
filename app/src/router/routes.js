import Home from "../views/Home.vue";
import About from "../views/about/About.vue";
import Gallery from "../views/gallery/Gallery.vue";
import Pricing from "../views/pricing/Pricing.vue";
import Post from "../views/post/Post.vue";

const routes = [
    {
        path: "/page-not-found",
        alias: '*',
        component: { render: (h) => h("div", ["404! Page Not Found!"]) }
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing
    },
    {
        path: '/post',
        name: 'post',
        component: Post
    },
];

export default routes;