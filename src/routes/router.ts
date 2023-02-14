import { createRouter, createWebHistory } from "vue-router";
import HomeRoute from "./HomeRoute.vue";
import OtherRoute from "./OtherRoute.vue";

const routes = [
	{ path: "/", name: "Home", component: HomeRoute },
	{ path: "/other", name: "Other", component: OtherRoute },
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;
