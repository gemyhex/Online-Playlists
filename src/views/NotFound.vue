<template>
  <div id="wrap">
    <div id="wordsearch">
      <ul>
        <li>k</li>

        <li>v</li>

        <li>n</li>

        <li>z</li>

        <li>i</li>

        <li>x</li>

        <li>m</li>

        <li>e</li>

        <li>t</li>

        <li>a</li>

        <li>x</li>

        <li>l</li>

        <li class="one selected">4</li>

        <li class="two selected">0</li>

        <li class="three selected">4</li>

        <li>y</li>

        <li>y</li>

        <li>w</li>

        <li>v</li>

        <li>b</li>

        <li>o</li>

        <li>q</li>

        <li>d</li>

        <li>y</li>

        <li>p</li>

        <li>a</li>

        <li class="four selected">p</li>

        <li class="five selected">a</li>

        <li class="six selected">g</li>

        <li class="seven selected">e</li>

        <li>v</li>

        <li>j</li>

        <li>a</li>

        <li>s</li>

        <li>u</li>

        <li>l</li>

        <li>a</li>

        <li>q</li>

        <li>s</li>

        <li>u</li>

        <li>l</li>

        <li class="eight selected">n</li>

        <li class="nine selected">o</li>

        <li class="ten selected">t</li>

        <li>s</li>

        <li>c</li>

        <li>e</li>

        <li>w</li>

        <li>v</li>

        <li>x</li>

        <li>e</li>

        <li>p</li>

        <li>c</li>

        <li>f</li>

        <li>h</li>

        <li>q</li>

        <li>e</li>

        <li class="eleven selected">f</li>

        <li class="twelve selected">o</li>

        <li class="thirteen selected">u</li>

        <li class="fourteen selected">n</li>

        <li class="fifteen selected">d</li>

        <li>s</li>

        <li>w</li>

        <li>q</li>

        <li>v</li>

        <li>o</li>

        <li>s</li>

        <li>m</li>

        <li>v</li>

        <li>f</li>

        <li>u</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
}

#wrap {
  width: 60%;
  max-width: 1400px;
  margin: 0 auto;
  height: auto;
  position: relative;
  margin-top: 8%;
  background: #335b67;
}

#wordsearch {
  width: 70%;
  margin: 0 auto;
}

#wordsearch ul {
  margin: 0px;
  padding: 0px;
}

#wordsearch ul li {
  float: left;
  width: 12%;
  height: 60px;
  background: linear-gradient(to bottom, #13c8ce, #23585a);
  list-style: none;
  margin-right: 0.5%;
  margin-bottom: 0.5%;
  padding: 0;
  display: block;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  overflow: hidden;
  font-size: 24px;
  font-size: 1.6vw;
  font-weight: 300;
  transition: background-color 0.75s ease;
  -moz-transition: background-color 0.75s ease;
  -webkit-transition: background-color 0.75s ease;
  -o-transition: background-color 0.75s ease;
  opacity: 0.3;
}

#wordsearch ul li.selected {
  background-color: rgb(23, 151, 61);
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  opacity: 1;
}

@media all and (max-width: 899px) {
  #wrap {
    width: 90%;
  }
}

@media all and (max-width: 799px) {
  #wrap {
    width: 90%;
    height: auto;
    margin-top: 40px;
    top: 0%;
  }
  #wordsearch {
    width: 90%;
    float: none;
    margin: 0 auto;
  }
  #wordsearch ul li {
    font-size: 4vw;
  }
  #main-content {
    float: none;
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    text-align: justify;
  }
  #main-content h1 {
    text-align: left;
  }
  #search input[type="text"] {
    width: 84%;
  }
  #search .input-search {
    width: 15%;
  }
}

@media all and (max-width: 499px) {
  #main-content h1 {
    font-size: 28px;
  }
}
</style>
