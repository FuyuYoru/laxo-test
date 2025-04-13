import { createRouter, createWebHistory } from "vue-router";
import LeadsPage from "@/pages/deals.vue";
import LoginPage from "@/pages/signIn.vue";
import PublicRoutes from "@/app/router/public.vue";
import ProtectedRoutes from "./protected.vue";

const routes = [
  {
    path: "/",
    name: "Protected",
    component: ProtectedRoutes,
    children: [
      {
        path: "",
        name: "ProtectedIndex",
        redirect: "/leads",
      },
      {
        path: "leads",
        name: "Leads",
        component: LeadsPage,
      },
    ],
  },
  {
    path: "/auth",
    name: "Public",
    component: PublicRoutes,
    children: [
      {
        path: "",
        name: "PublicIndex",
        redirect: "/signIn",
      },
      {
        path: "signIn",
        name: "SignIn",
        component: LoginPage,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/leads",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
