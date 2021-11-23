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
    path: "/supertabs",
    name: "supertabs",
    component: () =>
      import(/* webpackChunkName: "supertabs" */ "../views/SuperTabs.vue"),
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
  {
    path: "/webrtcscreenshot",
    name: "webrtcscreenshot",
    component: () =>
      import(
        /* webpackChunkName: "webrtcscreenshot" */ "../views/WebRTCScreenShot.vue"
      ),
  },
  {
    path: "/shorturl",
    name: "shorturl",
    component: () =>
      import(/* webpackChunkName: "shorturl" */ "../views/ShortURL.vue"),
  },
  {
    path: "/webworker",
    name: "webworker",
    component: () =>
      import(/* webpackChunkName: "webworker" */ "../views/WebWorker.vue"),
  },
  {
    path: "/imagegrid",
    name: "imagegrid",
    component: () =>
      import(/* webpackChunkName: "imagegrid" */ "../views/ImageGrid.vue"),
  },
  {
    path: "/lazyimage",
    name: "lazyimage",
    component: () =>
      import(/* webpackChunkName: "lazyimage" */ "../views/LazyImage.vue"),
  },
  // 作业
  {
    path: "/transradix",
    name: "transradix",
    component: () =>
      import(/* webpackChunkName: "transradix" */ "../views/TransRadix.vue"),
  },
  {
    path: "/webeditor",
    name: "webeditor",
    component: () =>
      import(/* webpackChunkName: "webeditor" */ "../views/WebEditor.vue"),
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
