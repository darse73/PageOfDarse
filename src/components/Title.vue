<template>
  <div class="title">
    <img class="title-img" src="@/assets/jerryfish.png" />
    <h2 class="title-text">
      <slot name="front" />
      <div class="back"><slot name="back" /></div>
    </h2>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  height: 5rem;
}
.title-img {
  height: 5rem;
  width: 5rem;
}
.title-text {
  font-size: 2.5rem;
  line-height: 5rem;
}
.back {
  display: inline-block;
  padding-left: 1rem;
  margin-bottom: 5rem;
  font-size: 1.7rem;
}
@media screen and (max-width: 599px) {
.title {
  display: flex;
  height: 10rem;
}
.back {
    display: block;
  line-height: 3rem;
}
}
</style>
