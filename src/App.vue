<template>
  <div class="app">
    <Header />
    <BigTitle />
    <CutIn />
    <div class="contents">
      <div class="main">
      <router-view />
      <Greeting />
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 62.5%;
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
</style>

<script>
import Header from "@/components/Header.vue"
import BigTitle from "@/components/BigTitle.vue"
import Greeting from "@/components/Greeting.vue"
import CutIn from "@/components/CutIn.vue"
import store from "@/store/index.js"

export default {
  components: {
    Header,
    BigTitle,
    Greeting,
    CutIn,
  },
  created: function() {
    const path = location.pathname
    const pathArr = path.split("/")
    const title = pathArr.slice(-1)
    console.log(title[0])
    store.commit("changeTitle", title[0])
  },
  methods: {
    detectPath(path) {
      const pathArr = path.split("/")
      const title = pathArr.slice(-1)
      console.log(title[0])
      store.commit("changeTitle", title[0])
    }
  },
  watch: {
    $route (to) {
      this.detectPath(to.path)
    }
  }
}
</script>
