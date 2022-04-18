import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import Movies from "../views/Movies.vue";
import Spells from "../views/Spells.vue";
import Characters from "../views/Characters.vue";
import PotterBlog from "../views/PotterBlog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/spells",
    name: "Spells",
    component: Spells,
  },
  {
    path: "/potterblog",
    name: "PotterBlog",
    component: PotterBlog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
