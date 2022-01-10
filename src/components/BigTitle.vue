<template>
  <div class="big-title">
    <div class="title-text">
      <h6><span class="span-jer">くらげ</span>のダースが書く</h6>
      <h1><span class="span-tex">プログラミング</span><span class="span-tex">備忘録</span></h1>
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
@media screen and (min-width: 1025px){
  .title-text {
  text-align: center;
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.span-jer {
  color: rgba(0, 89, 255, 0.699);
  font-size: 6rem;
}
.title-text h6 {
  font-size: 4.5rem;
  margin-bottom: 8rem;
}
.span-tex {
  font-size: 10rem;
}
}
@media screen and (max-width: 1024px){
  .title-text {
  text-align: center;
  width: 100%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.span-jer {
  color: rgba(0, 89, 255, 0.699);
  font-size: 6rem;
}
.title-text h6 {
  font-size: 4.5rem;
  margin-bottom: 3rem;
}
.span-tex {
  font-size: 8.5rem;
  display: inline-block;
}
}
@media screen and (max-width: 599px){
  .title-text {
  text-align: center;
  width: 100%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.span-jer {
  color: rgba(0, 89, 255, 0.699);
  font-size: 3.5rem;
}
.title-text h6 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.span-tex {
  font-size: 4.5rem;
}
}
</style>
