<template>
  <div class="header">
    <router-link to="/" class="router-link"
      ><div class="header-logo">
        <img class="logo-img" src="../assets/jerryfish.png" />
        <h1 class="logo-text">Darse</h1>
      </div></router-link
    >
    <ul class="button-container">
      <li class="button">
        <router-link class="router-link" to="/works">WORKS</router-link>
      </li>
      <li class="button">
        <router-link class="router-link" to="/memorandum"
          >MEMORANDUM</router-link
        >
      </li>
      <li class="button">
        <router-link class="router-link" to="/tweet">TWEET</router-link>
      </li>
      <li class="button">
        <router-link class="router-link" to="/upload">UPLOAD</router-link>
      </li>
      <li class="button">
        <router-link class="router-link" to="/about">ABOUT</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  height: 8rem;
  width: 100%;
  background-color: rgb(200, 229, 255);
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  border-bottom: 1rem solid rgb(95, 95, 255);
  opacity: 0.95;
}
.header-logo {
  display: flex;
}
.logo-img {
  margin-left: 1rem;
  height: 8rem;
}
.logo-text {
  line-height: 8rem;
  color: rgb(34, 34, 34);
  font-size: 3.5rem;
  margin-left: 0.5rem;
  font-family: "arial black";
}
.button-container {
  display: flex;
}
.button {
  position: relative;
  line-height: 8rem;
  margin-right: 8rem;
  font-size: 3rem;
}
.button::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2rem;
  width: 100%;
  height: 0.3rem;
  background-color: rgb(0, 140, 255);
  transform: scale(0);
  transform-origin: left;
  transition: 0.2s;
}
.button:hover {
  transition: all 0.3s ease 0s;
  transform: scale(1.2);
}
.button:hover::before {
  transform: scale(1);
}
</style>
