<template>
  <div class="header">
    <router-link to="/" class="router-link"
      ><div class="header-logo">
        <img class="logo-img" src="@/assets/jerryfish.png" />
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
    <div class="menu">
      <img
        src="@/assets/menu_icon.png"
        alt=""
        class="menu-icon"
        @click="menuIcon"
      />
      <transition name="menu">
        <ul v-show="menuList" class="menu-list">
          
            <router-link class="router-link" to="/works"><li class="button" @click="menuClose">WORKS</li></router-link>
          
            <router-link class="router-link" to="/memorandum"
              >
          <li class="button" @click="menuClose">MEMORANDUM
          </li></router-link
            >
            <router-link class="router-link" to="/tweet">
          <li class="button" @click="menuClose">TWEET</li></router-link>
          
          
            <router-link class="router-link" to="/upload"><li class="button" @click="menuClose">UPLOAD          </li></router-link>

            <router-link class="router-link" to="/about">
          <li class="button" @click="menuClose">ABOUT</li></router-link>
          
        </ul>
      </transition>
      <transition name="curten">
        <div class="curten" v-show="menuList" @click="menuClose">
      <Curten/></div>
      </transition>
    </div>
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
  z-index: 4;
  border-bottom: 1rem solid rgb(95, 95, 255);
  opacity: 0.99;
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
@media screen and (min-width: 1025px) {
  .button-container {
    display: flex;
  }
  .button {
    position: relative;
    line-height: 8rem;
    margin-right: 5rem;
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
  .menu {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .button-container {
    display: none;
  }
  .menu-icon {
    margin: 1.5rem 2rem;
    height: 5rem;
    width: 5rem;
  }
  .menu-icon:hover {
    height: 5.5rem;
    width: 5.5rem;
    margin: 1.25rem 1.75rem;
  }
  .menu-list {
    position: absolute;
    background-color: rgb(210, 234, 255);
    top: 9rem;
    right: 0;
    height: 100vh;
    width: 25rem;
    border-left: rgb(0, 140, 255) dotted 0.2rem;
    border-right: rgb(0, 140, 255) dotted 0.2rem;
    z-index: 2;
  }
  .menu-leave-active,
  .menu-enter-active {
    transition: all 1s;
  }
  .menu-enter,
  .menu-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  .menu-enter-to,
  .menu-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .button {
    font-size: 2.5rem;
    padding: 1rem 2rem;
    border-bottom: rgb(0, 140, 255) dotted 0.1rem;
  }
  .button:hover {
    font-size: 2.7rem;
    padding: 0.85rem 2rem;
  }
  .curten-leave-active,
  .curten-enter-active {
    transition: all 1s;
  }
  .curten-enter,
  .curten-leave-to {
    opacity: 0;
  }
  .curten-enter-to,
  .curten-leave {
    opacity: 1;
  }
}
</style>

<script>
import Curten from "@/components/Curten.vue"

export default {
  components: {
    Curten
  },
  data() {
    return {
      menuList: false,
    }
  },
  methods: {
    menuIcon() {
      this.menuList = !this.menuList
    },
    menuClose() {
      this.menuList = false
    },
}}
</script>
