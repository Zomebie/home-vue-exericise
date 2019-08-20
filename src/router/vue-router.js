import Vue from "vue";
import VueRouter from "vue-router";
import HomeContents from "../components/root/HomeContents.vue";
import Team from "../components/Team.vue";
import Career from "../components/Career.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomeContents },
  { path: "/meet-our-team", component: Team },
  { path: "/join-with-us-2", component: Career }
];

export default new VueRouter({
  routes
});