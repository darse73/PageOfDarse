<template>
  <div class="about">
      <Title><template v-slot:front>ABOUT</template></Title>
    <div class="paragraph">
      <div class="s-title">
        <img class="s-title-img" src="../assets/jerryfish.png" />
        <h3 class="s-title-txt">このサイトの目的</h3>
      </div>
      <p>技術を高めるのが一番の目的です。</p>
      <p>
        一番最初にプロゲートをして、そのあと自己紹介ページや電卓を作りました。
      </p>
      <p>そのあと何しようか考えた結果、</p>
      <p>「自分のわからなかったところを残せる」</p>
      <p>「文章にすることで理解を深められる」</p>
      <p>「色々な技術を試しながらサイト作りの経験ができる」</p>
      <p>「楽しめる」</p>
      <p>等の理由から、このような備忘録サイトを作りました。</p>
      <p>
        今のところの機能としては、自分だけが投稿するという形で作っています。
      </p>
      <p>また、このサイトは主にvueを使っており、firebaseに保存をしています。</p>
      <p>
        コードが見たい方は、私の<a href="https://github.com/darse73/PageOfDarse"
          >githubアカウント</a
        >から閲覧ください。
      </p>
    </div>
    <div class="paragraph">
      <div class="s-title">
        <img class="s-title-img" src="../assets/jerryfish.png" />
        <h3 class="s-title-txt">主について</h3>
      </div>
      <p>現在大学3年生で就活中。</p>
      <p>3年の7月、将来について考えたときに、何もしたいことがなかったのでとりあえずいろいろな業界を見てみようと決心。</p>
      <p>一番最初にIT業界について調べてみたが、実際にすることが分からず情報系の友達からC言語の参考書を借りてプログラミングをしてみる。</p>
      <p>そこでプログラミングの面白さを知ったが、8月前に友達がテスト前であることから参考書を返すことに。</p>
      <p>それから何をしようか迷った結果、初心者が触れやすいと書かれていたHTML、CSSで自己紹介サイトを作ってみる。</p>
      <p>すると、面白いと思っていたC言語よりもさらに面白いと衝撃を受け、技術の向上を目指して独学を始める。</p>
      <p>一番最初にProgateで勉強をし、チーム開発に興味を持ち始める。</p>
      <p>LINEのオープンチャットで少人数制のチーム開発グループに参加したが、やはり実力も顔も分からないことから上手く進まず消滅。</p>
      <p>どうしたもんかと思っていると、友達の紹介でGeekSalonという大学生限定のコミュニティで3か月のチーム開発コースがあることを知る。</p>
      <p>10月から受講を始め現在に至る。（2021/1/2）</p>
      <p>このサイトはもともと独学中にHTMLとCSSだけで作っていたが、GeekSalonでvue、firebaseを学んだのでそれらを使い改良中。</p>
      <p>前のサイトを訪れたい方は<a href="https://darse73.github.io/PageOfDarse-before/TOP/index.html">こちら</a></p>
      <p>前のサイトのコードが見たい方は<a href="https://github.com/darse73/PageOfDarse-before">こちら</a></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.8rem;
}
.paragraph {
  padding: 3rem 2rem;
}
.s-title {
  display: flex;
  height: 3.5rem;
  margin-bottom: 3rem;
}
.s-title-img {
  width: 3.5rem;
}
.s-title-txt {
  line-height: 3.5rem;
}
p {
  font-size: 1.5rem;
  line-height: 3.3rem;
}
@media screen and (max-width: 599px){
  p {
    display: inline;
  }
}
</style>

<script>
import Title from "@/components/Title.vue"
export default {
  components: {
    Title
  }
}
</script>
