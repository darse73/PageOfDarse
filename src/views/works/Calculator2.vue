<template>
  <Contents>
    <template v-slot:title-text> 電卓を作ってみました！</template>
    <template v-slot:main>
      <p>こんにちは！ダースだよ～</p>
      <p>使った言語はHTML,css,JavaScript！</p>
      <p>初めてのjsは作動したらうれしいけど、作動するまでが長い！</p>
      <p>前回作った電卓から改良をしてもう少しきれいに、性能もよくしたよ！</p>
      <img src="@/assets/calculator2.png" alt=""/>
      <!-- <p>それと今回はコードを見やすく載せてみる🔥</p> -->

      <!-- <img src="../../assets/calculator2.png" />
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html"
          data-slug-hash="ZEyZvqM"
          data-user="darse73"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/darse73/pen/ZEyZvqM"> </a> by darse73
            (<a href="https://codepen.io/darse73">@darse73</a>) on
            <a href="https://codepen.io">CodePen</a>.</span
          >
        </p> -->
      <!-- <p>result を見る場合は×0.25にしてみてね！</p> -->
      <div>
        デカいのみたい場合は<a
          class="to-caliculate2"
          href="https://darse73.github.io/calculator2/index.html"
          >ここ</a
        >をクリックしてね！
      </div>
    </template>
  </Contents>
</template>

<style scoped>
img {
  width: 100%;
}
</style>

<script>
import Contents from "@/components/Contents.vue"

export default {
  components: {
    Contents,
  },
}
</script>
