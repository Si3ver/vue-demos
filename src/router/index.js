import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/arraysort",
    name: "arraysort",
    component: () =>
      import(/* webpackChunkName: "arraysort" */ "../views/ArraySort.vue"),
  },
  {
    path: "/clipboard",
    name: "clipboard",
    component: () =>
      import(/* webpackChunkName: "clipboard" */ "../views/Clipboard.vue"),
  },
  {
    path: "/geolocation",
    name: "geolocation",
    component: () =>
      import(/* webpackChunkName: "geolocation" */ "../views/Geolocation.vue"),
  },
  {
    path: "/keyboard",
    name: "keyboard",
    component: () =>
      import(/* webpackChunkName: "keyboard" */ "../views/Keyboard.vue"),
  },
  {
    path: "/webrtc",
    name: "webrtc",
    component: () =>
      import(/* webpackChunkName: "webrtc" */ "../views/WebRTC.vue"),
  },
  // 作业
  {
    path: "/transradix",
    name: "transradix",
    component: () =>
      import(/* webpackChunkName: "transradix" */ "../views/TransRadix.vue"),
  },
  {
    path: "/gridlayout",
    name: "gridlayout",
    component: () =>
      import(/* webpackChunkName: "gridlayout" */ "../views/GridLayout.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
