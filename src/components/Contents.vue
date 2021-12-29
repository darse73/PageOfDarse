<template>
  <div><!-- app.vueのstylescopedが子要素の一番上に効いてしまうため -->
    <div class="contents">
      <div class="title">
        <img src="@/assets/jerryfish.png" alt="くらげ" class="s-jerryfish" />
        <h2><slot name="title-text"></slot></h2>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  height: 5rem;
  padding-bottom: 6rem;
}
.s-jerryfish {
  width: 5rem;
  padding-right: 2rem;
}
.title h2 {
  font-size: 2.5rem;
  line-height: 5rem;
}
.main {
  font-size: 2.5rem;
}
.main p {
  line-height: 3.3rem;
}
</style>
