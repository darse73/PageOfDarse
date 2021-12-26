<template>
  <div class="contents">
    <div class="title">
      <img class="s-jerryfish" id="upjerry" src="images/jerryfish.png" />
      <h2>電卓を作ってみました！</h2>
    </div>

    <div class="main">
      <p>こんにちは！ダースです。使った言語はHTML,css,JavaScriptです。</p>
      <p>初めてのjsは作動したらうれしいけど、作動するまでが長い！</p>
      <p>学ぶべきことは多いんだなと実感することができたました。</p>
      <p>
        正直仕組みをよくわかっていないところもあるので、そこは分かり次第MEMORUNDOMの方に載せていこうと思います！
      </p>

      <a href="https://darse73.github.io/calculator/"
        ><img src="../../assets/calcurator.png"
      /></a>
      <p id="go-the-work">画像を押すと実際の作品ページに行きます</p>

      <h3>HTML</h3>
      <p>
        ＜!DOCTYPE html＞<br />
        ＜html lang="ja"＞<br /><br />
        ＜head＞<br />
        ＜meta charset="UTF-8" /＞<br />
        ＜meta http-equiv="X-UA-Compatible" content="IE=edge" /＞<br />
        ＜meta name="viewport" content="width=device-width, initial-scale=1.0"
        /＞<br />
        ＜link rel="stylesheet" href="style.css"＞<br />
        ＜title＞Document＜/title＞<br />
        ＜/head＞<br /><br /><br />
        ＜body＞<br /><br />
        ＜div id="flame"＞<br />
        ＜div id="disp"＞<br />
        ＜input type="text" id="t-disp" value="0" /＞<br />
        ＜input type="text" id="b-disp" value="0"/＞<br />
        ＜/div＞<br />
        <br />
        ＜div id="btn"＞<br />
        ＜input type="button" value="7" onclick="dis(this)" /＞<br />
        ＜input type="button" value="8" onclick="dis(this)" /＞<br />
        ＜input type="button" value="9" onclick="dis(this)" /＞<br />
        ＜input type="button" value="DEL" onclick="del()" /＞<br />
        ＜input type="button" value="AC" onclick="ac()" /＞<br />
        <br />
        ＜input type="button" value="4" onclick="dis(this)" /＞<br />
        ＜input type="button" value="5" onclick="dis(this)" /＞<br />
        ＜input type="button" value="6" onclick="dis(this)" /＞<br />
        ＜input type="button" value="×" onclick="dis(this)" /＞<br />
        ＜input type="button" value="÷" onclick="dis(this)" /＞<br />
        <br />
        ＜input type="button" value="1" onclick="dis(this)" /＞<br />
        ＜input type="button" value="2" onclick="dis(this)" /＞<br />
        ＜input type="button" value="3" onclick="dis(this)" /＞<br />
        ＜input type="button" value="+" onclick="dis(this)" /＞<br />
        ＜input type="button" value="-" onclick="dis(this)" /＞<br />
        <br />
        ＜input type="button" value="0" onclick="dis(this)" /＞<br />
        ＜input type="button" value="." onclick="dis(this)" /＞<br />
        ＜input type="button" value="(" onclick="dis(this)" /＞<br />
        ＜input type="button" value=")" onclick="dis(this)" /＞<br />
        ＜input type="button" value="=" onclick="calc()" /＞<br />
        ＜/div＞<br /><br />
        ＜/div＞<br />
        ＜script src="main.js"＞ ＜/script＞<br />
        <br />
        ＜/body＞<br />
        ＜/html＞
      </p>

      <h3><br />CSS</h3>
      <p>
        body {<br />
        background-color: rgb(239, 232, 255);<br />
        }<br />
        <br />
        #flame {<br />
        border:solid;<br />
        margin:0px 205px;<br />
        background-color: rgba(122, 144, 240, 0.514);<br />
        }<br />
        <br />
        #disp {<br />
        border: 2px solid;<br />
        height: 212px;<br />
        width: 800px;<br />
        margin: 30px 150px 0px ;<br />
        background-color: rgb(148, 141, 243);<br />
        }<br />
        <br />
        #t-disp{<br />
        height: 80px;<br />
        width:750px;<br />
        margin:10px 20px;<br />
        background-color: rgb(165, 218, 248);<br />
        font-size: 60px;<br />
        }<br />
        <br />
        #b-disp{<br />
        height: 80px;<br />
        width: 750px;<br />
        margin: 10px 20px;<br />
        background-color:rgb(165, 218, 248);<br />
        font-size: 60px;<br />
        }<br />
        <br />
        #btn{<br />
        display: grid;<br />
        grid-template-columns: repeat(5,157px);<br />
        grid-auto-rows: 100px;<br />
        column-gap: 5px;<br />
        justify-content: center;<br />
        align-content: center;<br />
        margin:25px;<br />
        }<br />
        <br />
        input[type="button"] {<br />
        font-size:50px;<br />
        }
      </p>

      <h3><br />JavaScript</h3>
      <p>
        var tDisp = document.getElementById("t-disp")<br />
        var bDisp = document.getElementById("b-disp")<br />
        <br />
        function dis(n) {<br />
        if (tDisp.value == 0) {<br />
        tDisp.value = "" + n.value<br />
        } else {<br />
        tDisp.value = tDisp.value + n.value<br />
        }<br />
        }<br />
        <br />
        function calc() {<br />
        if (tDisp.value.indexOf("÷") != -1) {<br />
        tDisp.value = tDisp.value.replace("÷", "/")<br />
        }<br />
        if (tDisp.value.indexOf("×") != -1) {<br />
        tDisp.value = tDisp.value.replace("×", "*")<br />
        }<br />
        bDisp.value = new Function("return " + tDisp.value)()<br />
        if (tDisp.value.indexOf("*") != -1) {<br />
        tDisp.value = tDisp.value.replace("*", "×")<br />
        }<br />
        if (tDisp.value.indexOf("/", "÷") != -1) {<br />
        tDisp.value = tDisp.value.replace("/", "÷")<br />
        }<br />
        }<br />
        <br />
        function del() {<br />
        tDisp.value = tDisp.value.slice(0, -1)<br />
        }<br />
        <br />
        function ac() {<br />
        tDisp.value = 0<br />
        bDisp.value = 0<br />
        }
      </p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: rgba(11, 166, 255, 0.356);
  margin: 0;
}

