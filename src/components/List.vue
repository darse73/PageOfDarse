<template>
  <div class="list">
    <h3 class="date">2021.12.12</h3>
    <h3 class="title">電卓を改良しました！</h3>
    <div class="preview"></div>
    <div class="comment">
      改良して、一応満足な仕上がりにできた！<br />
      質問があったら、これからコメント欄を作るつもりなのでそこに書いてね！
    </div>
  </div>
</template>

<style scoped>
.list {
  border: 0.2rem solid rgb(2, 61, 255);
  margin: 2rem 3rem 0;
  padding: 1.5rem;
  display: grid;
  grid-template-rows: 4rem 15rem;
  grid-template-columns: 1fr 3fr 1fr 5fr;
  background-color: rgb(255, 255, 255);
}
.date {
  font-size: 1.5rem;
  grid-row: 1;
  grid-column: 1;
  line-height: 3rem;
}
.title {
  padding-left: 0.5rem;
  font-size: 2rem;
  grid-row: 1;
  grid-column: 2/5;
  line-height: 3rem;
}
.preview {
  background-color: blue;
  grid-row: 2;
  grid-column: 1/3;
}
.comment {
  font-size: 1.5rem;
  grid-row: 2;
  grid-column: 4/7;
}
</style>
