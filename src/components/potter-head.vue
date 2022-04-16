<template>
  <div id="header">
    <div class="top-header">
      <div>
          <h2>Feito com: xxxx</h2>
      </div>
      <div>
        <ul class="icons-header">
          <li>
            <h4>Tecnologias utilizadas:</h4>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/html-5.png" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/css.png" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/java-script.png" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/vue js.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <a href="home.vue">
        <h1>POTTER WIKI</h1>
      </a>
    </div>

    <div>
      <ul class="header-list">
        <li>
          <a href="">
            <button class="btn">Personagens</button>
          </a>
        </li>
        <li>
          <a href="">
            <button class="btn">filmes</button>
          </a>
        </li>
        <li>
          <a href="">
            <button class="btn">dicionário</button>
          </a>
        </li>
        <li>
          <a href="">
            <button class="btn">curiosidades</button>
          </a>
        </li>
        <li>
          <a href="">
            <button class="btn">magias</button>
          </a>
        </li>
        <li>
          <a href="">
            <button class="btn">livros</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bitter&family=Cinzel+Decorative&display=swap");

/* GERAIS */
.btn {
  background: transparent;
  border: 1px solid #1a9594;
  border-radius: 2px;
  padding: 5px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  color: #1a9594;
  font-family: "Bitter", serif;
}

.btn:hover {
  background: #033a4a;
  color: white;
  border: 1px solid #ffffff;
}

h4,
h2 {
  font-family: "Bitter", serif;
  font-weight: normal;
  font-size: 16px;
}

/* Top Header */
.top-header ul {
  display: flex;
  margin-top: 10px;
}

.top-header {
  display: flex;
  margin: 0 auto;
  max-width: 70%;
  justify-content: space-between;
  align-items: center;
}

.icons-th {
  width: 40px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.icons-th:hover {
  transform: scale(1.1);
}

.icons-header {
  align-items: center;
}

.icons-header li {
  margin: 0px 10px;
}

/* HEADER */

#header {
  width: 100%;
  text-align: center;
  background: #00151c;
  height: 202px;
  color: white;
}

#header a h1 {
  margin-top: 10px;
  font-family: "Cinzel Decorative", "cursive";
  font-size: 52px;
  color: white;
}

.logo {
  display: flex;
  justify-content: center;
}

.logo h1::after {
  content: "";
  background: white;
  display: block;
  width: 60px;
  height: 3px;
  margin: 2px auto;
}

.header-list {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.header-list li {
  margin: 0 20px 0 50px;
}
</style>
