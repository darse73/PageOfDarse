import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Works from "../views/Works.vue"
import Memorandum from "../views/Memorandum"
import Tweet from "../views/Tweet"
import Upload from "../views/Upload.vue"
import About from "../views/About.vue"
import Calculator from "../views/works/Calculator.vue"
import Calculator2 from "../views/works/Calculator2.vue"
import MvError from "../views/memorandums/MvError.vue"
import Hover from "../views/memorandums/Hover.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
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
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/works/calculator",
    name: "Calculator",
    component: Calculator
  },
  {
    path: "/works/calculator2",
    name: "Calculator2",
    component: Calculator2
  },
  {
    path: "/memorandums/mv-error",
    name: "MvError",
    component: MvError
  },
  {
    path: "/memorandums/hover",
    name: "Hover",
    component: Hover
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
