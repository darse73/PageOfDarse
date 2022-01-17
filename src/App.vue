<template>
  <div class="app">
    <Header />
    <BigTitle />
    <CutIn />
    <div class="contents">
      <div class="main">
        <router-view />
        <Greeting />
        <Comment />
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Mochiy+Pop+One&family=Noto+Sans+JP:wght@500&display=swap");
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 62.5%;
  font-family: "Kosugi Maru", sans-serif;
}
.router-link {
  text-decoration: none;
  color: black;
}
</style>

<style scoped>
.contents {
  background-color: rgb(243, 243, 253);
  padding: 0 8%;
}
.main {
  display: grid;
  background-color: rgb(224, 247, 252);
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 5rem;
  grid-template-rows: 1fr;
  padding: 5rem;
}
@media screen and (max-width: 1024px) {
  .contents {
    padding: 0 5%;
  }
  .main {
    display: grid;
    background-color: rgb(224, 247, 252);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 5rem;
  }
}
@media screen and (max-width: 599px) {
  .contents {
    padding: 0 5%;
  }
  .main {
    display: grid;
    background-color: rgb(224, 247, 252);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 3rem 0rem;
  }
}
</style>

<script>
import Header from "@/components/Header.vue"
import BigTitle from "@/components/BigTitle.vue"
import Greeting from "@/components/Greeting.vue"
import Comment from "@/components/Comments.vue"
import CutIn from "@/components/CutIn.vue"
import store from "@/store/index.js"

export default {
  components: {
    Header,
    BigTitle,
    Greeting,
    Comment,
    CutIn,
  },
  created: function () {
    const path = location.pathname
    const pathArr = path.split("/")
    const title = pathArr.slice(-1)
    if (title[0] === "") {
      title[0] = "HOME"
    }
    title[0] = title[0].toLocaleUpperCase()
    store.commit("changeTitle", title[0])
  },
  methods: {
    detectPath(path) {
      const pathArr = path.split("/")
      const title = pathArr.slice(-1)
      if (title[0] === "") {
        title[0] = "HOME"
      }
      title[0] = title[0].toLocaleUpperCase()
      store.commit("changeTitle", title[0])
    },
  },
  watch: {
    $route(to) {
      this.detectPath(to.path)
    },
  },
}
</script>
