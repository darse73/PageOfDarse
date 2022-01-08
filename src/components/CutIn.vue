<template>
    <div class="cut-in">
        <div class="title">{{ title }}</div>
    </div>
</template>

<style scoped>
.cut-in {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(147, 230, 255, 0.911);
    width: 100%;
    height: 100vh;
}
.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 10rem;
    color: rgb(53, 99, 252);
}
</style>

<script>
export default {
    computed: {
        title() {
            return this.$store.state.title
        }
    }
}
</script>