.header {
  height: 5rem;
  width: 100%;
  background-color: rgb(200, 229, 255);
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  border-bottom: 0.5rem solid rgba(0, 0, 255, 0.5);
  opacity: 0.95;
}

.header-logo {
  flex-grow: 1;
  display: flex;
}

.jerryfish {
  margin-left: 1rem;
  height: 5rem;
}

#Darse {
  color: black;
  vertical-align: middle;
  font-size: 2rem;
  margin-left: 0.5rem;
  font-family: "arial black";
}

.header ul {
  margin-right: 7rem;
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
}

li {
  list-style: none;
}

.header li {
  margin: 1rem 0rem 0rem 10rem;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
  color: black;
}

.button {
  position: relative;
}

.button:hover {
  transition: all 0.3s ease 0s;
  transform: scale(1.2);
}

.button::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  background-color: rgb(0, 140, 255);
  transform: scale(0, 1);
  transform-origin: left;
  transition: 0.2s;
}

.button:hover::before {
  transform: scale(1);
}

.contents {
  padding-top: 5rem;
  width: 80rem;
  margin: 0 auto;
  background-color: rgb(243, 243, 253);
  text-align: center;
  display: flex;
}

#upjerry {
  margin: 0.8rem 1rem 1rem 1rem;
  float: left;
}

.s-jerryfish {
  width: 3rem;
}

.explanation {
  background-color: rgba(224, 250, 255, 0.466);
  width: 70%;
  text-align: left;
  margin-top: 4rem;
}

.main {
  margin: 5rem 5rem 0 5rem;
}

.main img {
  width: 100%;
  margin: 3rem 0 0 0;
}

#go-the-work {
  margin-bottom: 3rem;
}

.greeting {
  background-color: rgba(224, 250, 255, 0.466);
  width: 30%;
}

#plofile-image {
  height: 12rem;
  width: 50%;
  margin: 2rem auto;
  background-color: rgb(196, 226, 255);
}

#jerryfish_facial {
  height: 100%;
  width: 10rem;
}

.greeting ul {
  width: 98%;
  padding: 1rem 0;
  border: 0.1rem solid hsl(194, 89%, 81%);
}

.greeting li {
  margin: 0.5rem;
}

#first {
  height: 1rem;
  background-color: rgba(231, 67, 38, 0.521);
}

#second {
  height: 3rem;
  background-color: rgba(214, 64, 38, 0.589);
}

#third {
  height: 10rem;
  background-color: rgba(206, 53, 26, 0.61);
}
</style>
