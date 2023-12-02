import { createRouter, createWebHistory } from "vue-router";
import HomeRoute from "./HomeRoute.vue";
import OtherRoute from "./OtherRoute.vue";

// TODO: Update router after boilerplate is deleted

const routes = [
	{ path: "/", name: "Home", component: HomeRoute },
	{ path: "/other", name: "Other", component: OtherRoute },
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;
