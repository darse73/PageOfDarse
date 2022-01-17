<template>
  <div>
    <!-- app.vueのstylescopedが子要素の一番上に効いてしまうため -->
    <div class="contents">
      <div class="title">
        <img src="@/assets/jerryfish.png" alt="くらげ" class="s-jerryfish" />
        <h2>
          <slot name="title-text"></slot>
          <span class="date">作成日 <slot name="date"></slot></span>
        </h2>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contents {
  padding: 0 1rem;
}
.title {
  display: flex;
  position: relative;
  margin-bottom: 10rem;
}
.s-jerryfish {
  height: 5rem;
  width: 5rem;
  padding-right: 2rem;
}
.title h2 {
  padding-top: 0.8rem;
  font-size: 2.5rem;
}
.date {
  position: absolute;
  right: 1rem;
  bottom: 0;
  font-size: 2rem;
  transform: translateY(120%);
}
.main {
  font-size: 2.5rem;
}
.main p {
  line-height: 3.3rem;
}
@media screen and (max-width: 599px) {
  .title h2 {
    font-size: 2rem;
  }
}
</style>
