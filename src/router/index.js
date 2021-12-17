import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Works from "../views/Works.vue"
import Memorandum from "../views/Memorandum"
import Tweet from "../views/Tweet"
import Upload from "../views/Upload.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/works",
    name: "Works",
    component: Works
  },
  {
    path: "/memorandum",
    name: "Memorandum",
    component: Memorandum
  },
  {
    path: "/tweet",
    name: "Tweet",
    component: Tweet
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
