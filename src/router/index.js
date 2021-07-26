import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "group" */ "../views/Home/Home"),
  },
  {
    path: "/new",
    name: "Add a new job",
    component: () =>
      import(/* webpackChunkName: "group" */ "../views/NewJob/NewJob"),
  },
  {
    path: "/registered-jobs",
    name: "Registered jobs",
    component: () =>
      import(
        /* webpackChunkName: "group" */ "../views/RegisteredJobs/RegisteredJobs"
      ),
  },
  {
    path: "/job-detail",
    name: "Detailed job",
    component: () =>
      import(
        /* webpackChunkName: "group" */ "../views/DetailedJob/DetailedJob"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "group" */ "../views/LoginPage/LoginPage"),
  },
  {
    path: "/",
    name: "Landing page",
    component: () =>
      import(
        /* webpackChunkName: "group" */ "../views/LandingPage/LandingPage"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
