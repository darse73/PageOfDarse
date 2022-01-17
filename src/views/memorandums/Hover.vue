<template>
  <Contents>
    <template v-slot:title-text>hoverの使い方</template>
    <template v-slot:date>2021/10/1</template>
    <template v-slot:main>
      <p>こんにちは！ダースです。</p>
      <p>今回はhoverについてです。</p>
      <p>hoverはこのサイトにも使われています。</p>
      <video src="../../assets/hover.mp4" loop autoplay muted></video>
      <p>
        ヘッダー部では、hover時に文字が大きくなり、下に線が引かれるようにしています。<br />
        これを今から解説します。
      </p>
      <p>まず、buttonを作ります。</p>
      <p class="code">
        HTML<br />
        ＜div class="button"＞＜a href=""＞WORKS＜/a＞＜/div＞<br /><br />
        CSS<br />
        <br />
      </p>
      <p>
        ＜a href=""＞＜/a＞ のおかげで、WORKSをクリックしたときに、 ""
        で指定したページに飛んでいくことができます。<br />
        カーソルが勝手に指マークになるのもこれのおかげです。
      </p>

      <div class="button-ex"><a href="">WORKS</a></div>
      <p>次に、hover時に下線を伸ばすための下準備をしていきます。</p>
      <p>
        この仕組みとしては、まずWORKSの下に線が伸びるためのレールを引きます。<br />
        そしてhover時に線をレールに沿って伸びるように指示してあげるという感じです。<br />
        下準備はレールを作ることを指しています。
      </p>
      <p class="code">
        HTML<br />
        ＜div class="button"＞＜a href=""＞WORKS＜/a＞＜/div＞<br /><br />
        CSS<br />
        .button {<br />
        position:relative;<br />
        }<br />
        <br />
        .button::before {<br />
        content: "";<br />
        position: absolute;<br />
        bottom: 0;<br />
        width: 100%;<br />
        height: 0.2rem;<br />
        background-color: rgb(0, 140, 255);<br />
        transform: scale(0,1);<br />
        transform-origin: left;<br />
        transition: 0.2s;<br />
        } <br />
        <br />
      </p>
      <p>
        .button::before の ::before とは、<a
          class="link"
          href="https://developer.mozilla.org/ja/docs/Web/CSS/::before"
          >ここに</a
        >わかりやすく書かれていますが、<br />
        要は、指定したセレクタ（今回の場合は button
        ）の前に、擬似要素というものを作るためのものです。（擬似要素という名前は難しそうで抵抗があったけど実際そこまで難しくないのかも。）<br />
        これをWORKSの下に持ってきてレールにします。
      </p>
      <p>
        content:"";というのは、内容はないということです。内容がないならそもそも
        content: "";
        はいらないんじゃないかと思ったのですが、なくしてしまうと、最終的に下線が出てきませんでした。<br />
        よって、::before を使うとき content: "";
        は絶対に必要であるという解釈でいます。
      </p>
      <p>
        position: absolute; とは、position: relative; である .button
        を基準として位置を指定するということです。<br />
        今回は、 bottom: 0; で指定しています。<br />
        意味は、.button の範囲の下から 0px の位置です。<br />
        図に示します。
      </p>
      <div class="position-ex">
        position-ex
        <ul>
          ul
          <li id="relative1"><a href="">relative1</a></li>
          <li id="relative2"><a href="">relative2</a></li>
          <li id="relative3"><a href="">relative3</a></li>
        </ul>
      </div>
      <p class="code">
        HTML<br />
        <br />
        ＜div class="position-ex"＞<br />
        ＜ul＞<br />
        ＜li id="relative1"＞＜a href=""＞relative1＜/a＞＜/li＞<br />
        ＜li id="relative2"＞＜a href=""＞relative2＜/a＞＜/li＞<br />
        ＜li id="relative3"＞＜a href=""＞relative3＜/a＞＜/li＞<br />
        ＜/ul＞<br />
        ＜/div＞<br />
        <br />
        CSS<br />
        <br />
        .position-ex {<br />
        background-color: white;<br />
        padding: 3rem;<br />
        }<br />
        <br />
        .position-ex ul {<br />
        display: flex;<br />
        justify-content: space-between;<br />
        background-color: rgb(118, 245, 118);<br />
        }<br />
        <br />
        #relative1 {<br />
        background-color: red;<br />
        height: 5rem;<br />
        width: 30%;<br />
        position: relative;<br />
        }<br />
        <br />
        #relative1::before {<br />
        content: "absolute1";<br />
        background-color: yellow;<br />
        position: absolute;<br />
        width: 100%;<br />
        bottom: 0;<br />
        }<br />
        <br />
        #relative2 {<br />
        background-color: red;<br />
        height: 5rem;<br />
        width: 30%;<br />
        position: relative;<br />
        }<br />
        <br />
        #relative2::before {<br />
        content: "absolute2";<br />
        background-color: yellow;<br />
        position: absolute;<br />
        height: 2rem;<br />
        width: 50%;<br />
        right: 0;<br />
        }<br />
        <br />
        #relative3 {<br />
        background-color: red;<br />
        width: 30%;<br />
        height: 5rem;<br />
        position: relative;<br />
        }<br />
        <br />
        #relative3::before {<br />
        content: "absolute3";<br />
        background-color: yellow;<br />
        position: absolute;<br />
        right: 0;<br />
        top: 1rem;<br />
        left: 0;<br />
        }<br />
        <br />
      </p>
      <p>
        今回使ったパターンは relative1 absolute1
        で、他の二つはその他の例として載せています。
      </p>
      <p>
        position:absolute と、 bottom: 0;
        の説明が多くなりましたが、続きから説明していきます。
      </p>
      <p>
        width: 100%; と、height: 0.2rem;
        で、細さ0.2remで長さ100％の線を作っています。
      </p>
      <p>
        transform:
        scale(0,1);とは、簡単に言うと「今はこの状態でいてね」ということです。<br />
        詳しく見てみます。(0,1)
        は、x方向の大きさを0（もともとの大きさの0倍）、y方向の大きさを1（もともとの大きさの1倍）ということを表しています。<br />
        つまり、元々大きさは height: 0.2rem; width: 100%; （左の状態は
        scale(1,1) の状態である）で決まっているけど、今は scale(0,1)
        の状態でいてねということです。
      </p>
      <div class="scale-ex">
        <ul>
          <li id="scale-ex1">scale(1,1)</li>
          <li id="scale-ex2">scale(0.5,1.5)</li>
          <li id="scale-ex3">scale(1.5,0.5)</li>
        </ul>
      </div>
      <div class="code">
        HTML<br />
        ＜div class="scale-ex"＞<br />
        ＜ul＞<br />
        ＜li id="scale-ex1"＞scale(1,1)＜/li＞<br />
        ＜li id="scale-ex2"＞scale(0.5,1.5)＜/li＞<br />
        ＜li id="scale-ex3"＞scale(1.5,0.5)＜/li＞<br />
        ＜/ul＞<br />
        ＜/div＞<br />
        <br />
        CSS<br />
        .scale-ex {<br />
        background-color: white;<br />
        height: 12rem;<br />
        margin-bottom: 1rem;<br />
        }<br />
        <br />
        .scale-ex ul{<br />
        display: flex;<br />
        }<br />
        <br />
        .scale-ex li{<br />
        height: 5rem;<br />
        width: 5rem;<br />
        margin: 3rem 2rem;<br />
        }<br />
        <br />
        #scale-ex1 {<br />
        background-color: turquoise;<br />
        transform: scale(1,1);<br />
        }<br />
        <br />
        #scale-ex2 {<br />
        background-color: turquoise;<br />
        transform: scale(0.5,1.5);<br />
        }<br />
        <br />
        #scale-ex3 {<br />
        background-color: turquoise;<br />
        transform: scale(1.5,0.5);<br />
        }<br />
      </div>
      <p>
        transform-origin:left は、左側から動きを始めることを表しています。<br />
        もし transform-origin: right; ならば、右側から動きが始まります。
      </p>
      <p>
        transition: 0.2s; は、動きが終わる秒数を表しており、もし transition: 1s;
        ならば、1sで動きが終わります。
      </p>
      <p>
        これで下準備のレール敷きは終わったので、次はhover時に動きを行うように命令する指令を作っていきます。
      </p>
      <p class="code">
        HTML<br />
        ＜div class="button"＞＜a href=""＞WORKS＜/a＞＜/div＞<br /><br />
        CSS<br />
        .button {<br />
        position:relative;<br />
        }<br />
        <br />
        .button::before {<br />
        content: "";<br />
        position: absolute;<br />
        bottom: 0;<br />
        width: 100%;<br />
        height: 0.2rem;<br />
        background-color: rgb(0, 140, 255);<br />
        transform: scale(0,1);<br />
        transform-origin: left;<br />
        transition: 0.2s;<br />
        } <br /><br />
        .button:hover::before {<br />
        transform: scale(1);<br />
        }<br />
        <br />
      </p>
      <p>hover時に動きを行う命令は、button:hover::before のこれだけです。</p>
      <p>ここで出てきた :hover というのは、hover時ということです。</p>
      <p>
        .button:hover::before ではなく、.button::before:hover
        という書き方でもいいのではないかと試してみたのですが、機能しなかったので、順番は変えないようにしてください。
      </p>
      <p>
        transform: scale(1); とは、transform: scale(1,1)
        と同じ意味で、x方向の大きさを1倍、y方向の大きさを1倍にするという意味です。
      </p>
      <p>
        まとめると、.button::before をhover時に scale(1) にするということです。
      </p>
      <div class="button-ex">
        <div class="button-ex2"><a href="">WORKS</a></div>
      </div>
      <p>こうなりました。</p>
      <p>ちなみに、hover時に文字が大きくなるようなコードも書いておきます。</p>
      <div class="code">
        HTML<br />
        ＜div class="button"＞＜a href=""＞WORKS＜/a＞＜/div＞<br /><br />
        CSS<br />
        .button {<br />
        display: inline-brock;<br />
        }<br /><br />
        .button:hover {<br />
        transition:all .3s ease 0s;<br />
        transform: scale(1.2);<br />
        }
      </div>
      <div class="scale-EX">
        <div class="scale-EX2"><a href="">WORKS</a></div>
      </div>

      <p>こんな感じです。</p>
      <p>
        display: inline-brock;
        を指定しなかったらWORKSがずれながら大きくなる可能性があります。
      </p>
      <p>
        その理由は、div のデフォルトが display:block; となっており、brock
        要素は横いっぱいに広がります。<br />
        対して inline-brock
        要素は内容量に合わせて大きさが調整されるので、ずれることが無くなるというわけです。
      </p></template
    >
  </Contents>
