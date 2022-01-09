<template>
  <div class="greeting">
    <div class="facial-img-container">
      <img class="facial-img" src="../assets/jerryfish_facial.svg" />
    </div>
    <ul class="details">
      <li>名前：ダース</li>
      <li>種族：くらげ</li>
      <li>年齢：21さい</li>
      <li>クラゲになった理由：好きだから</li>
      <li>サイトを作った理由：プログラミングがうまくなりたいから</li>
    </ul>
  </div>
</template>

<style scoped>
.facial-img-container {
  text-align: center;
  background-color: rgb(196, 226, 255);
  width: 60%;
  margin: 0 auto;
}
.facial-img {
  width: 65%;
}
.details {
  margin: 3rem 0;
  padding: 2rem;
  border: 0.2rem solid hsl(194, 89%, 81%);
  text-align: center;
  font-size: 2.5rem;
}
.details li {
  margin-bottom: 1rem;
}
</style>
