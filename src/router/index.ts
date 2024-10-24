import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/Homepage",
  },
  {
    path: "/Homepage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/profile",
    component: () => import("../views/ProfilePage.vue"),
  },
  {
    path: "/login",

    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",

    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/trash",

    component: () => import("../views/TrashPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