</template>

<style scoped>
video {
  width: 100%;
  margin: 3rem 0;
}

.code {
  background-color: white;
  display: inline-block;
  margin: 2rem 0;
}

.button-ex {
  width: 100%;
  height: 10rem;
  background-color: white;
  text-align: center;
  position: relative;
}

.button-ex a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.link {
  color: blue;
  border-bottom: 0.1rem solid;
}

.position-ex {
  background-color: white;
  padding: 3rem;
}

.position-ex ul {
  display: flex;
  justify-content: space-between;
  background-color: rgb(118, 245, 118);
}

#relative1 {
  background-color: red;
  height: 5rem;
  width: 30%;
  position: relative;
}

#relative1::before {
  content: "absolute1";
  background-color: yellow;
  position: absolute;
  width: 100%;
  bottom: 0;
}

#relative2 {
  background-color: red;
  height: 5rem;
  width: 30%;
  position: relative;
}

#relative2::before {
  content: "absolute2";
  background-color: yellow;
  position: absolute;
  height: 2rem;
  width: 50%;
  right: 0;
}

#relative3 {
  background-color: red;
  width: 30%;
  height: 5rem;
  position: relative;
}

#relative3::before {
  content: "absolute3";
  background-color: yellow;
  position: absolute;
  right: 0;
  top: 1rem;
  left: 0;
}

.scale-ex {
  background-color: white;
  height: 12rem;
  margin-bottom: 1rem;
}

.scale-ex ul {
  display: flex;
}

.scale-ex li {
  height: 5rem;
  width: 5rem;
  margin: 3rem 2rem;
}

#scale-ex1 {
  background-color: turquoise;
  transform: scale(1, 1);
}

#scale-ex2 {
  background-color: turquoise;
  transform: scale(0.5, 1.5);
}

#scale-ex3 {
  background-color: turquoise;
  transform: scale(1.5, 0.5);
}

.button-ex2 a::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  background-color: rgb(0, 140, 255);
  transform: scale(0, 1);
  transform-origin: left;
  transition: 0.2s;
}

.button-ex2 :hover::before {
  transform: scale(1);
}

.scale-EX {
  background-color: white;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  margin-top: 1rem;
}

.scale-EX2 {
  display: inline-block;
  vertical-align: middle;
}

.scale-EX2:hover {
  transition: all 0.3s ease 0s;
  transform: scale(1.2);
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
