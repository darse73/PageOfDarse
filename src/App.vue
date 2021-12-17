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
</style>

<style scoped>
.contents {
  background-color: rgb(243, 243, 253);
  padding: 0 8%;
}
.main {
  display: grid;
  background-color: rgba(210, 247, 255, 0.466);
  grid-template-columns: 7fr 3fr;
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
