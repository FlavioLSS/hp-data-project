import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import Movies from "../views/Movies.vue";
import Spells from "../views/Spells.vue";
import Characters from "../views/Characters.vue";
import PotterBlog from "../views/PotterBlog.vue";
import fantasticBeastsArticle from "../views/Potter-Blog-Posts/fantastic-beasts-article.vue"
import hogwartsLegacyArticle from "../views/Potter-Blog-Posts/hogwarts-legacy-article.vue"
import hpRebootArticle from "../views/Potter-Blog-Posts/hp-reboot-article.vue"
import brazilianActorArticle from "../views/Potter-Blog-Posts/brazilian-actor-article.vue"
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
  {
    path: "/fantasticbeastsarticle",
    name: "FantasticBeastsArticle",
    component: fantasticBeastsArticle,
  },
  {
    path: "/hogwartslegacyarticle",
    name: "HogwartsLegacyArticle",
    component: hogwartsLegacyArticle,
  },
  {
    path: "/hprebootarticle",
    name: "HpRebootArticle",
    component: hpRebootArticle,
  },
  {
    path: "/brazilianactorarticle",
    name: "brazilianActorArticle",
    component:brazilianActorArticle,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
