import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Other from "./Other.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/other", name: "Other", component: Other },
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;
