<template>
  <transition name="cutIn">
    <div v-show="show" class="cut-in">
        <div class="title">{{ title }}</div>
    </div></transition>
</template>

<style scoped>
.cutIn-leave-active,
.cutIn-enter-active {
    transition: opacity 1s
}
.cutIn-enter,
.cutIn-leave-to {
    opacity: 0;
}
.cutIn-enter-to,
.cutIn-leave {
    opacity: 1;
}
.cut-in {
    position: fixed;
    top: 9rem;
    left: 0;
    background-color: rgba(147, 230, 255, 0.911);
    width: 100%;
    height: 100vh;
    z-index: 5;
}
@media screen and (min-width: 1024px){
.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 10rem;
    color: rgb(53, 99, 252);
}
}
@media screen and (max-width: 1024px){
.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 8rem;
    color: rgb(53, 99, 252);
}
}
@media screen and (max-width: 599px){
.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 4.7rem;
    color: rgb(53, 99, 252);
}
}
</style>

<script>
export default {
    data() {
        return {
            show:false
            }
    },
    created() {
        this.show = true
        setTimeout(() => {
            this.show = false
        },1000)
    },
    methods: {
    shift() {
        this.show = true
        setTimeout(() => {
            this.show = false
        },1000)
    }
  },
  watch: {
    $route () {
      this.shift()
    }
  },
    computed: {
        title() {
            return this.$store.state.title
        }
    }
}
</script>



