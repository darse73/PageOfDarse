<template>
    <Contents>
        <template v-slot:title-text>PowerShellでmvを使おうとした時に、<br>
            <span>パス ～ へのアクセスが拒否されました。</span>というエラーが出た。</template>
        <template v-slot:main>
            <p>こんにちは！ダースです。</p>
            <p>vscodeで新しくディレクトリを作るときに間違えて本来作りたい場所とは別の場所に作ってしまうことはあるあるですよね笑</p>
            <p>今回、僕もそのあるある？をしてしまったので、今間違って作ったやつを消して、改めて正しいところにディレクトリを作ろうとしました。</p>
            <p>しかし僕はそこでPowerShellに慣れるために、間違った場所に作ってしまったディレクトリを本来作りたかった場所に移してみようと思いました。</p>
            <div class="purpose">
            <p>目的</p>
            <p>codeというディレクトリを間違ってWORKSというディレクトリの中に作ってしまったので、</p>
            <p>codeのディレクトリを本来作りたかった場所のPageOfDarseというディレクトリに移す。</p>
            </div>
            <p>まず、分かりやすく説明するために、僕のエクスプローラー内の簡略図をお見せしたいと思います。</p>
            <p>...という風に書きましたが、cssでのフローチャート図の作り方を調べたところ、まだ今の僕には難しくて理解できなかったので、PowerPointで作成したものをスクショして載せます💦</p>
            <img src="../../assets/flowchart.png">
            <p>A・B・C・D・E・F・G・H・I はその他もろもろのディレクトリやファイルを簡略化して表したものです。</p>
            <p>では、実際にcodeというディレクトリをPowerShellを使って、WORKSからPageOfDarseに移していきましょう。</p>
            <img src="../../assets/mv_before.png">
            <p>最初にカレントディレクトリをWORKSに移し、lsコマンドを使ってWORKSディレクトリの中にあるディレクトリやフォルダを確認します。<br>
              (この作業をするよりも、ls \Users\○○\PageOfDarse\WORKS の方が効率的だったのかも)</p>
            <p>codeディレクトリがWORKSディレクトリ内にあることが確認できたので、mvコードを使ってcodeをPageOfDarseに移します。</p>
            <p>（ちなみに、PowerShellだと移動させるためのコードはよくMove-Itemだと書いてあるけど、mvでも正常に動くみたいですね。）</p>
            <p>あれ、"パス ～ へのアクセスが拒否されました。"ってエラー出た。なんでかいな。調べてみよう。</p>
            <p>すると、<a href="https://teratail.com/questions/135065">https://teratail.com/questions/135065</a> に、「該当フォルダ内のファイルやサブフォルダを別のプロセスが開いている。

              場合が結構あり、今回の様なエラーメッセージになることがあります。」と書いてありました。</p>
            <p>なるほど～と思い確認してみると、画面下タスクバーのvscodeでcodeディレクトリ内にあるファイルを開いていました。</p>
            <p>なので、vscode自体を×を押して消して、もう一度やりなおしてみると...</p>
            <img src="../../assets/mv_after.png">
            <p>成功していますね！</p>
            <p>ということで今回は以上で終わります。</p>
            <p><br><br>あくまでこのサイトはプログラミング初心者のクラゲのダースが、プログラミング上達のために備忘録として書いているものです。</p>
            <p>よって、間違っている情報がたくさんあったり、効率の悪いやり方をたくさんしている可能性は十分にあるので、うのみにせず、フーンという感覚で見ていただけるとうれしいです。</p></template>
    </Contents>
</template>

<style scoped>
span{
    color: red;
    font-size: 2.5rem;
}
.purpose {
    border: 0.2rem solid rgb(107, 107, 255);
    padding-left: 1rem;
    margin: 4rem 0 4rem 0;
    border-radius: 5%;
    font-size: 2.5rem;
}
.purpose::first-line {
    font-size: 1.5rem;
}
img {
    width: 100%;
    margin: 2rem 0;
}
</style>

<script>
import Contents from "@/components/Contents.vue"

export default {
    components: {
        Contents
    }
}
</script>
