<template>
  <div class="big-title">
    <div class="title-text">
      <h6><span>くらげ</span>のダースが書く</h6>
      <h1>プログラミング備忘録</h1>
    </div>
  </div>
</template>

<style scoped>
.big-title {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/jerryfish.png);
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(228, 243, 255, 0.877);
  border-bottom: 1rem solid rgb(95, 95, 255);
}
.title-text {
  text-align: center;
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
span {
  color: rgba(0, 89, 255, 0.699);
  font-size: 7rem;
}
.title-text h6 {
  font-size: 5rem;
  margin-bottom: 8rem;
}
.title-text h1 {
  font-size: 11rem;
}
</style>
