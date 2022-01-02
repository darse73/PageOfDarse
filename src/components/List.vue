<template>
  <div class="list">
    <h3 class="date"><slot name="date">2021.12.12</slot></h3>
    <h3 class="title"><slot name="title">電卓を改良しました！</slot></h3>
    <div class="preview"><slot name="img"></slot></div>
    <div class="comment">
      <slot name="comment">
      改良して、一応満足な仕上がりにできた！<br />
      質問があったら、これからコメント欄を作るつもりなのでそこに書いてね！
      </slot>
    </div>
  </div>
</template>

<style scoped>
.list {
  border: 0.2rem solid rgb(2, 61, 255);
  margin: 2rem 3rem 0;
  padding: 1.5rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr 2fr 0.8fr 0.2fr 1fr 5fr;
  background-color: rgb(255, 255, 255);
}
.list:hover {
  transform: scale(1.01);
}
.date {
  font-size: 1.5rem;
  grid-row: 1;
  grid-column: 1/3;
  line-height: 3rem;
}
.title {
  padding-left: 0.5rem;
  font-size: 2rem;
  grid-row: 1;
  grid-column: 3/7;
  line-height: 3rem;
}
.preview {
  grid-row: 2;
  grid-column: 1/4;
}
.comment {
  font-size: 1.5rem;
  grid-row: 2;
  grid-column: 5/7;
}
</style>
