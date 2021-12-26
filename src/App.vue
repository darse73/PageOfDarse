<template>
  <div class="app">
    <Header />
    <BigTitle />
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

export default {
  components: {
    Header,
    BigTitle,
    Greeting,
  },
}
</script>
