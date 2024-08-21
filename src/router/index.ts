import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteLocationNormalizedGeneric,
  type RouteLocationNormalizedLoadedGeneric,
  type NavigationGuardNext,
} from "vue-router";
import NProgress from "nprogress";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("~/views/system/error.vue"),
    },
    {
      path: "/auth",
      component: () => import("~/layouts/auth-layout.vue"),
      children: [
        {
          path: "/auth/login",
          name: "auth-login",
          component: () => import("~/views/auth/login.vue"),
        },
        {
          path: "/auth/request-otp",
          name: "auth-request-otp",
          component: () => import("~/views/auth/request-otp.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("~/layouts/dashboard-layout.vue"),
      children: [
        {
          path: "/dashboard/home",
          name: "dashboard-home",
          component: () => import("~/views/dashboard/home.vue"),
        },
        {
          path: "/dashboard/inventory/office-supplies",
          name: "dashboard-home",
          component: () =>
            import("~/views/dashboard/inventory/manage-supplies-page.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(
  (
    to: RouteLocationNormalizedGeneric,
    from: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext,
  ) => {
    console.log({ to, from, next });

    NProgress.start();
    next();
  },
);

router.afterEach(() => {
  NProgress.done();
});

export default router;
